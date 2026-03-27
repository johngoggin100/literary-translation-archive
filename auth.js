// ── LTA AUTH & STORAGE ────────────────────────────────────────────────────────

async function _ltaHash(pw) {
  const buf = await crypto.subtle.digest('SHA-256',
    new TextEncoder().encode(pw + ':lta'));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

const LTA_Auth = (() => {
  const USERS_KEY   = 'lta:users';
  const SESSION_KEY = 'lta:session';
  const listeners   = [];

  function getUsers()    { try { return JSON.parse(localStorage.getItem(USERS_KEY)   || '{}');  } catch { return {}; } }
  function saveUsers(u)  { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
  function getSession()  { try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; } }
  function saveSession(s){ if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s)); else localStorage.removeItem(SESSION_KEY); }
  function emit(user)    { listeners.forEach(fn => fn(user)); }

  return {
    onAuthChange(fn) { listeners.push(fn); fn(getSession()); },
    currentUser()    { return getSession(); },

    async register(email, displayName, password) {
      email       = email.trim().toLowerCase();
      displayName = displayName.trim();
      if (!email || !displayName || !password)
        return { ok: false, error: 'All fields are required.' };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return { ok: false, error: 'Invalid email address.' };
      if (password.length < 6)
        return { ok: false, error: 'Password must be at least 6 characters.' };
      const users = getUsers();
      if (users[email])
        return { ok: false, error: 'An account with that email already exists.' };
      const hash = await _ltaHash(password);
      users[email] = { hash, displayName };
      saveUsers(users);
      const session = { email, displayName };
      saveSession(session);
      emit(session);
      return { ok: true };
    },

    async signin(email, password) {
      email = email.trim().toLowerCase();
      if (!email || !password)
        return { ok: false, error: 'Email and password are required.' };
      const users = getUsers();
      const user  = users[email];
      if (!user)
        return { ok: false, error: 'No account found with that email.' };
      const hash = await _ltaHash(password);
      if (hash !== user.hash)
        return { ok: false, error: 'Incorrect password.' };
      const session = { email, displayName: user.displayName };
      saveSession(session);
      emit(session);
      return { ok: true };
    },

    signout() {
      saveSession(null);
      emit(null);
    }
  };
})();

// ── STORAGE (ratings + comments) ──────────────────────────────────────────────

const LTA_Storage = (() => {
  const RATINGS_KEY  = 'lta:ratings';
  const COMMENTS_KEY = 'lta:comments';

  function getRatings()    { try { return JSON.parse(localStorage.getItem(RATINGS_KEY)  || '{}'); } catch { return {}; } }
  function saveRatings(r)  { localStorage.setItem(RATINGS_KEY,  JSON.stringify(r)); }
  function getComments()   { try { return JSON.parse(localStorage.getItem(COMMENTS_KEY) || '[]'); } catch { return []; } }
  function saveComments(c) { localStorage.setItem(COMMENTS_KEY, JSON.stringify(c)); }

  return {
    getUserRating(colId, email) {
      if (!email) return 0;
      const r = getRatings();
      return (r[colId] && r[colId][email]) || 0;
    },

    getAllRatings(colId) {
      return Object.values(getRatings()[colId] || {});
    },

    setRating(colId, email, n) {
      const r = getRatings();
      if (!r[colId]) r[colId] = {};
      r[colId][email] = n;
      saveRatings(r);
    },

    getComments(colId) {
      return getComments().filter(c => c.colId === colId);
    },

    addComment(colId, email, displayName, text) {
      const all = getComments();
      all.push({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
        colId, email, displayName, text,
        ts: Date.now()
      });
      saveComments(all);
    }
  };
})();
