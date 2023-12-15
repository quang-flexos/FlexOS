// Select all input elements and the textarea
var headlineInput = document.getElementById('headline');
var descriptionInput = document.getElementById('description');
var buttonTextInput = document.getElementById('buttonText');
var buttonLinkInput = document.getElementById('buttonLink');

// Event listeners for real-time updating of the banner elements
headlineInput.addEventListener('input', function() {
  document.getElementById('bannerHeadline').innerText = headlineInput.value;
});

descriptionInput.addEventListener('input', function() {
  document.getElementById('bannerDescription').innerText = descriptionInput.value;
});

buttonTextInput.addEventListener('input', function() {
  document.getElementById('bannerButton').innerText = buttonTextInput.value;
});

// Event listener for real-time updating of the button link
buttonLinkInput.addEventListener('input', function() {
  var bannerButton = document.getElementById('bannerButton');
  bannerButton.href = buttonLinkInput.value;
});


function copyHtml(elementId) {
  // Get the HTML of the element with the provided ID
  var html = document.getElementById(elementId).outerHTML;
  
  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(html).then(function() {
    alert('Copying HTML of ' + elementId + ' was successful.');
  }).catch(function(err) {
    alert('Oops, unable to copy. Error: ' + err.message);
  });
}

// Add event listeners to all buttons with the class 'copyHtmlButton'
document.querySelectorAll('.button.is-outline').forEach(function(button) {
  button.addEventListener('click', function() {
    var elementId = this.getAttribute('for');
    copyHtml(elementId);
  });
});
