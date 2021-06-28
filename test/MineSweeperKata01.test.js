const mineSweeperKata01 = require('../src/MineSweeperKata01.js').mineSweeperKata01;
const createGameBoard = require('../src/MineSweeperKata01.js').createGameBoard;
const displayGameBoard = require('../src/MineSweeperKata01.js').displayGameBoard;
const captureSquareSelection = require('../src/MineSweeperKata01.js').captureSquareSelection;
const checkGameOver = require('../src/MineSweeperKata01.js').checkGameOver

describe('UAT Scenario 1: Game Board Creation phase', () => {
    it('Game Board 3x3 is properly created', () => {      
        let definedGameBoard = [
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+', 
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+'
        ];

        expect(createGameBoard()).toEqual(definedGameBoard)
    })  
});

describe('UAT Scenario 2: Game Over', () => {
    it('Game Over - Step on a bomb on 1;1', () => {      
        let definedGameBoard = [
            '+','-','+','-','+','-','+',
            '|','2','|','2','|','1','|',
            '+','-','+','-','+','-','+',
            '|','X','|','X','|','2','|',
            '+','-','+','-','+','-','+', 
            '|','3','|','X','|','2','|',
            '+','-','+','-','+','-','+'
        ];
        let selectedSquares = "1;1";
        let gameoverMessage = "BOOM! – Game Over.";

        expect(mineSweeperKata01(definedGameBoard, selectedSquares)).toEqual(gameoverMessage);
    })  
});

describe('Unit Tests', () => {
    it('Unit Test 1: Display Game Board', () => {      
        let definedGameBoard = [
            '+-+-+-+',
            '| | | |',
            '+-+-+-+',
            '| | | |',
            '+-+-+-+',
            '| | | |',
            '+-+-+-+'
        ];

        expect(displayGameBoard(definedGameBoard, "Unit Test 1")).toEqual(undefined)
    })  
    it('Capture square selection "1;1" = 24', () => {
        let squareSelection = "1;1";
        let squarePosition = 24;

        expect(captureSquareSelection(squareSelection)).toEqual(squarePosition);
    })
    it('Check for Game Over using selection vs bomb position in board, square contains a bomb', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareValue = "X";
        let gameOver = true;

        expect(checkGameOver(squareValue)).toEqual(gameOver);
    })

    it('Check for Game Over using selection vs bomb position in board, square does not contain a bomb', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareValue = " ";
        let gameOver = false;

        expect(checkGameOver(squareValue)).toEqual(gameOver);
    })
});
