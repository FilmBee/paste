document.getElementById('save-button').addEventListener('click', function() {
  var text = document.getElementById('text-input').value;

  // Prompt the user for the desired file name
  var filename = prompt("Enter a file name", "paste.txt");
  if (filename === null || filename.trim() === "") {
    return; // Cancelled or empty file name, do nothing
  }

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
});
