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
  $("#Gif-div").empty();
  var c = $(this).data("name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    c +
    "&api_key=SUWUn7pu7DH4gN2K703g1V4ypRPO4O29&limit=10";

  $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    var results = response.data;
    // loop through the response array
    for (let i = 0; i < results.length; i++) {
      // create a div to hold the images
      var comicDiv = $("<div>");

      //create a <p> to hold the rating
      var pRating = $("<p>").text("Rating: " + results[i].rating);
      //variable for image to hold the image
      var comicImg = $("<img>");
      // add class for click event listener later
      comicImg.addClass("comicGif");
      // variable to hold still image
      var comicStill = results[i].images.fixed_height_still.url;
      // variable to hold moving image
      var comicMoving = results[i].images.fixed_height.url;
      // need to assign the attr or still and animate and data-state to the img
      // assign attr of src still so the still img loads on the page
      comicImg.attr("src", comicStill);
      comicImg.attr("data-still", comicStill);
      comicImg.attr("data-animate", comicMoving);
      comicImg.attr("data-state", "still");
      comicDiv.append(pRating);
      comicDiv.append(comicImg);
      $("#Gif-div").append(comicDiv);
    }
  });
});

buttonRender();
