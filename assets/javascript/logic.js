// create a variable to hold the topics of the buttons listed on the page on load

var comics = [
  "Seth Meyers",
  "Jimmy Fallon",
  "Jimmy Kimmel",
  "John Mulaney",
  "Andy Samberg",
  "Adam Sandler",
  "Dave Chappelle",
  "Stefon",
  "Jim Gaffigan",
  "Iliza Shlesinger"
];

// API key = SUWUn7pu7DH4gN2K703g1V4ypRPO4O29

//function to render buttons to the screen
function buttonRender() {
  $("#buttons-div").empty();
  for (let i = 0; i < comics.length; i++) {
    // this creates the button
    var comicButton = $("<button>");
    //add class
    comicButton.addClass("comic");
    // add a data atrribute
    comicButton.attr("data-name", comics[i]);
    // addthe text to the button
    comicButton.text(comics[i]);
    //add the buttons to the button div
    $("#button-div").append(comicButton);
    console.log("this worked");
  }
}

buttonRender();
