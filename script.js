var randNum = Math.random();
randNum = Math.floor((randNum * 6) + 1);

var randNum1 = Math.random();
randNum1 = Math.floor((randNum1 * 6) + 1);


if(randNum === 1){
    document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(randNum === 2){
    document.querySelector(".img1").setAttribute("src","dice2.png");
}
else if(randNum === 3){
    document.querySelector(".img1").setAttribute("src","dice3.png");
}
else if(randNum === 4){
    document.querySelector(".img1").setAttribute("src","dice4.png");
}
else if(randNum === 5){
    document.querySelector(".img1").setAttribute("src","dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","dice6.png");
}




if(randNum1 === 1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
}
else if(randNum1 === 2){
    document.querySelector(".img2").setAttribute("src","dice2.png");
}
else if(randNum1 === 3){
    document.querySelector(".img2").setAttribute("src","dice3.png");
}
else if(randNum1 === 4){
    document.querySelector(".img2").setAttribute("src","dice4.png");
}
else if(randNum1 === 5){
    document.querySelector(".img2").setAttribute("src","dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","dice6.png");
}


if(randNum > randNum1){
    document.querySelector(".container h1").innerHTML = "Player 1 Won 💥";
}
else if(randNum === randNum1){
    document.querySelector(".container h1").innerHTML = "MATCH DRAWN ⚔️";
}
else{
    document.querySelector(".container h1").innerHTML = "Player 2 Won ⚡️";
}