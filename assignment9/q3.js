$(function () {
  // 1. Click question -> toggle its answer (next sibling)
  $('.question').click(function () { $(this).next('.answer').slideToggle(); });

  // 2. Hover changes colour
  $('.question').hover(function () { $(this).css('color', '#e8590c'); },
                       function () { $(this).css('color', ''); });

  // 3. Double-click collapses all answers
  $('.question').dblclick(function () { $('.answer').slideUp(); });

  // 4. Focus on input -> highlight the parent FAQ item's question
  $('.answer input').focus(function () {
    $(this).closest('.faq-item').find('.question').css('background', '#fff3bf');
  });
  // 5. Blur -> reset background
  $('.answer input').blur(function () {
    $(this).closest('.faq-item').find('.question').css('background', '');
  });
});
