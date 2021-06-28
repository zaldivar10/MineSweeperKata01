const GAMEBOARD_CREATED_MESSAGE = "[Sandbox 3x3] Game created";
const GAMEOVER_MESSAGE = "BOOM! – Game Over."
const VICTORY_MESSAGE =  "the land is cleared! GOOD JOB!"

function  mineSweeperKata01  (definedGameBoard, currentGameBoard, selectedSquares, markBomb) {
    const NUMBER_BOMBS_IN_GAME = countNumberOfBoms(definedGameBoard);
    let numberSquaresToOpen = 9;
    numberSquaresToOpen = numberSquaresToOpen - NUMBER_BOMBS_IN_GAME;

    selectedSquares = selectedSquares.split(' + ');
    for (let i = 0; i < selectedSquares.length; i++) {
        currentGameBoard[captureSquareSelection(selectedSquares[i])] = displaySquareValue(definedGameBoard, selectedSquares[i], markBomb);
        if (checkGameOver(currentGameBoard[captureSquareSelection(selectedSquares[i])])){
            displayGameBoard(definedGameBoard, GAMEOVER_MESSAGE);
            return GAMEOVER_MESSAGE;
        }   
        else{
            numberSquaresToOpen -= 1;
        }
    }
    return checkVictory(currentGameBoard, numberSquaresToOpen) ? VICTORY_MESSAGE : currentGameBoard;
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

function displaySquareValue(definedGameBoard, selectedSquare, markBomb, unitTest) {
    let squarePosition = captureSquareSelection(selectedSquare);

    displayUnitTestMessages(definedGameBoard, squarePosition, markBomb, unitTest);
    return markBomb ? "*" : definedGameBoard[squarePosition];
}
function displayUnitTestMessages (gameBoard, squarePosition, markBomb, unitTest){
    if (unitTest){
        console.log(markBomb);
        markBomb ? displayGameBoard(gameBoard, "Square flagged as bomb")
        : displayGameBoard(gameBoard, gameBoard[squarePosition] + " bombs around your square.");
    }
}
function countNumberOfBoms(definedGameBoard) {
    let numberBombsInGame = 0;
    definedGameBoard.forEach(element => { if (element == "X") numberBombsInGame ++;      
    });
    return numberBombsInGame;
}
function checkVictory (currentGameBoard, numberSquaresToOpen){
    if (numberSquaresToOpen == 0){
        displayGameBoard(currentGameBoard, VICTORY_MESSAGE);
        return true;
    }
    else{
        return false;
    }
}

module.exports.mineSweeperKata01 = mineSweeperKata01
module.exports.createGameBoard = createGameBoard
module.exports.displayGameBoard = displayGameBoard
module.exports.captureSquareSelection = captureSquareSelection
module.exports.checkGameOver = checkGameOver
module.exports.displaySquareValue = displaySquareValue

