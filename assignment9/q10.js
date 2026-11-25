$(function () {
  var existing = ['admin@site.com', 'john@site.com', 'mary@site.com', 'test@site.com', 'user@site.com'];

  // show error / mark field valid or invalid with a border colour set via .css()
  function check(input, errBox, ok, msg) {
    $(input).css('border', ok ? '2px solid green' : '2px solid red');
    $(errBox).text(ok ? '' : msg).css('color', 'red');
    return ok;
  }

  $('#regForm').submit(function (e) {
    e.preventDefault();                       // stop real submit
    var name = $.trim($('#name').val()), email = $.trim($('#email').val()).toLowerCase(), pw = $('#pass').val();

    var v1 = check('#name', '#eName', name !== '', 'Name is required');                 // 1
    var okFmt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);                                // 2 format
    var v2 = check('#email', '#eEmail', okFmt && $.inArray(email, existing) === -1,
                   okFmt ? 'Email already registered' : 'Invalid email format');        //   uniqueness
    var v3 = check('#pass', '#ePass', pw.length >= 8, 'Minimum 8 characters');          // 3

    // 4. success message only if every field is valid
    $('#result').text(v1 && v2 && v3 ? 'Registration successful! Welcome, ' + name + '.' : '');
  });
});
