// Apply dark mode on page load
document.addEventListener("DOMContentLoaded", function() {
  var darkModeToggle = document.getElementById("dark-mode-toggle");
  var body = document.body;
  
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

// Save the file directly without browser prompt
document.getElementById("save-button").addEventListener("click", function() {
  var text = document.getElementById("text-input").value;
  var filename = document.getElementById("file-name-input").value;

  if (filename.trim() === "") {
    alert("Please enter a valid file name.");
    return;
  }

  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
});

// Toggle dark mode
document.getElementById("dark-mode-toggle").addEventListener("change", function() {
  var body = document.body;
  body.classList.toggle("dark-mode");
});
