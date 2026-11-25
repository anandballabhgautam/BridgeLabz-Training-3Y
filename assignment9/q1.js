$(function () {
  // 1. Greeting based on the hour of the day
  var h = new Date().getHours();
  var text = h < 12 ? 'Good Morning!' : h < 18 ? 'Good Afternoon!' : 'Good Evening!';
  $('#greeting').text(text);

  var quotes = ['Believe you can and you are halfway there.',
    'Small steps every day lead to big results.',
    'Dream big. Start small. Act now.',
    'Difficult roads lead to beautiful destinations.',
    'Your only limit is your mind.'];

  // 2. Replace the greeting with a random motivational quote
  $('#changeBtn').click(function () {
    $('#greeting').text(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  // 3. slideToggle shows/hides the welcome message
  $('#toggleBtn').click(function () { $('#welcome').slideToggle(); });

  // 4. Alert when the greeting itself is clicked
  $('#greeting').click(function () { alert('You clicked: ' + $(this).text()); });
});
