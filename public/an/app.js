// Language toggle: Vietnamese first, English on request (or for a non-Vietnamese browser).
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('an-lang'); } catch (e) {}
  var nav = (navigator.language || 'vi').toLowerCase();
  var lang = saved || (nav.indexOf('vi') === 0 ? 'vi' : 'en');
  function apply(l) {
    root.dataset.lang = l;
    root.lang = l;
    var t = document.title.split(' | ');
    if (t.length === 2) document.title = l === 'vi' ? t[0] : t[1];
    document.querySelectorAll('.lang').forEach(function (b) { b.textContent = l === 'vi' ? 'EN' : 'VI'; b.setAttribute('aria-label', l === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'); });
  }
  var full = document.title;
  apply(lang);
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.lang')) return;
    lang = lang === 'vi' ? 'en' : 'vi';
    document.title = full;
    apply(lang);
    try { localStorage.setItem('an-lang', lang); } catch (err) {}
  });
})();
