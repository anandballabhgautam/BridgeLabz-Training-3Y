$(function () {
  // helper: the banner currently chosen in the dropdown
  function t() { return $('#' + $('#target').val()); }

  $('#hide').click(function () { t().hide(); });
  $('#show').click(function () { t().show(); });
  $('#slideUp').click(function () { t().slideUp(); });
  $('#slideDown').click(function () { t().slideDown(); });
  $('#fadeOut').click(function () { t().fadeOut(1000); });
  $('#fadeIn').click(function () { t().fadeIn(1000); });

  // 5. Rotate slides every 5s: fade out current, fade in next (wraps around)
  var slides = $('#rotator .slide'), cur = 0;
  setInterval(function () {
    slides.eq(cur).fadeOut(400, function () {
      cur = (cur + 1) % slides.length;
      slides.eq(cur).fadeIn(400);
    });
  }, 5000);
});
