document.getElementById('save-button').addEventListener('click', function() {
  var text = document.getElementById('text-input').value;

  // Generate a random filename for the text file
  var filename = generateFilename();

  // Create a Blob object with the text content
  var blob = new Blob([text], { type: 'text/plain' });

  // Create a temporary <a> element to generate the download link
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Append the link to the page
  document.body.appendChild(link);

  // Trigger a click event to initiate the download
  link.click();

  // Remove the temporary link from the page
  document.body.removeChild(link);

  // Display the link container
  document.getElementById('link-container').style.display = 'block';

  // Set the input value to the shareable link
  document.getElementById('link-input').value = window.location.href + filename;
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
