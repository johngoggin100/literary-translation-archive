function makeCoverItem(work, imgUrl) {
  const div = document.createElement('div');
  div.className = 'cover-item';
  div.onclick = () => { showAuthor(work.aId); };

  const tooltip = document.createElement('div');
  tooltip.className = 'cover-item-tooltip';
  tooltip.textContent = work.title + ' · ' + work.author;
  div.appendChild(tooltip);

  if (imgUrl) {
    const img = document.createElement('img');
    img.alt = work.title;
    img.loading = 'lazy';
    img.onerror = () => { img.remove(); div.appendChild(makeFallback(work)); };
    img.src = imgUrl;
    div.appendChild(img);
  } else {
    div.appendChild(makeFallback(work));
  }
  return div;
}

function makeFallback(work) {
  const fb = document.createElement('div');
  fb.className = 'cover-item-fallback';
  fb.innerHTML = `<div class="cf-title">${work.title}</div><div class="cf-author">${work.author}</div>`;
  return fb;
}

async function renderCoverStrip() {
  const strip   = document.getElementById('cover-strip');
  const countEl = document.getElementById('cover-strip-count');
  if (!strip) return;

  const totalWorks = Object.values(AUTHORS).flat().reduce((n, a) => n + (a.works?.length || 0), 0);
  if (countEl) countEl.textContent = totalWorks + ' works';

  for (const work of COVER_WORKS) {
    strip.appendChild(makeCoverItem(work, `https://covers.openlibrary.org/b/isbn/${work.isbn}-M.jpg`));
  }
  for (const work of COVER_WORKS) {
    strip.appendChild(makeCoverItem(work, `https://covers.openlibrary.org/b/isbn/${work.isbn}-M.jpg`));
  }
}

function renderBrowse() {
  const map = {
    'grid-ancient':    AUTHORS.ancient,
    'grid-french':     AUTHORS.french,
    'grid-russian':    AUTHORS.russian,
    'grid-german':     AUTHORS.german,
    'grid-spanish':    AUTHORS.spanish,
    'grid-italian':    AUTHORS.italian,
    'grid-euro20':     AUTHORS.euro20,
    'grid-asian':      AUTHORS.asian,
    'grid-sacred':     AUTHORS.sacred,
    'grid-nordic':     AUTHORS.nordic     || [],
    'grid-portuguese': AUTHORS.portuguese || [],
    'grid-philosophy': AUTHORS.philosophy || [],
  };
  for (const [id, list] of Object.entries(map)) {
    const el      = document.getElementById(id);
    const section = el?.closest('.browse-section');
    if (!el) continue;
    const filtered = list.filter(a => a.works && a.works.length > 0);
    if (!filtered.length) {
      if (section) section.style.display = 'none';
      continue;
    }
    el.innerHTML = filtered.map((a, i) => `
      <div class="author-card" data-author-id="${a.id}" style="--card-acc:${a.acc};animation-delay:${i * 0.04}s" onclick="showAuthor('${a.id}')">
        <div class="author-name">${a.name}</div>
        <div class="author-dates">${a.dates} · ${a.lang}</div>
        <div class="author-works-count">${a.works.length} work${a.works.length > 1 ? 's' : ''}</div>
      </div>`).join('');
  }
}


// ── WORK DESCRIPTIONS (Open Library) ─────────────────────────────────────────
const _workDescCache = {};

async function fetchWorkDesc(workId, title, authorName) {
  if (workId in _workDescCache) return;
  _workDescCache[workId] = null;
  try {
    const r = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(authorName)}&limit=1&fields=key`
    );
    if (!r.ok) return;
    const d   = await r.json();
    const key = d.docs?.[0]?.key;
    if (!key) return;

    const wr = await fetch(`https://openlibrary.org${key}.json`);
    if (!wr.ok) return;
    const wd  = await wr.json();
    let desc  = wd.description
      ? (typeof wd.description === 'string' ? wd.description : wd.description.value)
      : null;
    if (desc) {
      desc = desc.split(/\n+/)[0].trim();
      if (desc.length > 240) desc = desc.slice(0, desc.lastIndexOf(' ', 240)) + '\u2026';
    }
    _workDescCache[workId] = desc;
  } catch(e) { _workDescCache[workId] = null; }
}


// ── SEARCH ────────────────────────────────────────────────────────────────────
let _searchTimer = null;

function onSearchInput(val) {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => _renderSearchDrop(val.trim()), 120);
}

