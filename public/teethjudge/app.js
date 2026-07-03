/* The verdict machine: count up a score, stamp the rating. */
(function () {
  var score = document.getElementById('score');
  var rating = document.getElementById('rating');
  var percentile = document.getElementById('percentile');
  var tip = document.getElementById('tip');
  var judge = document.getElementById('judge');
  if (!judge) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Same bands as the app.
  var bands = [
    { min: 90, label: '😁 COLGATE COMMERCIAL', tip: "Whatever you're doing, don't stop. Your dentist uses you as an example." },
    { min: 78, label: '😀 CERTIFIED BRIGHT', tip: "You're one whitening toothpaste away from elite. Brush 2×2 minutes daily and keep flossing." },
    { min: 64, label: '🙂 DECENT CIVILIAN', tip: 'Solid base. Add a whitening toothpaste and cut back on dark sodas to level up a band.' },
    { min: 48, label: '☕️ COFFEE ADDICT', tip: 'The coffee is winning. Drink it through a straw and rinse with water right after — stains fade in weeks.' },
    { min: 30, label: '🫖 TEA-STAINED VETERAN', tip: 'Time for a reset: book a professional cleaning, then hold the line with an electric brush 2× a day.' },
    { min: 0,  label: '🚨 CALL YOUR DENTIST', tip: 'No shame — but book a dental cleaning this week. A single visit will jump your score dramatically.' }
  ];

  function bandFor(s) {
    for (var i = 0; i < bands.length; i++) if (s >= bands[i].min) return bands[i];
    return bands[bands.length - 1];
  }

  function percentileFor(s) {
    var p = 1 / (1 + Math.exp(-(s - 55) / 12));
    return Math.max(1, Math.min(99, Math.round(p * 100)));
  }

  var animating = false;
  function verdict() {
    if (animating) return;
    animating = true;

    // Weighted roll: most smiles land mid-band, extremes stay rare.
    var target = Math.round(28 + Math.random() * 60 + (Math.random() < 0.12 ? 8 : 0));
    var band = bandFor(target);

    rating.textContent = '…';
    percentile.textContent = 'The enamel council is deliberating';
    tip.textContent = '';

    function land() {
      score.textContent = target;
      rating.textContent = band.label;
      percentile.textContent = 'Whiter than ' + percentileFor(target) + '% of smiles scanned';
      tip.textContent = band.tip;
      judge.textContent = 'Judge again';
      animating = false;
    }

    if (reduceMotion) { land(); return; }

    var steps = 26, step = 0;
    var timer = setInterval(function () {
      step++;
      score.textContent = Math.round(target * step / steps);
      if (step >= steps) { clearInterval(timer); land(); }
    }, 34);
  }

  judge.addEventListener('click', verdict);
})();
