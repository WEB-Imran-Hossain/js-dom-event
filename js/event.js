console.log("This separate JS file");

// option 1: directly set on the HTML element
//  <button onclick="console.log(65);">Another button</button> (Just bojhar jonno. but akhene ata use kora jabe na.)

// option 2: add onclick function on the html element (Recommended)
// important: we will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//   option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//   option 3: another way [we will use this sometime]
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makepurple() {
  document.body.style.backgroundColor = "purple";
};

//   option 4:
const pinkButton = document.getElementById("make-pink");
console.log(pinkButton);

pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

//   option 4: another way
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//   option 4: Final using
// important we will use this sometimes
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
