/* The verdict machine: roll a score, count it up, slide the shade marker,
   stamp the rating. Mirrors the app's bands. */
(function () {
  var score = document.getElementById('score');
  var rating = document.getElementById('rating');
  var percentile = document.getElementById('percentile');
  var tip = document.getElementById('tip');
  var marker = document.getElementById('marker');
  var state = document.getElementById('reportState');
  var reportNo = document.getElementById('reportNo');
  var judge = document.getElementById('judge');
  if (!judge) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Same bands as the app.
  var bands = [
    { min: 90, label: '😁 Colgate Commercial', tip: "Whatever you're doing, don't stop. Your dentist uses you as an example." },
    { min: 78, label: '😀 Certified Bright',   tip: "You're one whitening toothpaste away from elite. Brush 2×2 minutes daily and keep flossing." },
    { min: 64, label: '🙂 Decent Civilian',    tip: 'Solid base. Add a whitening toothpaste and cut back on dark sodas to level up a band.' },
    { min: 48, label: '☕️ Coffee Addict',      tip: 'The coffee is winning. Drink it through a straw and rinse with water right after — stains fade in weeks.' },
    { min: 30, label: '🫖 Tea-Stained Veteran', tip: 'Time for a reset: book a professional cleaning, then hold the line with an electric brush 2× a day.' },
    { min: 0,  label: '🚨 Call Your Dentist',   tip: 'No shame — but book a dental cleaning this week. A single visit will jump your score dramatically.' }
  ];

  function bandFor(s) {
    for (var i = 0; i < bands.length; i++) if (s >= bands[i].min) return bands[i];
    return bands[bands.length - 1];
  }

  function percentileFor(s) {
    var p = 1 / (1 + Math.exp(-(s - 55) / 12));
    return Math.max(1, Math.min(99, Math.round(p * 100)));
  }

  var no = 142;
  var animating = false;
  function verdict() {
    if (animating) return;
    animating = true;

    // Weighted roll: most smiles land mid-band, extremes stay rare.
    var target = Math.round(28 + Math.random() * 60 + (Math.random() < 0.12 ? 8 : 0));
    if (target > 100) target = 100;
    var band = bandFor(target);

    reportNo.textContent = 'SMILE REPORT · Nº' + String(++no).padStart(4, '0');
    state.textContent = 'ANALYZING';
    state.style.color = 'var(--faint)';
    rating.textContent = '…';
    percentile.textContent = 'The enamel council is deliberating';
    tip.textContent = '';

    function land() {
      score.textContent = target;
      marker.style.left = target + '%';
      rating.textContent = band.label;
      percentile.textContent = 'Whiter than ' + percentileFor(target) + '% of smiles scanned';
      tip.textContent = band.tip;
      state.textContent = 'ANALYZED';
      state.style.color = 'var(--mint)';
      judge.textContent = 'Judge again';
      animating = false;
    }

    if (reduceMotion) { land(); return; }

    var steps = 26, step = 0;
    var from = parseInt(score.textContent, 10) || 0;
    var timer = setInterval(function () {
      step++;
      var v = Math.round(from + (target - from) * step / steps);
      score.textContent = v;
      marker.style.left = v + '%';
      if (step >= steps) { clearInterval(timer); land(); }
    }, 34);
  }

  judge.addEventListener('click', verdict);
})();
