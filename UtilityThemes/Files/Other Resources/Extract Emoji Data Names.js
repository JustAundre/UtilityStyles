function extractEmojiDataNames() {
  // Find all elements matching the selector
  const emojiElements = document.querySelectorAll('img.emoji');

  // Create a text content variable to store the data-name values
  let textContent = '';

  // Iterate over each emoji element
  emojiElements.forEach(emoji => {
    // Extract the data-name attribute value
    const dataName = emoji.getAttribute('data-name');

    // Append the data-name to the text content, adding a newline
    textContent += '[data-name="' + dataName + '"]\n';
  });

  // Create a temporary Blob object from the text content
  const blob = new Blob([textContent], { type: 'text/plain' });

  // Create a temporary URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create a hidden anchor element to trigger the download
  const   
 a = document.createElement('a');
  a.href = url;
  a.download = 'emoji-data-names.txt';
  a.style.display = 'none';
  document.body.appendChild(a);

  // Trigger the download
  a.click();

  // Clean up the temporary URL and anchor element
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

// Call the function to start the process
extractEmojiDataNames();