(function( TicTacToe, $, undefined ) {

  var Game = Game || {};

  Game.options = {
    startPiece: 'O'
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
    Game.options.turn = 1;
    Game.listeners();
  }

  Game.listeners = function() {
    $('body').on('mouseup touchend', '.tile', function() {
      var $tile = $(this);
      if ($tile.text() === '') {
        Game.toggle($tile);
      }
    });
  }

  Game.toggle = function($tile) {
    if (Game.options.startPiece === 'O') {
      if (Game.options.turn % 2 == 0) {
        $tile.text('X');
      } else {
        $tile.text('O');
      }
    } else {
      if (Game.options.turn % 2 == 0) {
        $tile.text('O');
      } else {
        $tile.text('X');
      }
    }

    Game.options.turn ++;
    Game.checkForWin();
  }

  Game.checkForWin = function() {

  }


  TicTacToe.startGame = function() {
    Game.createBoard();
  }

}( window.TicTacToe = window.TicTacToe || {}, jQuery ));


$(function() {
  TicTacToe.startGame();
  FastClick.attach(document.body);
});
