function makeCoverItem(work) {
  const div = document.createElement('div');
  div.className = 'cover-item';
  div.setAttribute('role', 'button');
  div.setAttribute('tabindex', '0');
  div.onclick = () => { showAuthor(work.aId); };

  const tooltip = document.createElement('div');
  tooltip.className = 'cover-item-tooltip';
  tooltip.textContent = work.title + ' · ' + work.author;
  div.appendChild(tooltip);

  if (work.cover) {
    const img = document.createElement('img');
    img.alt = work.title;
    img.loading = 'lazy';
    img.onerror = () => { img.remove(); div.appendChild(makeFallback(work)); };
    img.src = `https://covers.openlibrary.org/b/id/${work.cover}-M.jpg`;
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

function renderCoverStrip() {
  const strip   = document.getElementById('cover-strip');
  const countEl = document.getElementById('cover-strip-count');
  if (!strip) return;

  const totalWorks = Object.values(AUTHORS).flat().reduce((n, a) => n + (a.works?.length || 0), 0);
  if (countEl) countEl.textContent = totalWorks + ' works';

  for (const work of COVER_WORKS) { strip.appendChild(makeCoverItem(work)); }
  for (const work of COVER_WORKS) { strip.appendChild(makeCoverItem(work)); }
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
    'grid-chinese':    AUTHORS.chinese    || [],
    'grid-sacred':     AUTHORS.sacred,
    'grid-nordic':     AUTHORS.nordic     || [],
    'grid-portuguese': AUTHORS.portuguese || [],
    'grid-polish':     AUTHORS.polish     || [],
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
      <div class="author-card" data-author-id="${a.id}" role="button" tabindex="0" style="animation-delay:${i * 0.04}s" onclick="showAuthor('${a.id}')">
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
      ? `<div class="search-result" role="button" tabindex="0" onmousedown="_goSearch('author','${r.a.id}','')" onkeydown="_srKey(event,'author','${r.a.id}','')">
           <div class="sr-title">${r.a.name}</div>
           <div class="sr-sub">${r.a.dates} · ${r.a.lang}</div>
         </div>`
      : `<div class="search-result" role="button" tabindex="0" onmousedown="_goSearch('work','${r.a.id}','${r.w.id}')" onkeydown="_srKey(event,'work','${r.a.id}','${r.w.id}')">
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

function _goSearch(type, aId, wId) {
  if (type === 'author') showAuthor(aId);
  else                   showCompare(aId, wId);
  closeSearch();
}

function _srKey(e, type, aId, wId) {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); _goSearch(type, aId, wId); }
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
    <div class="work-card" role="button" tabindex="0" style="animation-delay:${i * 0.06}s" onclick="showCompare('${id}','${w.id}')">
      ${w.cover ? `<div class="work-card-cover"><img src="${w.cover}" alt="" onerror="this.parentElement.style.display='none'"></div>` : ''}
      <div class="work-card-title">${w.title}</div>
      <div class="work-card-year">${w.year}</div>
      <div class="work-card-desc" id="wc-desc-${w.id}"></div>
      ${(w.chips || []).length ? `<div class="work-card-meta">${w.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>` : ''}
    </div>`).join('');

  _browseScrollY = window.scrollY;
  showPage('author');
  setRouteHash('#/author/' + encodeURIComponent(id));

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
function showCompare(aId, wId, passIdx) {
  curAuthorId = aId; curWorkId = wId; curPassIdx = passIdx || 0;
  const work = findWork(aId, wId);
  if (!work) { showAuthor(aId); return; }
  if (curPassIdx >= work.passages.length) curPassIdx = 0;
  document.getElementById('compare-work-title').textContent = work.title;
  document.getElementById('compare-back-btn').onclick = () => showAuthor(aId);
  renderPassPills(work);
  renderColumns(work);
  _browseScrollY = window.scrollY;
  showPage('compare');
  document.getElementById('compare-stage').scrollLeft = 0;
  setRouteHash('#/work/' + encodeURIComponent(aId) + '/' + encodeURIComponent(wId) + '/' + curPassIdx);
  const _stage = document.getElementById('compare-stage');
  _stage.onscroll = _syncTimeline;
}

function renderPassPills(work) {
  document.getElementById('compare-pass-pills').innerHTML =
    work.passages.map((p, i) =>
      `<button class="pass-btn${i === curPassIdx ? ' active' : ''}" onclick="selectPass(${i})">${p.label}</button>`
    ).join('');
  const prev = document.getElementById('pass-prev');
  const next = document.getElementById('pass-next');
  if (prev) prev.disabled = curPassIdx === 0;
  if (next) next.disabled = curPassIdx >= work.passages.length - 1;
}

function prevPass() { if (curPassIdx > 0) selectPass(curPassIdx - 1); }

function nextPass() {
  const w = findWork(curAuthorId, curWorkId);
  if (w && curPassIdx < w.passages.length - 1) selectPass(curPassIdx + 1);
}

function selectPass(i) {
  curPassIdx = i;
  const w = findWork(curAuthorId, curWorkId);
  renderPassPills(w);
  renderColumns(w);
  document.getElementById('compare-stage').scrollLeft = 0;
  setRouteHash('#/work/' + encodeURIComponent(curAuthorId) + '/' + encodeURIComponent(curWorkId) + '/' + curPassIdx);
}

function renderColumns(work) {
  const passage = work.passages[curPassIdx];
  const stage   = document.getElementById('compare-stage');

  stage.innerHTML = passage.cols.map(c => `
    <div class="t-col${c.src ? ' src' : ''}">
      <div class="t-col-top"></div>
      <div class="t-col-head">
        <div class="t-translator">${c.tr}</div>
        <div class="t-year">${c.yr}</div>
        <div class="t-note">${c.note}</div>
      </div>
      <div class="t-col-body">
        <div class="passage-text"${_rtlAttrs(c.text)}>${c.text}</div>
      </div>
      <div class="t-col-foot">${c.badges.map(b => `<span class="badge">${b}</span>`).join('')}${!c.src ? `<a class="edition-link" target="_blank" rel="noopener" href="https://openlibrary.org/search?q=${encodeURIComponent(work.title + ' ' + c.tr)}">Edition &#8599;</a>` : ''}</div>
    </div>`).join('');

  renderTimeline(work);
}

function _esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _rtlAttrs(t) {
  if (/[\u0590-\u05FF]/.test(t)) return ' dir="rtl" lang="he"';
  if (/[\u0600-\u06FF]/.test(t)) return ' dir="rtl" lang="ar"';
  return '';
}

function _filterWikiExtract(text) {
  return text
    .replace(/\s*\([^)]*\/[^/)]+\/[^)]*\)/g, '')
    .replace(/\s*\([^)]*[\u0370-\u03FF\u0400-\u04FF\u4E00-\u9FFF][^)]*\)/g, '')
    .replace(/\s*\([^)]*(?:romanized|lit\.|also spelled|born|died|fl\.)[^)]*\)/gi, '')
    .replace(/  +/g, ' ')
    .trim();
}

// ── TRANSLATION TIMELINE ──────────────────────────────────────────────────────
function parseYear(y) {
  const m = String(y).match(/\d+/);
  if (!m) return 0;
  const n = parseInt(m[0], 10);
  return /bce|bc\b/i.test(String(y)) ? -n : n;
}

function renderTimeline(work) {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  const passage = work.passages[curPassIdx];
  const items = passage.cols.map((c, idx) => ({ c, idx })).filter(x => !x.c.src);
  items.sort((a, b) => (parseYear(a.c.yr) - parseYear(b.c.yr)) || (a.idx - b.idx));
  tl.innerHTML = items.map(x => `
    <button class="tl-item" data-colidx="${x.idx}" onclick="scrollColTo(${x.idx})" title="${_esc(x.c.tr)}">
      <span class="tl-year">${_esc(x.c.yr)}</span>
      <span class="tl-name">${_esc(x.c.tr)}</span>
    </button>`).join('');
  _syncTimeline();
}

function _syncTimeline() {
  const tl = document.getElementById('timeline');
  const stage = document.getElementById('compare-stage');
  if (!tl || !stage) return;
  const cols = stage.querySelectorAll('.t-col');
  if (!cols.length) { tl.querySelectorAll('.tl-item').forEach(el => el.classList.remove('active')); return; }
  const sRect = stage.getBoundingClientRect();
  let active = 0;
  for (let i = 0; i < cols.length; i++) {
    if (cols[i].getBoundingClientRect().left - sRect.left <= sRect.width * 0.35) active = i;
  }
  tl.querySelectorAll('.tl-item').forEach(el => el.classList.toggle('active', parseInt(el.dataset.colidx, 10) === active));
}

function scrollColTo(idx) {
  const stage = document.getElementById('compare-stage');
  const col = stage.querySelectorAll('.t-col')[idx];
  if (col) col.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
}

// ── HASH ROUTING (deep links + back/forward) ─────────────────────────────────
function _safeDecode(s) { try { return decodeURIComponent(s); } catch(e) { return s; } }

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean);
  if (!parts.length || parts[0] === 'home') return { page: 'home' };
  if (parts[0] === 'browse') return { page: 'browse' };
  if (parts[0] === 'translators') return { page: 'translators' };
  if (parts[0] === 'about') return { page: 'about' };
  if (parts[0] === 'author' && parts[1]) return { page: 'author', aId: _safeDecode(parts[1]) };
  if (parts[0] === 'work' && parts[1] && parts[2]) {
    const pass = parseInt(parts[3], 10);
    return { page: 'work', aId: _safeDecode(parts[1]), wId: _safeDecode(parts[2]), pass: isNaN(pass) ? 0 : pass };
  }
  return { page: 'home' };
}

function onHashChange() {
  const r = parseHash();
  if (r.page === 'browse')      showPage('browse');
  else if (r.page === 'translators') showPage('translators');
  else if (r.page === 'about')  showPage('about');
  else if (r.page === 'author') showAuthor(r.aId);
  else if (r.page === 'work')   showCompare(r.aId, r.wId, r.pass);
  else                          showPage('home');
}

function setRouteHash(h) {
  try { if (window.location.hash !== h) window.location.hash = h; } catch(e) {}
}

// ── MOBILE SEARCH TOGGLE ─────────────────────────────────────────────────────
function toggleMobileSearch() {
  const tb = document.querySelector('.topbar');
  const open = tb.classList.toggle('search-open');
  if (open) {
    const i = document.getElementById('search-input');
    if (i) setTimeout(() => i.focus(), 50);
  } else {
    closeSearch();
  }
}

// ── TRANSLATOR INDEX ─────────────────────────────────────────────────────────
function renderTranslators() {
  const map = {};
  for (const list of Object.values(AUTHORS)) {
    for (const a of list || []) {
      for (const w of a.works || []) {
        const key = a.id + '/' + w.id;
        for (const p of w.passages || []) {
          for (const c of p.cols || []) {
            if (c.src) continue;
            if (!map[c.tr]) map[c.tr] = [];
            if (!map[c.tr].some(x => x.key === key)) {
              map[c.tr].push({ key, aId: a.id, aName: a.name, wId: w.id, wTitle: w.title, wYear: w.year });
            }
          }
        }
      }
    }
  }
  const wrap = document.getElementById('translator-index');
  if (!wrap) return;
  const names = Object.keys(map).sort((x, y) => x.localeCompare(y));
  wrap.innerHTML = names.map(name => {
    const works = map[name];
    return `<div class="translator-card">
      <div class="translator-card-name">${_esc(name)}</div>
      <div class="translator-card-count">${works.length} work${works.length !== 1 ? 's' : ''}</div>
      <div class="translator-card-works">${works.map(w =>
        `<button class="translator-work" onclick="showCompare('${w.aId}','${w.wId}')">
           <span class="tw-title">${_esc(w.wTitle)}</span>
           <span class="tw-author">${_esc(w.aName)} &middot; ${_esc(w.wYear)}</span>
         </button>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function stageScroll(d) {
  document.getElementById('compare-stage').scrollBy({ left: d * 390, behavior: 'smooth' });
}

// ── RELATED WORKS ─────────────────────────────────────────────────────────────
function toggleRelated() {
  const panel = document.getElementById('related-panel');
  const isOpen = panel.classList.toggle('open');
  if (isOpen) _renderRelatedWorks();
}

function _renderRelatedWorks() {
  const a = findAuthor(curAuthorId);
  if (!a) return;
  document.getElementById('related-author-name').textContent = a.name;
  const others = a.works.filter(w => w.id !== curWorkId);
  document.getElementById('related-works-row').innerHTML = others.length
    ? others.map(w => `
        <div class="related-card" role="button" tabindex="0" onclick="showCompare('${a.id}','${w.id}');document.getElementById('related-panel').classList.remove('open')">
          <div class="related-card-title">${w.title}</div>
          <div class="related-card-year">${w.year}</div>
          <div class="related-card-count">${w.passages.length} passage${w.passages.length !== 1 ? 's' : ''}</div>
        </div>`).join('')
    : `<div class="related-empty">No other works in the archive yet.</div>`;
}


document.addEventListener('keydown', e => {
  const el = e.target;
  if (el && el.getAttribute && el.getAttribute('role') === 'button' && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    el.click();
    return;
  }
  const comparePage = document.getElementById('page-compare');
  if (comparePage?.classList.contains('active')) {
    if (e.key === 'ArrowLeft')  stageScroll(-1);
    if (e.key === 'ArrowRight') stageScroll(1);
    if (e.key === '[')          prevPass();
    if (e.key === ']')          nextPass();
  }
});

renderBrowse();
renderCoverStrip();

// ── HASH ROUTING INIT ─────────────────────────────────────────────────────────
if (!window.location.hash) { try { history.replaceState(null, '', '#/'); } catch(e) {} }
window.addEventListener('hashchange', onHashChange);
onHashChange();
