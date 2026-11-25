$(function () {
  var courses = $('.course');
  courses.each(function () { $(this).data('orig', $(this).text()); }); // remember original text

  // 1. keyup -> filter in real time
  $('#search').keyup(function () {
    var q = $.trim($(this).val()).toLowerCase(), n = 0;
    courses.each(function () {
      var txt = $(this).data('orig'), i = txt.toLowerCase().indexOf(q);
      if (q === '' || i > -1) {
        // 2. wrap matched part in <span> and style it with .css()
        $(this).html(q === '' ? txt : txt.substr(0, i) + '<span class="m">' + txt.substr(i, q.length) + '</span>' + txt.substr(i + q.length));
        $(this).find('.m').css({ background: 'yellow', fontWeight: 'bold' });
        $(this).show(); n++;        // 3. show matches
      } else { $(this).hide(); }     // hide non-matches
    });
    $('#count').text(n);             // 4. matched count
  });

  // 5. Clear -> reset everything
  $('#clear').click(function () { $('#search').val('').keyup(); });
});