function _searchAuthors(query) {
  query = query.toLowerCase();
  const results = [];
  for (const list of Object.values(AUTHORS)) {
    for (const a of list) {
      if (a.name.toLowerCase().includes(query)) {
        results.push({ type: 'author', a });
      }
      for (const w of (a.works || [])) {
        if (w.title.toLowerCase().includes(query)) {
          results.push({ type: 'work', a, w });
        }
      }
    }
  }
  return results.slice(0, 9);
}

function _renderSearchDrop(query) {
  const drop = document.getElementById('search-drop');
  if (!drop) return;
  if (!query) { drop.style.display = 'none'; return; }

  const results = _searchAuthors(query);
  if (!results.length) {
    drop.innerHTML = `<div class="search-empty">No results</div>`;
  } else {
    drop.innerHTML = results.map(r => r.type === 'author'
      ? `<div class="search-result" onmousedown="showAuthor('${r.a.id}');closeSearch()">
           <div class="sr-title">${r.a.name}</div>
           <div class="sr-sub">${r.a.dates} · ${r.a.lang}</div>
         </div>`
      : `<div class="search-result" onmousedown="showCompare('${r.a.id}','${r.w.id}');closeSearch()">
           <div class="sr-title">${r.w.title}</div>
           <div class="sr-sub">${r.a.name} · ${r.w.year}</div>
         </div>`
    ).join('');
  }
  drop.style.display = 'block';
}

function closeSearch() {
  const inp  = document.getElementById('search-input');
  const drop = document.getElementById('search-drop');
  if (inp)  inp.value = '';
  if (drop) drop.style.display = 'none';
}

function hideSearchDrop() {
  setTimeout(() => {
    const drop = document.getElementById('search-drop');
    if (drop) drop.style.display = 'none';
  }, 150);
}


// ── AUTHOR ────────────────────────────────────────────────────────────────────
let _browseScrollY = 0;

