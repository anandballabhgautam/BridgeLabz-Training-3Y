// $v1 = jQuery 1.12.4, $v2 = jQuery 3.6.0 (separated using jQuery.noConflict(true))
$v1(function () {
  // Version 1: carousel rotation (auto every 3s + buttons)
  var s = $v1('#carousel .slide'), i = 0;
  function go(n) { s.eq(i).hide(); i = (n + s.length) % s.length; s.eq(i).fadeIn(); }
  setInterval(function () { go(i + 1); }, 3000);
  $v1('#next').click(function () { go(i + 1); });
  $v1('#prev').click(function () { go(i - 1); });

  // Version 1: highlight the widget the mouse is on
  $v1('.widget').on('mouseenter', function () { $v1(this).addClass('active-widget'); })
                .on('mouseleave', function () { $v1(this).removeClass('active-widget'); });
  $v1('#versions').text('Carousel/highlight use jQuery ' + $v1.fn.jquery);
});

$v2(function () {
  // Version 2: modal popup for notifications
  $v2('.notify').on('click', function () {
    $v2('#modalText').text($v2(this).data('msg'));
    $v2('#modal').fadeIn(200);
  });
  $v2('#closeModal').on('click', function () { $v2('#modal').fadeOut(200); });

  // Version 2: tooltip on hover (buttons + widgets with data-tip)
  $v2('.notify, [data-tip]').on('mouseenter', function () {
    $v2('#tip').text($v2(this).data('tip') || 'Show: ' + $v2(this).text()).show();
  }).on('mousemove', function (e) {
    $v2('#tip').css({ top: e.pageY + 12, left: e.pageX + 12 });
  }).on('mouseleave', function () { $v2('#tip').hide(); });
  $v2('#versions').append(' | Modal/tooltips use jQuery ' + $v2.fn.jquery);
});
