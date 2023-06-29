document.getElementById('save-button').addEventListener('click', function() {
  var text = document.getElementById('text-input').value;

  // Generate a random filename for the text file
  var filename = generateFilename();

  // Construct the content for the Telegra.ph article
  var content = "<pre>" + text + "</pre>";

  // Open Telegra.ph in a new tab with the content
  window.open("https://telegra.ph/" + filename, "_blank");

  // Display the link container
  document.getElementById('link-container').style.display = 'block';

  // Set the input value to the shareable link
  document.getElementById('link-input').value = "https://telegra.ph/" + filename;
});

function generateFilename() {
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var filename = '';
  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    filename += chars[randomIndex];
  }
  return filename;
}
