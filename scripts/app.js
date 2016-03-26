console.log("JS has loaded!");

//GLOBAL VARIABLES


$(document).ready(function() {
  console.log("the document is ready");

  var playerOne = new Player (81, 0);
  var playerTwo = new Player (80, 0);

  playerOne.move();
  playerTwo.move();

  function Player(keybutton, win) {
    this.keybutton = keybutton;
    this.win = win;
    this.move = function() {
      $(window).on('keydown', function moveRight(event) {
          if(event.keyCode === keybutton) {
            $('#player1').animate({ 'left': '50px' }, 'fast');
          } else if(event.keyCode === keybutton) {
            $('#player2').animate({ 'left': '50px' }, 'slow');
          }
        }
      );
    };
  }
});
