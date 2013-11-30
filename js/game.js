(function( TicTacToe, $, undefined ) {

  TicTacToe.options = {

  };

  TicTacToe.rand = function(max) {
    return Math.floor(Math.random() * max);
  }

}( window.TicTacToe = window.TicTacToe || {}, jQuery ));

