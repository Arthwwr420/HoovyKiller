

function kill(){
    var link = "ded.webp";
    document.getElementById('hoovy').src = link;
    var audio = new Audio('team-fortress-2-heavy---death-made-with-Voicemod.mp3');
    audio.play()
}

function select(){
    document.getElementById('engie').style.backgroundColor = 'gray';
}

function deselect(){
    document.getElementById('engie').style.backgroundColor = 'transparent';
}
