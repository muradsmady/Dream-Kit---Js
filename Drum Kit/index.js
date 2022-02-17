var drumCounts = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumCounts; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.textContent;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);




  });
}

document.addEventListener('keydown', function(event){
  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;
    case "i":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();

      break;
    default:
      console.log(buttonInnerHtml);

  }


}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  } , 100);


}

// function HouseKeeper(yearOfExpierence , name , cleaningReprotire){
//
//   this.yearOfExpierence = yearOfExpierence;
//   this.name = name;
//   this.cleaningReprotire = cleaningReprotire;
//   this.clean = function (){
//     alert("cleaning in progress");
//
//   }
// } murad = new ();


// document.querySelector("button").addEventListener("click", function (){
//   alert("I Got Clicked");
// } );

// function handleClick(){
//   alert("I Got Clicked");
// }

// var audio1 = new Audio('sounds/tom-1.mp3');
// audio1.play();

// this.style.color ="white";
