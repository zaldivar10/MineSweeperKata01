const GAMEBOARD_CREATED_MESSAGE = "[Sandbox 3x3] Game created";
//function  MineSweeperKata01  () {
//}

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
//module.exports = MineSweeperKata01
module.exports.createGameBoard = createGameBoard
module.exports.displayGameBoard = displayGameBoard

