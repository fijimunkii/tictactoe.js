(function( TicTacToe, $, undefined ) {

  var Game = Game || {};

  Game.options = {

  };

  Game.rand = function(max) {
    return Math.floor(Math.random() * max);
  }

  Game.createBoard = function() {

    $('#game-container').html('');

    for(var y=1; y<4; y++) {
      for(var x=1; x<4; x++) {
        $tile = $('<div>');
        $tile.addClass('tile');
        $tile.addClass('untouched');
        $tile.attr('data-id', y + '-' + x);
        $('#game-container').append($tile);
      }
    }

    Game.listeners();
  }

  Game.listeners = function() {
    $('body').on('mouseup touchend', '.tile', function() {
      var $tile = $(this);
      $tile.text('you clicked me');
    });
  }


  TicTacToe.startGame = function() {
    Game.createBoard();
  }

}( window.TicTacToe = window.TicTacToe || {}, jQuery ));


$(function() {
  TicTacToe.startGame();
  FastClick.attach(document.body);
});
