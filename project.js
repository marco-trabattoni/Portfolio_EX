let vid = document.getElementById("video"); 
let player = document.getElementById("play"); 
var played = 0;

function controlvideo() {
if (played == 0) {
    vid.play(); 
    played = 1;
    player.style.opacity = 0;
} else {
    vid.pause(); 
    played = 0;
    player.style.opacity = 1;
}
}


function tellplay(color) {
    if(color == 0) {
        player.style.backgroundColor = '#8D6EFF';
    } else if(color == 1){
        player.style.backgroundColor = 'blue';
    } else
    {
        player.style.backgroundColor = 'red';
    }
    player.style.color = 'white';
}

function tellstop() {
    player.style.backgroundColor = 'white';
    player.style.color = 'black';
}

vid.onended = function() {
    player.style.opacity = 1;
};





let vid2 = document.getElementById("video2"); 
let player2 = document.getElementById("play2"); 
var played2 = 0;

function controlvideo2() {
if (played2 == 0) {
    vid.play(); 
    played2 = 1;
    player2.style.opacity = 0;
} else {
    vid.pause(); 
    played2 = 0;
    player2.style.opacity = 1;
}
}


function tellplay2(color) {
    if(color == 0) {
        player2.style.backgroundColor = '#8D6EFF';
    } else if(color == 1){
        player2.style.backgroundColor = 'blue';
    } else
    {
        player2.style.backgroundColor = 'red';
    }
    player2.style.color = 'white';
}

function tellstop2() {
    player2.style.backgroundColor = 'white';
    player2.style.color = 'black';
}

vid2.onended = function() {
    player2.style.opacity = 1;
};