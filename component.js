// Select all input elements and the textarea
var headline = document.getElementById('headline');
var description = document.getElementById('description');
var bannerButton = document.getElementById('bannerButton');
var buttonText = document.getElementById('buttonText');
var buttonLink = document.getElementById('buttonLink');

var buttonOnly = document.getElementById('cta-button-only');
var buttonText2 = document.getElementById('buttonText2');
var buttonLink2 = document.getElementById('buttonLink2');

// Event listeners for real-time updating of the banner elements
headline.addEventListener('input', function() {
  document.getElementById('bannerHeadline').innerText = headline.value;
});

description.addEventListener('input', function() {
  document.getElementById('bannerDescription').innerText = description.value;
});

// Event listener for real-time updating of the button 1
buttonText.addEventListener('input', function() {
  document.getElementById('bannerButton').innerText = buttonText.value;
});

buttonLink.addEventListener('input', function() {
  bannerButton.href = buttonLink.value;
});

// Event listener for real-time updating of the button 2
buttonText2.addEventListener('input', function() {
  document.getElementById('bannerButton').innerText = buttonText2.value;
});

buttonLink2.addEventListener('input', function() {
  buttonOnly.href = buttonLink2.value;
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
