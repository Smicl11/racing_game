console.log("JS has loaded!");

$(document).ready(function() {
  console.log("the document is ready");

  //create function with a for loop counting number of 'keyup' to 34 then alert winner based on who reached 34 keypresses then refreshes the page to restart the game.

  function winner() {
    if ($('#player1').css('left') === '650px') {
      alert("Player One Wins!!!");
      location.reload();
    }
    if ($('#player2').css('left') === '650px') {
      alert("Player Two Wins!!!");
      location.reload();
    }
  }

  //crates event listener to move players based on which key is pressed
  function vroomVroom() {
    $(window).on('keydown', function moveRight(event) {
      if(winner());
      if(event.keyCode === 81) {
        $('#player1').animate({ 'left': '+=10px' }, 0);
      } else if(event.keyCode === 80) {
        $('#player2').animate({ 'left': '+=10px' }, 0);
      }
    });
  }

  vroomVroom();

  $('button').on("click", function() {
    window.location.reload();
  });

});

//code reset button here!

//34 keypresses to get to the end of the track.
