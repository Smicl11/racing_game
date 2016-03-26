console.log("JS has loaded!");

//GLOBAL VARIABLES


$(document).ready(function() {
  console.log("the document is ready");

  var playerOne = new Player (81, 0);
  var playerTwo = new Player (80, 0);

  console.log(playerTwo);
  console.log(playerOne);

  playerOne.move();
  playerTwo.move();

  function Player(keybutton, win) {
    this.keybutton = keybutton;
    this.win = win;
    this.move = function() {
      $(window).on('keydown', function moveRight(event) {
          if(event.keyCode === 81) {
            $('#player1').animate({ 'left': '+=10px' }, 0);
          } else if(event.keyCode === 80) {
            $('#player2').animate({ 'left': '+=10px' }, 0);
          }
        });
    };
  }
});
