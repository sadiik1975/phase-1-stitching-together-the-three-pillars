/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {};

// Step 1: Uncomment the code to locate the heart elements on the page

// Locate all the "like" buttons
const articleHearts = document.querySelectorAll('.like-glyph');

// Step 2: Uncomment the code to set up the mock server communication

// This function simulates a call to the server
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Randomly choose to resolve or reject the promise
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Uncomment the code to set up event listeners on the hearts

// Add click event listeners to all the "like" buttons
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Toggle the heart's status when the server call is successful
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        // Alert the user if the server call fails
        alert(error);
      });
  });
});
