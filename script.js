document.getElementById('save-button').addEventListener('click', function() {
  var text = document.getElementById('text-input').value;

  // Generate a random filename for the text file
  var filename = generateFilename();

  // Save the text content in local storage
  localStorage.setItem(filename, text);

  // Display the link container
  document.getElementById('link-container').style.display = 'block';

  // Set the input value to the shareable link
  document.getElementById('link-input').value = window.location.href + '#' + filename;
});

function generateFilename() {
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var filename = '';
  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    filename += chars[randomIndex];
  }
  return filename + '.txt';
}
