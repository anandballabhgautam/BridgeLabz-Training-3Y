$(function () {
  var on = false;
  // 5. Build a success message and insert it into the DOM
  function say(t) {
    var m = $('<p class="msg"></p>').text(t).appendTo('#messages');
    setTimeout(function () { m.fadeOut(function () { m.remove(); }); }, 2500);
  }
  $('#subscribe').click(function () { on = true; $('#status').text('ON'); say('Notifications enabled.'); });
  $('#unsubscribe').click(function () { on = false; $('#status').text('OFF'); say('Notifications disabled.'); });

  // handler attached with .on(); also used for dynamically created topics
  function toggleTopic() {
    if (!on) { say('Subscribe first to enable notifications.'); return; }
    $(this).toggleClass('sel');
    say('Topic "' + $(this).find('span').text() + '" ' + ($(this).hasClass('sel') ? 'followed.' : 'unfollowed.'));
  }
  function removeTopic() {
    var li = $(this).closest('.topic');
    li.off('click');          // detach the click handler first
    li.remove(); say('Topic removed.');
  }
  $('.topic').on('click', toggleTopic);
  $('.rm').on('click', function (e) { e.stopPropagation(); removeTopic.call(this); });

  // 3. Add a new topic and attach .on() events to it
  $('#addTopic').click(function () {
    var name = $.trim($('#newTopic').val());
    if (!name) return;
    var li = $('<li class="topic"><span></span> <button class="rm">Remove</button></li>');
    li.find('span').text(name);
    li.on('click', toggleTopic);
    li.find('.rm').on('click', function (e) { e.stopPropagation(); removeTopic.call(this); });
    $('#topics').append(li); $('#newTopic').val(''); say('Topic "' + name + '" added.');
  });
});