function showAuthor(id) {
  const a = findAuthor(id);
  if (!a) return;
  curAuthorId = id;
  document.getElementById('a-name').textContent = a.name;
  document.getElementById('a-meta').textContent = `${a.dates} · ${a.lang}`;
  const extractEl = document.getElementById('a-wiki-extract');
  if (extractEl) {
    const cached = getWikiExtract(a.id);
    if (cached) {
      extractEl.textContent = _filterWikiExtract(cached);
      extractEl.style.display = '';
    } else {
      extractEl.style.display = 'none';
      fetchWikiData(a.id).then(() => {
        const ex = getWikiExtract(a.id);
        if (ex) { extractEl.textContent = _filterWikiExtract(ex); extractEl.style.display = ''; }
      });
    }
  }
  const _tb = document.getElementById('a-tonkin-badge'); if (_tb) _tb.innerHTML = '';
  document.getElementById('author-back-btn').onclick = () => {
    showPage('browse');
    requestAnimationFrame(() => window.scrollTo(0, _browseScrollY));
  };

  document.getElementById('a-works-grid').innerHTML = a.works.map((w, i) => `
    <div class="work-card" style="animation-delay:${i * 0.06}s" onclick="showCompare('${id}','${w.id}')">
      ${w.cover ? `<div class="work-card-cover"><img src="${w.cover}" alt="" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="work-card-title">${w.title}</div>
      <div class="work-card-year">${w.year}</div>
      <div class="work-card-desc" id="wc-desc-${w.id}"></div>
    </div>`).join('');

  showPage('author');

  for (const w of a.works) {
    if (_workDescCache[w.id] !== undefined) {
      const el = document.getElementById('wc-desc-' + w.id);
      if (el && _workDescCache[w.id]) el.textContent = _workDescCache[w.id];
    } else {
      fetchWorkDesc(w.id, w.title, a.name).then(() => {
        const el = document.getElementById('wc-desc-' + w.id);
        if (el && _workDescCache[w.id]) el.textContent = _workDescCache[w.id];
      });
    }
  }
}


// ── COMPARE ───────────────────────────────────────────────────────────────────
function showCompare(aId, wId) {
  curAuthorId = aId; curWorkId = wId; curPassIdx = 0;
  const work = findWork(aId, wId);
  if (!work) return;
  document.getElementById('compare-work-title').textContent = work.title;
  document.getElementById('compare-back-btn').onclick = () => showAuthor(aId);
  renderPassPills(work);
  renderColumns(work);
  showPage('compare');
  document.getElementById('compare-stage').scrollLeft = 0;
}

function renderPassPills(work) {
  document.getElementById('compare-pass-pills').innerHTML =
    work.passages.map((p, i) =>
      `<button class="pass-btn${i === curPassIdx ? ' active' : ''}" onclick="selectPass(${i})">${p.label}</button>`
    ).join('');
}

function selectPass(i) {
  curPassIdx = i;
  const w = findWork(curAuthorId, curWorkId);
  renderPassPills(w);
  renderColumns(w);
  document.getElementById('compare-stage').scrollLeft = 0;
}

async function renderColumns(work) {
  const passage = work.passages[curPassIdx];
  const user    = LTA_Auth.currentUser();
  const stage   = document.getElementById('compare-stage');

  // Fade while loading
  stage.style.opacity        = '0.4';
  stage.style.pointerEvents  = 'none';

  const fetches = await Promise.all(passage.cols.map(async c => {
    if (c.src) return { ur: 0, submitted: [], userComs: [] };
    const [submitted, ur, userComs] = await Promise.all([
      LTA_Storage.getAllRatings(c.id),
      LTA_Storage.getUserRating(c.id, user?.id),
      LTA_Storage.getComments(c.id)
    ]);
    return { submitted, ur, userComs };
  }));

  stage.innerHTML = passage.cols.map((c, idx) => {
    const { submitted, ur, userComs } = fetches[idx];
    const seeded     = c.ratings || [];
    const allRatings = [...seeded, ...submitted];
    const avg        = allRatings.length
      ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
      : null;
    const stars = [1,2,3,4,5].map(n =>
      `<button class="star${n <= ur ? ' lit' : ''}" onclick="rateCol('${c.id}',${n},event)">&#9733;</button>`
    ).join('');

    const seededComs = c.comments || [];
    const allComs    = [...seededComs, ...userComs];
    const comsHtml   = allComs.length
      ? allComs.map(cm => {
          const isOwn = user && cm.user_id === user.id;
          return `<div class="comment">
            <div class="comment-meta">
              ${_esc(cm.display_name || cm.user)}${(cm.created_at || cm.ts) ? ' &middot; ' + _fmtDate(cm.created_at || cm.ts) : ''}
              ${isOwn ? `<button class="comment-delete" onclick="deleteComment('${cm.id}','${c.id}')" title="Delete">&#x2715;</button>` : ''}
            </div>
            <div class="comment-text">${_esc(cm.text)}</div>
          </div>`;
        }).join('')
      : `<div class="comments-empty">No comments yet.</div>`;

    const commentInput = user
      ? `<div class="comment-input-row">
           <textarea class="comment-input" id="ci-${c.id}" placeholder="Add a note on this translation\u2026" rows="2"></textarea>
           <button class="comment-submit" onclick="submitComment('${c.id}')">Post</button>
         </div>`
      : `<div class="comment-signin-prompt"><a onclick="openLogin()">Sign in</a> to join the discussion.</div>`;

    return `<div class="t-col${c.src ? ' src' : ''}" style="--col-acc:${c.acc}">
      <div class="t-col-top"></div>
      <div class="t-col-head">
        <div class="t-translator">${c.tr}</div>
        <div class="t-year">${c.yr}</div>
        <div class="t-note">${c.note}</div>
        ${!c.src ? `<div class="t-rating"><div class="stars" id="stars-${c.id}">${stars}</div><span class="rating-count">${avg ? avg + ' &middot; ' + allRatings.length + ' rating' + (allRatings.length !== 1 ? 's' : '') : 'Not yet rated'}</span></div>` : ''}
      </div>
      <div class="t-col-body">
        <div class="passage-text">${c.text}</div>
        ${!c.src ? `<div class="comments-section">
          <div class="comments-label">Discussion</div>
          ${comsHtml}
          ${commentInput}
        </div>` : ''}
      </div>
      <div class="t-col-foot">${c.badges.map(b => `<span class="badge">${b}</span>`).join('')}</div>
    </div>`;
  }).join('');

  stage.style.opacity       = '';
  stage.style.pointerEvents = '';
}

function _fmtDate(ts) {
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function _esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _filterWikiExtract(text) {
  return text
    .replace(/\s*\([^)]*\/[^/)]+\/[^)]*\)/g, '')
    .replace(/\s*\([^)]*[\u0370-\u03FF\u0400-\u04FF\u4E00-\u9FFF][^)]*\)/g, '')
    .replace(/\s*\([^)]*(?:romanized|lit\.|also spelled|born|died|fl\.)[^)]*\)/gi, '')
    .replace(/  +/g, ' ')
    .trim();
}

async function rateCol(colId, n, e) {
  e.stopPropagation();
  const user = LTA_Auth.currentUser();
  if (!user) { openLogin(); return; }

  // Optimistic star update
  const starsEl = document.getElementById('stars-' + colId);
  if (starsEl) {
    starsEl.querySelectorAll('.star').forEach((s, i) => {
      s.classList.toggle('lit', i < n);
    });
    starsEl.classList.add('stars-pulse');
    setTimeout(() => starsEl.classList.remove('stars-pulse'), 400);
  }

  await LTA_Storage.setRating(colId, user.id, n);
  renderColumns(findWork(curAuthorId, curWorkId));
}

async function submitComment(colId) {
  const user = LTA_Auth.currentUser();
  if (!user) { openLogin(); return; }
  const ta   = document.getElementById('ci-' + colId);
  const text = ta ? ta.value.trim() : '';
  if (!text) return;
  const btn  = ta.nextElementSibling;
  if (btn) { btn.disabled = true; btn.textContent = '…'; }
  await LTA_Storage.addComment(colId, user.id, user.displayName, text);
  renderColumns(findWork(curAuthorId, curWorkId));
}

async function deleteComment(commentId, colId) {
  await LTA_Storage.deleteComment(commentId);
  renderColumns(findWork(curAuthorId, curWorkId));
}

function stageScroll(d) {
  document.getElementById('compare-stage').scrollBy({ left: d * 390, behavior: 'smooth' });
}


// ── PAGE NAV (with scroll save) ───────────────────────────────────────────────
const _showPageBase = showPage;
function showPage(p) {
  if (document.getElementById('page-browse')?.classList.contains('active')) {
    _browseScrollY = window.scrollY;
  }
  _showPageBase(p);
}


// ── AUTH UI ───────────────────────────────────────────────────────────────────
let _authMode = 'signin';

function openLogin() {
  _authMode = 'signin';
  _syncAuthModal();
  document.getElementById('login-overlay').classList.add('open');
}

function closeLogin() {
  document.getElementById('login-overlay').classList.remove('open');
  _clearAuthForm();
}

function toggleAuthMode() {
  _authMode = _authMode === 'signin' ? 'signup' : 'signin';
  _syncAuthModal();
}

function _syncAuthModal() {
  const isIn = _authMode === 'signin';
  document.getElementById('auth-title').textContent      = isIn ? 'Sign in' : 'Create account';
  document.getElementById('auth-submit-btn').textContent = isIn ? 'Sign in' : 'Create account';
  document.getElementById('auth-switch-text').innerHTML  = isIn
    ? 'No account? <a onclick="toggleAuthMode()">Create one</a>'
    : 'Already have one? <a onclick="toggleAuthMode()">Sign in</a>';
  const nameRow = document.getElementById('auth-name-row');
  if (nameRow) nameRow.style.display = isIn ? 'none' : '';
  _setAuthError('');
}

function _setAuthError(msg) {
  const el = document.getElementById('auth-error');
  if (!el) return;
  el.textContent   = msg;
  el.style.display = msg ? '' : 'none';
}

function _clearAuthForm() {
  ['auth-email','auth-password','auth-name'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  _setAuthError('');
}

async function submitAuth() {
  const email    = document.getElementById('auth-email')?.value    || '';
  const password = document.getElementById('auth-password')?.value || '';
  const btn      = document.getElementById('auth-submit-btn');

  _setAuthError('');
  btn.disabled    = true;
  btn.textContent = '…';

  let result;
  if (_authMode === 'signin') {
    result = await LTA_Auth.signin(email, password);
  } else {
    const displayName = document.getElementById('auth-name')?.value || '';
    result = await LTA_Auth.register(email, displayName, password);
  }

  btn.disabled = false;
  if (result.ok) {
    closeLogin();
  } else {
    _setAuthError(result.error);
    btn.textContent = _authMode === 'signin' ? 'Sign in' : 'Create account';
  }
}

function _updateTopbar(user) {
  const wrap = document.getElementById('topbar-auth-wrap');
  if (!wrap) return;
  if (user) {
    wrap.innerHTML = `<span class="topbar-username">${_esc(user.displayName)}</span><button class="signout-btn" onclick="LTA_Auth.signout()">Sign out</button>`;
  } else {
    wrap.innerHTML = `<button class="login-btn" onclick="openLogin()">Sign in</button>`;
  }
  if (curAuthorId && curWorkId) {
    const pg = document.getElementById('page-compare');
    if (pg && pg.classList.contains('active')) {
      renderColumns(findWork(curAuthorId, curWorkId));
    }
  }
}

LTA_Auth.onAuthChange(_updateTopbar);

document.getElementById('login-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLogin();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('login-overlay').classList.contains('open')) {
    submitAuth();
    return;
  }
  const comparePage = document.getElementById('page-compare');
  if (comparePage?.classList.contains('active')) {
    if (e.key === 'ArrowLeft')  stageScroll(-1);
    if (e.key === 'ArrowRight') stageScroll(1);
  }
});

renderBrowse();
renderCoverStrip();
