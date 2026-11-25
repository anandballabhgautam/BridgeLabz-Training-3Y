$(function () {
  var n = 5;
  function post(t) { return $('<article class="post"><h3></h3><p>Auto generated content.</p></article>').find('h3').text(t).end(); }

  $('#add').click(function () { $('#posts').append(post('New Post ' + (++n))); });          // 1. append at end
  $('#feat').click(function () { $('#posts').prepend(post('⭐ Featured Post ' + (++n))); }); // 2. prepend at top
  $('#rem').click(function () { $('#posts .post:last').remove(); });                        // 3. remove last

  // 4. .before() puts tag before the title, .after() puts it after the paragraph
  $('#tagBefore').click(function () {
    $('#posts .post:first h3').before('<span class="sel">#' + ($('#tag').val() || 'tag') + ' </span>');
  });
  $('#tagAfter').click(function () {
    $('#posts .post:first p').after('<span class="sel">#' + ($('#tag').val() || 'tag') + '</span>');
  });

  // 5. Highlight posts whose text contains the keyword
  $('#hlBtn').click(function () {
    var k = $.trim($('#kw').val()).toLowerCase();
    $('.post').each(function () {
      var hit = k && $(this).text().toLowerCase().indexOf(k) > -1;
      $(this).css('background', hit ? '#fff3bf' : '');
    });
  });
});
