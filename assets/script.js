var imageContainer = document.querySelector(".img-container");
var C1 = document.querySelector("h2")


imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.dataset.animate);
    } else {
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});

//  Listen for any clicks within the img-container div
// Get the current value of the image's data-state attribute
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      // Update the image's source to the string being stored in the data-animate attribute
      // Change the attributes back to their non-animated values
// I want the background to change with each click and the pictures to enlage to the .gifs when clicked.  
// When all four are clicked, Toto's Hold the Line Plays