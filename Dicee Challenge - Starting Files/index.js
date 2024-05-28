var randomNumber1= Math.floor((Math.random()*6)+1);
var imageRandom  = "dice"+randomNumber1+".png";
var imageSouce =  "images/"+imageRandom;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", imageSouce);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var imageRandom2 =  "dice"+randomNumber2+".png";
var imageSouce2 = "images/"+imageRandom2;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", imageSouce2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is the Winner";
}else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is the Winner";
}else{
    document.querySelector("h1").innerHTML = "Please hit refresh"
}
// var randomNumber2= Math.floor((Math.random()*6)+1);
// var imageRandom  = "dice"+randomNumber2+".png";
// var imageSouce =  "images/"+imageRandom;
// var image1 = document.querySelectorAll('img')[1];
// image1.setAttribute("src", imageSouce);