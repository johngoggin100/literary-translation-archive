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
  // Duplicate for seamless CSS animation loop
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
    const el = document.getElementById(id);
    if (!el) continue;
    el.innerHTML = list.filter(a => a.works && a.works.length > 0).map((a, i) => `
      <div class="author-card" data-author-id="${a.id}" style="--card-acc:${a.acc};animation-delay:${i * 0.04}s" onclick="showAuthor('${a.id}')">
        <div class="author-name">${a.name}</div>
        <div class="author-dates">${a.dates} · ${a.lang}</div>
        <div class="author-works-count">${a.works.length} work${a.works.length > 1 ? 's' : ''}</div>
      </div>`).join('');
  }
}


// ── AUTHOR ────────────────────────────────────────────────────────────────────
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
  document.getElementById('author-back-btn').onclick = () => showPage('browse');
  document.getElementById('a-works-grid').innerHTML = a.works.map((w, i) => `
    <div class="work-card" style="animation-delay:${i * 0.06}s" onclick="showCompare('${id}','${w.id}')">
      ${w.cover ? `<div class="work-card-cover"><img src="${w.cover}" alt="" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="work-card-title">${w.title}</div>
      <div class="work-card-year">${w.year}</div>
      <div class="work-card-meta">${w.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </div>`).join('');
  showPage('author');
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

function renderColumns(work) {
  const passage = work.passages[curPassIdx];
  const user    = LTA_Auth.currentUser();

  document.getElementById('compare-stage').innerHTML = passage.cols.map(c => {
    // Ratings: merge seeded data ratings with user-submitted
    const seeded     = c.ratings || [];
    const submitted  = LTA_Storage.getAllRatings(c.id);
    const allRatings = [...seeded, ...submitted];
    const avg        = allRatings.length
      ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
      : null;
    const ur = LTA_Storage.getUserRating(c.id, user?.email);
    const stars = [1,2,3,4,5].map(n =>
      `<button class="star${n <= ur ? ' lit' : ''}" onclick="rateCol('${c.id}',${n},event)">&#9733;</button>`
    ).join('');

    // Comments: merge seeded + user-submitted
    const seededComs = c.comments || [];
    const userComs   = LTA_Storage.getComments(c.id);
    const allComs    = [...seededComs, ...userComs];
    const comsHtml   = allComs.length
      ? allComs.map(cm => `
          <div class="comment">
            <div class="comment-meta">${_esc(cm.displayName || cm.user)}${cm.ts ? ' &middot; ' + _fmtDate(cm.ts) : ''}</div>
            <div class="comment-text">${_esc(cm.text)}</div>
          </div>`).join('')
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
        ${!c.src ? `<div class="t-rating"><div class="stars">${stars}</div><span class="rating-count">${avg ? avg + ' &middot; ' + allRatings.length + ' rating' + (allRatings.length !== 1 ? 's' : '') : 'Not yet rated'}</span></div>` : ''}
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
}

function _filterWikiExtract(text) {
  return text
    // Remove parentheticals containing IPA (slashes with phonetic content)
    .replace(/\s*\([^)]*\/[^/)]+\/[^)]*\)/g, '')
    // Remove parentheticals containing non-Latin scripts (Greek, Cyrillic, etc.)
    .replace(/\s*\([^)]*[\u0370-\u03FF\u0400-\u04FF\u4E00-\u9FFF][^)]*\)/g, '')
    // Remove parentheticals with "romanized:", "lit.", "also spelled", etc.
    .replace(/\s*\([^)]*(?:romanized|lit\.|also spelled|born|died|fl\.)[^)]*\)/gi, '')
    // Collapse any double spaces left behind
    .replace(/  +/g, ' ')
    .trim();
}

function _fmtDate(ts) {
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function _esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function rateCol(colId, n, e) {
  e.stopPropagation();
  const user = LTA_Auth.currentUser();
  if (!user) { openLogin(); return; }
  LTA_Storage.setRating(colId, user.email, n);
  renderColumns(findWork(curAuthorId, curWorkId));
}

function submitComment(colId) {
  const user = LTA_Auth.currentUser();
  if (!user) { openLogin(); return; }
  const ta   = document.getElementById('ci-' + colId);
  const text = ta ? ta.value.trim() : '';
  if (!text) return;
  LTA_Storage.addComment(colId, user.email, user.displayName, text);
  renderColumns(findWork(curAuthorId, curWorkId));
}

function stageScroll(d) {
  document.getElementById('compare-stage').scrollBy({ left: d * 390, behavior: 'smooth' });
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
  el.textContent    = msg;
  el.style.display  = msg ? '' : 'none';
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
  // If compare is active, refresh columns to update auth-gated UI
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
  }
});

renderBrowse();
renderCoverStrip();
