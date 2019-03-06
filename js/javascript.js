function startGame(){
    document.getElementById("firstpage").style.display = 'none';
    modal.style.display = "block";
    btn.style.display = "block";
    document.getElementById("multiSingleBut").style.display = 'block';
}

// Game begonnen ----------------------------------------------------

    //begin info popup

    // Get the modal
    let modal = document.getElementById('myModal');

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (modal === event.target) {
            modal.style.display = "none";
        }
    };

    //einde info popup


// Singleplayer code-----------------------------------------------------------


function singleplayer(){
    document.getElementById("multiSingleBut").style.display = 'none';
    document.getElementById("inputVelden").style.display = 'display'; //werkt nog niet
}




// Einde Singleplayer code-----------------------------------------------------


// Multiplayer code-----------------------------------------------------------


function multiplayer(){
    document.getElementById("multiSingleBut").style.display = 'none';
}




// Einde multiplayer code-----------------------------------------------------