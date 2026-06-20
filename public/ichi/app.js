/* Ichi landing — the interactive Calm Bloom. Complete the one task; the next
   rises into place; reach All clear. Plus a live theme switcher (the Pro lever). */
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
  var count  = document.getElementById('count');
  var hint   = document.getElementById('hint');
  var replay = document.getElementById('replay');

  var i = 0;
  var busy = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setCount() {
    var left = TASKS.length - i;
    count.textContent = left > 0 ? left + (left === 1 ? ' to go' : ' to go') : 'All clear';
  }

  function complete() {
    if (busy) return;
    if (i >= TASKS.length) return;
    busy = true;

    check.classList.add('done');
    if (!reduce) { bloom.classList.remove('go'); void bloom.offsetWidth; bloom.classList.add('go'); }

    var advanceDelay = reduce ? 0 : 360;
    setTimeout(function () {
      task.classList.add('leaving');
      i++;
      setCount();

      var after = reduce ? 0 : 300;
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
        '</div>';
      return;
    }
    // rebuild the active task row fresh so animations restart cleanly
    var html =
      '<div class="task entering" id="task">' +
        '<div class="task-row">' +
          '<button class="check" id="check" aria-label="Complete this task"></button>' +
          '<span class="bloom" id="bloom" aria-hidden="true"></span>' +
          '<span class="task-title" id="title">' + TASKS[i] + '</span>' +
        '</div>' +
      '</div>';
    document.getElementById('task').outerHTML = html;
    rebind();
  }

  function rebind() {
    task  = document.getElementById('task');
    check = document.getElementById('check');
    bloom = document.getElementById('bloom');
    title = document.getElementById('title');
    check.addEventListener('click', complete);
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
      document.getElementById('task').outerHTML =
        '<div class="task entering" id="task">' +
          '<div class="task-row">' +
            '<button class="check" id="check" aria-label="Complete this task"></button>' +
            '<span class="bloom" id="bloom" aria-hidden="true"></span>' +
            '<span class="task-title" id="title">' + TASKS[0] + '</span>' +
          '</div>' +
        '</div>';
      rebind();
      setCount();
      busy = false;
    }, after);
  }

  check.addEventListener('click', complete);
  replay.addEventListener('click', reset);
  setCount();

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
