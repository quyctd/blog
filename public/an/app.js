// Language toggle. The <head> picks vi or en before first paint (saved choice, else the browser
// language); this file only wires the button and keeps the title in step.
(function () {
  var root = document.documentElement;
  var full = document.title;
  var lang = root.getAttribute('data-lang') === 'en' ? 'en' : 'vi';
  function apply(l) {
    root.setAttribute('data-lang', l);
    root.lang = l;
    var t = full.split(' | ');
    document.title = t.length === 2 ? (l === 'vi' ? t[0] : t[1]) : full;
    document.querySelectorAll('.lang').forEach(function (b) {
      b.textContent = l === 'vi' ? 'EN' : 'VI';
      b.setAttribute('aria-label', l === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    });
  }
  apply(lang);
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.lang')) return;
    lang = lang === 'vi' ? 'en' : 'vi';
    apply(lang);
    try { localStorage.setItem('an-lang', lang); } catch (err) {}
  });
})();
