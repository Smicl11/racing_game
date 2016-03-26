console.log("JS has loaded!");

//GLOBAL VARIABLES


$(document).ready(function() {
  console.log("the document is ready");

  $(window).keypress(function(event) {
    console.log("hi world");
    if(event.keypress === 81) {
      $('.player1').animate({ 'right': '50px' }, 'slow');
      console.log("You pressed P");
    } else if(event.keypress === 80) {
      $('.player2').animate({ 'right': '50px' }, 'slow');
      console.log("You pressed Q");
    }

  });

  function Player(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.win = win;
//    this.move = $('')
  }

});
//event listener for keybord key presses to move players
