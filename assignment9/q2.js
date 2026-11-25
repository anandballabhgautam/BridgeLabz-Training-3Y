$(function () {
  // 4. Attribute selector: any product that HAS data-discount gets special style
  $('.product[data-discount]').addClass('discount').each(function () {
    $(this).find('strong').after(' <em>(' + $(this).attr('data-discount') + '% OFF)</em>');
  });

  // 1 + 5. Click: alert if out of stock (data attribute), else toggle highlight
  $('.product').click(function () {
    if ($(this).data('stock') === 0) { alert($(this).find('strong').text() + ' is out of stock!'); return; }
    $(this).toggleClass('hl');
  });

  // 2. Hover shows extra details
  $('.product').hover(
    function () { $(this).find('.details').stop(true, true).slideDown(); },
    function () { $(this).find('.details').stop(true, true).slideUp(); });

  // 3. Favorite icon toggles "sel" (selected) class; stopPropagation avoids triggering the product click
  $('.fav').click(function (e) { e.stopPropagation(); $(this).toggleClass('sel'); });
});
