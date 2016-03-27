console.log("JS has loaded!");

//Wait for the document to finish loading before running the below script.
$(document).ready(function() {
  console.log("the document is ready");

  //detects winner once player div reaches the end of the track div then resets the page to start a new game.
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
