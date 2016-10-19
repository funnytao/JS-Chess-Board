var waiting = false;
var piece = [
  {
    name: "blackKing",
    code: "♚",
    move: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    scale: 1
  },
  {
    name: "blackQueen",
    code: "♛",
    move: [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    scale: 8
  },
  {
    name: "blackRook",
    code: "♜",
    move: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    scale: 8
  },
  {
    name: "blackKnight",
    code: "♞",
    move: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]],
    scale: 1
  },
  {
    name: "blackBishop",
    code: "♝",
    move: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    scale: 8
  },
  {
    name: "blackPawn",
    code: "♟",
    move: [[1, -1], [1, 1]],
    scale: 1
  },
  {
    name: "whiteKing",
    code: "♔",
    move: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    scale: 1
  },
  {
    name: "whiteQueen",
    code: "♕", 
    move: [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]],
    scale: 8
  },
  {
    name: "whiteRook",
    code: "♖",
    move: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    scale: 8
  },
  {
    name: "whiteKnight",
    code: "♘",
    move: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]],
    scale: 1
  },
  {
    name: "whiteBishop",
    code: "♗",
    move: [[1, 1], [1, -1], [-1, 1], [-1, -1]],
    scale: 8
  },
  {
    name: "whitePawn",
    code: "♙",
    move: [[-1, 1], [-1, -1]],
    scale: 1
  }
];

function move(id) {
  if (waiting) {
    return;
  }
  var row = id.charAt(0);
  var col = id.charAt(1);
  var block = document.getElementById(id);
  if (block.innerHTML == "") {
    return;
  }
  waiting = false;
  block.style.backgroundColor = "aqua";
  var pieceName;
  for (var p in piece) {
    if (piece[p].code == block.innerHTML) {
      pieceName = piece[p];
    }
  }
  drawRange(row, col, pieceName);
}

function drawRange(row, col, pieceName) {
  var color = pieceName.name.substring(0, 5);
  console.log(color);
  var scale = pieceName.scale;
  var step = pieceName.move;
  console.log(step, scale);
  step.forEach(s => {
    for (var i = 1; i <= scale; i++) {
      var nextRow = parseInt(row) + s[0] * scale;
      var nextCol = parseInt(col) + s[1] * scale;
      if (nextRow >= 0 && nextCol >= 0 && nextRow < 8 && nextCol < 8) {
        var newID = nextRow+""+nextCol;
        var block = document.getElementById(newID);
        var pieceColor;
        if (block.innerHTML != "") {
          for (var p in piece) {
            if (piece[p].code == block.innerHTML) {
              pieceColor = piece[p].name.substring(0, 5);
              break;
            }
          }
          if (pieceColor == color) {
            break;
          }
          else {
            block.style.backgroundColor = "aqua";
            break;
          }
        }
        block.style.backgroundColor = "aqua";
      }
    }
  });
}