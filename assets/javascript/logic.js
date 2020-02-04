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

// function to query the GIHpy API
// $(".comic-Button").on("click", function() {
//   var c = $(this).data("name");
//   var queryURL =
//     "https://api.giphy.com/v1/gifs/search?q=" +
//     c +
//     "&api_key=SUWUn7pu7DH4gN2K703g1V4ypRPO4O29&limit=10";

//   $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
//     console.log(response);
//   });
// });

//function to render buttons to the screen
function buttonRender() {
  $("#button-div").empty();
  for (let i = 0; i < comics.length; i++) {
    // this creates the button
    var comicButton = $("<button>");
    //add class
    comicButton.addClass("comic-Button");
    // add a data atrribute
    comicButton.attr("data-name", comics[i]);
    // addthe text to the button
    comicButton.text(comics[i]);
    //add the buttons to the button div
    $("#button-div").append(comicButton);
    console.log("this worked");
  }
}

//function to add movies from the add a comic input
$("#add-comic").on("click", function(event) {
  event.preventDefault();
  var comicAdded = $("#comic-input")
    .val()
    .trim();
  console.log(comicAdded);

  comics.push(comicAdded);
  buttonRender();
});

$(document).on("click", ".comic-Button", function() {
  var c = $(this).data("name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    c +
    "&api_key=SUWUn7pu7DH4gN2K703g1V4ypRPO4O29&limit=10";

  $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
    console.log(queryURL);
    console.log(response);
  });
});

buttonRender();
