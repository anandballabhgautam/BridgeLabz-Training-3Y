$(function () {
  // 1. Click a manager -> highlight every employee whose data-boss matches
  $('.manager').click(function () {
    $('.members li').css('background', '');
    $('.emp[data-boss="' + $(this).data('id') + '"]').parent().css('background', '#d0ebff');
  });

  // 2. Hover employee -> .next() is the contact span right after the name
  $('.emp').hover(function () { $(this).next('.contact').show(); },
                  function () { $(this).next('.contact').hide(); });

  // 3. Click department -> .children() of its member list get a new background
  $('.dept-name').click(function () {
    $(this).siblings('.members').children().css('background', '#d3f9d8');
  });

  // 4. Random employee -> highlight its siblings (other <li> in the same list)
  $('#random').click(function () {
    var all = $('.emp'), pick = all.eq(Math.floor(Math.random() * all.length));
    $('.members li').css('background', '');
    pick.parent().siblings().css('background', '#ffe8cc');
    pick.parent().css('background', '#ffd8a8');
  });

  // 5. .parent() climbs to the department, .find() locates its member list
  $('.toggle').click(function () {
    $(this).parent().find('.members').slideToggle();
    $(this).text($(this).text() === 'Collapse' ? 'Expand' : 'Collapse');
  });
});
