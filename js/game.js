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
        $tile.attr('id', y + '-' + x);
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
    var $topLeft =      $('#1-1'),
        $topMiddle =    $('#1-2'),
        $topRight =     $('#1-3'),
        $middleLeft =   $('#2-1'),
        $middleMiddle = $('#2-2'),
        $middleRight =  $('#2-3'),
        $bottomLeft =   $('#3-1'),
        $bottomMiddle = $('#3-2'),
        $bottomRight =  $('#3-3');

    var checkList = [
          [$topLeft, $topMiddle, $topRight],
          [$middleLeft, $middleMiddle, $middleRight],
          [$bottomLeft, $bottomLeft, $bottomRight],
          [$topLeft, $middleLeft, $bottomLeft],
          [$topMiddle, $middleMiddle, $bottomMiddle],
          [$topRight, $middleRight, $bottomRight],
          [$topLeft, $middleMiddle, $bottomRight],
          [$topRight, $middleMiddle, $bottomLeft]
        ];

    for (var i=1; i<9; i++) {
      Game.checkForSame(checkList[i]);
    }

  }

  Game.checkForSame = function(tileArray) {
    var control = tileArray[i].text(),
        check1 = false,
        check2 = false;
    if (control) {
      for (var i=1; i < 3; i++) {
        if (tileArray[i].text() === control) {
          check[i] === true;
        }
      }
    }
    if (check1 && check2) {
      alert(control + ' Wins!');
    }
  }


  TicTacToe.startGame = function() {
    Game.createBoard();
  }

}( window.TicTacToe = window.TicTacToe || {}, jQuery ));


$(function() {
  TicTacToe.startGame();
  FastClick.attach(document.body);
});
