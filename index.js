
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage="dice"+randomNumber1+".png";
var randomdiceSource="images/"+randomImage;
document.querySelector(".img1").setAttribute("src",randomdiceSource);
var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImage2 ="dice"+randomNumber2+".png";
var randomImagesource ="images/"+randomImage2;
document.querySelector(".img2").setAttribute("src",randomImagesource);



 if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  