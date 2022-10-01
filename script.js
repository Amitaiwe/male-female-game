var character = document.getElementById("character");
var monster = document.getElementById("block");
var score = 0;
function jump(){
    if(character.classList!="jumping"){
        character.classList.add("jumping");
    }
    character.classList.add("jumping");
    score+=10;
    printScore(score);
    setTimeout(function(){
        character.classList.remove("jumping");
    }, 500);
}
var checkdead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<29 && blockleft >=0 && characterTop >= 80){
        block.style.animation = "none";
        block.style.display = "none";
        alert("you earn "+ score + " points");
    }
},10)
function printScore(score){
    document.getElementById("score").innerText = score;
}