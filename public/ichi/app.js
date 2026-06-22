/* Ichi landing — the interactive Calm Bloom. Complete the one task; the next
   rises into place; reach All clear. The task name is editable (tap the text),
   and the checkbox choreography mirrors the app's CompletionGlyph (§7). Plus a
   live theme switcher (the Pro lever). */
(function () {
  var TASKS = [
    'Write the project brief',
    'Reply to the landlord',
    'Book the dentist',
    'Plan the weekend trip'
  ];

  var panel  = document.getElementById('panel');
  var task   = document.getElementById('task');
  var check  = document.getElementById('check');
  var bloom  = document.getElementById('bloom');
  var title  = document.getElementById('title');
  var hint   = document.getElementById('hint');

  // counterclockwise refresh glyph for "Start over" — an SVG (not a text
  // character) so it aligns cleanly with the label inside the flex pill
  var REPLAY_ICO =
    '<span class="replay-ico" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none">' +
        '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M3 3v5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>' +
    '</span>';

  var i = 0;
  var busy = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function escapeHTML(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // Single source of truth for the active task row — used by both render() and
  // reset() so the markup (editable title + checkmark SVG) never drifts.
  function taskHTML(text) {
    return '<div class="task entering" id="task">' +
      '<div class="task-row">' +
        '<button class="check" id="check" aria-label="Complete this task">' +
          '<svg viewBox="0 0 22 22" aria-hidden="true"><path d="M5 11.5 L9.2 15.5 L17 6.7"/></svg>' +
        '</button>' +
        '<span class="bloom" id="bloom" aria-hidden="true"></span>' +
        '<span class="task-title" id="title" contenteditable="true" spellcheck="false" ' +
          'role="textbox" aria-label="Task name — tap to edit" enterkeyhint="done" ' +
          'title="Tap to edit">' + escapeHTML(text) + '</span>' +
      '</div>' +
    '</div>';
  }

  function complete() {
    if (busy) return;
    if (i >= TASKS.length) return;
    busy = true;

    commitTitle();                      // save any in-flight edit before advancing
    title.setAttribute('contenteditable', 'false'); // freeze the text mid-ceremony

    check.classList.add('done');
    if (!reduce) { bloom.classList.remove('go'); void bloom.offsetWidth; bloom.classList.add('go'); }

    // let the check fill + ring bloom (~0.55s in the app) read before the
    // hero strikes through and floats up
    var advanceDelay = reduce ? 0 : 420;
    setTimeout(function () {
      task.classList.add('leaving');
      i++;

      var after = reduce ? 0 : 300;     // next rises while the old hero exits
      setTimeout(function () { render(); busy = false; }, after);
    }, advanceDelay);
  }

  function render() {
    if (i >= TASKS.length) {
      panel.classList.add('cleared');
      panel.setAttribute('data-stage', 'cleared');
      task.outerHTML =
        '<div class="cleared-state" id="task">' +
          '<div class="big">All clear</div>' +
          '<div class="small">Nothing left for now</div>' +
          '<button class="replay" id="replay" type="button">' + REPLAY_ICO + 'Start over</button>' +
        '</div>';
      document.getElementById('replay').addEventListener('click', reset);
      return;
    }
    // rebuild the active task row fresh so animations restart cleanly
    document.getElementById('task').outerHTML = taskHTML(TASKS[i]);
    rebind();
  }

  function rebind() {
    task  = document.getElementById('task');
    check = document.getElementById('check');
    bloom = document.getElementById('bloom');
    title = document.getElementById('title');
    check.addEventListener('click', complete);
    bindTitle();
  }

  // ── editable task name ──────────────────────────────────
  function commitTitle() {
    if (!title) return;
    var t = title.textContent.replace(/\s+/g, ' ').trim();
    if (!t) { t = TASKS[i]; title.textContent = t; } // never allow an empty task
    TASKS[i] = t;                                     // persists through Start over
  }

  function bindTitle() {
    title.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); title.blur(); }   // single line
    });
    title.addEventListener('blur', commitTitle);
  }

  function reset() {
    if (busy) return;
    busy = true;

    // float the "All clear" state up first, then rise the first task in —
    // mirroring the completion flow so Start over feels just as smooth.
    var node = document.getElementById('task');
    if (!reduce) node.classList.add('leaving');

    var after = reduce ? 0 : 300;
    setTimeout(function () {
      i = 0;
      panel.classList.remove('cleared');
      panel.setAttribute('data-stage', 'active');
      document.getElementById('task').outerHTML = taskHTML(TASKS[0]);
      rebind();
      busy = false;
    }, after);
  }

  check.addEventListener('click', complete);
  bindTitle();

  // ── theme switcher ──────────────────────────────────────
  var swatches = document.querySelectorAll('.swatch');
  swatches.forEach(function (sw) {
    sw.addEventListener('click', function () {
      var t = sw.getAttribute('data-theme');
      if (t === 'warm') document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', t);
      swatches.forEach(function (s) { s.setAttribute('aria-pressed', s === sw ? 'true' : 'false'); });
    });
  });
})();
