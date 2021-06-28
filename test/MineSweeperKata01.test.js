//const MineSweeperKata01 = require('../src/MineSweeperKata01.js');
const createGameBoard = require('../src/MineSweeperKata01.js').createGameBoard;
const displayGameBoard = require('../src/MineSweeperKata01.js').displayGameBoard;

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

        expect(displayGameBoard(definedGameBoard)).toEqual(undefined)
    })  
});
