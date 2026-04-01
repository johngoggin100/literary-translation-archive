// ── SUPABASE CLIENT ───────────────────────────────────────────────────────────
const _sb = supabase.createClient(
  'https://hyfmubmkhorjoiitprua.supabase.co',
  'sb_publishable_dXV63dlUP9h21EVSW5D41g_8byNDcNy'
);

// ── LTA AUTH ──────────────────────────────────────────────────────────────────
const LTA_Auth = (() => {
  let _session  = null;
  let _ready    = false;
  const listeners = [];

  function userFromSession(s) {
    if (!s) return null;
    return {
      id:          s.user.id,
      email:       s.user.email,
      displayName: s.user.user_metadata?.display_name || s.user.email.split('@')[0]
    };
  }

  function emit() {
    if (!_ready) return;
    const user = userFromSession(_session);
    listeners.forEach(fn => fn(user));
  }

  _sb.auth.onAuthStateChange((_event, session) => {
    _session = session;
    _ready   = true;
    emit();
  });

  return {
    onAuthChange(fn) { listeners.push(fn); if (_ready) fn(userFromSession(_session)); },
    currentUser()    { return _ready ? userFromSession(_session) : null; },

    async register(email, displayName, password) {
      email       = email.trim().toLowerCase();
      displayName = displayName.trim();
      if (!email || !displayName || !password)
        return { ok: false, error: 'All fields are required.' };
      if (password.length < 6)
        return { ok: false, error: 'Password must be at least 6 characters.' };
      const { error } = await _sb.auth.signUp({
        email, password,
        options: { data: { display_name: displayName } }
      });
      if (error) return { ok: false, error: error.message };
      return { ok: true };
    },

    async signin(email, password) {
      email = email.trim().toLowerCase();
      if (!email || !password)
        return { ok: false, error: 'Email and password are required.' };
      const { error } = await _sb.auth.signInWithPassword({ email, password });
      if (error) return { ok: false, error: error.message };
      return { ok: true };
    },

    async signout() { await _sb.auth.signOut(); }
  };
})();

// ── LTA STORAGE ───────────────────────────────────────────────────────────────
const LTA_Storage = {
  async getUserRating(colId, userId) {
    if (!userId) return 0;
    const { data } = await _sb.from('ratings')
      .select('rating').eq('col_id', colId).eq('user_id', userId).maybeSingle();
    return data?.rating || 0;
  },

  async getAllRatings(colId) {
    const { data } = await _sb.from('ratings').select('rating').eq('col_id', colId);
    return (data || []).map(r => r.rating);
  },

  async setRating(colId, userId, n) {
    await _sb.from('ratings')
      .upsert({ col_id: colId, user_id: userId, rating: n }, { onConflict: 'col_id,user_id' });
  },

  async getComments(colId) {
    const { data } = await _sb.from('comments')
      .select('*').eq('col_id', colId).order('created_at', { ascending: true });
    return data || [];
  },

  async addComment(colId, userId, displayName, text) {
    await _sb.from('comments')
      .insert({ col_id: colId, user_id: userId, display_name: displayName, text });
  }
};
