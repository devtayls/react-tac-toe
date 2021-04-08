/// <reference types="Cypress" />

describe('The Application Loads', () => {
    beforeEach(() => {
        // reset and seed the database prior to every test
        cy.visit('/')
    })

    it('Loads the application', () => {
        cy.contains('Next Player: ')
    })

})
function getDomSquares(squares) {
    squares.map((currentValue) => { cy.get(`[data-cy=board_position_${currentValue}]`).as(`square_${currentValue}`) })
}


describe('Player 1 can win a game', () => {
    beforeEach(() => {
        cy.get('[data-cy=moves_list]').children('li').first().click();
    })

    before(() => {
        cy.visit('/')
        cy.get('[data-cy=game_status]').as('game_status');

        let squares = [0,1,2,3,4,5,6,7,8]
        getDomSquares(squares)
    })

    it('Plays until Player 1 Wins', () => {
        cy.get('@square_0').click().contains('X');
        cy.get('@square_1').click().contains('O');
        cy.get('@square_3').click().contains('X');
        cy.get('@square_4').click().contains('O');
        cy.get('@square_6').click().contains('X');
        cy.get('@game_status').contains('Winner: X');
    })
})
