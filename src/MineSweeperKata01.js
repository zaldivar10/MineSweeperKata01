const GAMEBOARD_CREATED_MESSAGE = "[Sandbox 3x3] Game created";
const GAMEOVER_MESSAGE = "BOOM! – Game Over."

function  mineSweeperKata01  (definedGameBoard, selectedSquares) {
    if (checkGameOver(definedGameBoard[captureSquareSelection(selectedSquares)])){
        displayGameBoard(definedGameBoard, GAMEOVER_MESSAGE);
        return GAMEOVER_MESSAGE;
    }
}

function createGameBoard() {
    let definedGameBoard = [
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'
    ];
    displayGameBoard(definedGameBoard, GAMEBOARD_CREATED_MESSAGE);

    return definedGameBoard;
}
function displayGameBoard(definedGameBoard, message){
    let rowsOfGameBoard = [];
    let rowOfGameBoard = "";
    let j = 0;
    for(let i = 1; i <= definedGameBoard.length; i++){
        rowOfGameBoard += definedGameBoard[i-1];
        if (i % 7 == 0){
            rowsOfGameBoard[j] = rowOfGameBoard;
            j += 1;
            rowOfGameBoard = "";
        }
    }
    console.log(rowsOfGameBoard, message);
}

function captureSquareSelection(selectedSquares){
    const MAP_SQUARE_SELECTION_TO_BOARD = {
        '0;0' : 36,
        '0;1' : 38,
        '0;2' : 40,
        '1;0' : 22,
        '1;1' : 24,
        '1;2' : 26,
        '2;0' : 8,
        '2;1' : 10,
        '2;2' : 12,
      };

  return MAP_SQUARE_SELECTION_TO_BOARD[selectedSquares];
}
function checkGameOver (squareValue) {
    return squareValue == "X" ? true : false;
}

function displaySquareValue(definedGameBoard, selectedSquares, unitTest) {
    let squarePosition = captureSquareSelection(selectedSquares);

    displayUnitTestMessages(definedGameBoard, squarePosition, unitTest);
    return definedGameBoard[squarePosition];
}

function displayUnitTestMessages (definedGameBoard, squarePosition, unitTest){
    if (unitTest){
        displayGameBoard(definedGameBoard, definedGameBoard[squarePosition] + " bombs around your square.");
    }
}

module.exports.mineSweeperKata01 = mineSweeperKata01
module.exports.createGameBoard = createGameBoard
module.exports.displayGameBoard = displayGameBoard
module.exports.captureSquareSelection = captureSquareSelection
module.exports.checkGameOver = checkGameOver
module.exports.displaySquareValue = displaySquareValue

