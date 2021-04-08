/// <reference types="Cypress" />

function getDomSquares(squares) {
    squares.map((currentValue) => {
        cy.get(`[data-cy=board_position_${currentValue}]`).as(`square_${currentValue}`)
    })
}

describe('Games can be played', () => {
    before(() => {
        cy.visit('/')
    })

    //TODO This code belongs in before() but the aliasing fails
    beforeEach(() => {
        cy.get('[data-cy=game_status]').as('game_status');
        cy.get('[data-cy=moves_list]').children('li').first().click();
        let squares = [0,1,2,3,4,5,6,7,8]
        getDomSquares(squares)
    })

    context('Happy paths are happy', () =>{
        context('Allows Vertical Wins', () => {
            it('Plays until Player 1 Wins', ()=> {
                cy.get('@square_0').click().contains('X');
                cy.get('@square_1').click().contains('O');
                cy.get('@square_3').click().contains('X');
                cy.get('@square_4').click().contains('O');
                cy.get('@square_6').click().contains('X');
                cy.get('@game_status').contains('Winner: X');
            })
        })

        context('Allows Horizontal Wins', () => {
            it('Plays until Player 2 Wins', () => {
                cy.get('@square_6').click().contains('X');
                cy.get('@square_0').click().contains('O');
                cy.get('@square_7').click().contains('X');
                cy.get('@square_1').click().contains('O');
                cy.get('@square_5').click().contains('X');
                cy.get('@square_2').click().contains('O');

                cy.get('@game_status').contains('Winner: O');
            })
        });

        context('Allows Diagonal Wins', ()=>{
            it('Plays until Player 1 Wins', () => {
                cy.get('@square_0').click().contains('X');
                cy.get('@square_2').click().contains('O');
                cy.get('@square_4').click().contains('X');
                cy.get('@square_1').click().contains('O');
                cy.get('@square_8').click().contains('X');

                cy.get('@game_status').contains('Winner: X');
            })
        });
    });

    context('Mediocre Paths are Mediocre', () => {
        it('Allows Stalemates', ()=> {
            cy.get('@square_0').click().contains('X');
            cy.get('@square_3').click().contains('O');
            cy.get('@square_1').click().contains('X');
            cy.get('@square_4').click().contains('O');
            cy.get('@square_6').click().contains('X');
            cy.get('@square_2').click().contains('O');
            cy.get('@square_5').click().contains('X');
            cy.get('@square_7').click().contains('O');
            cy.get('@square_8').click().contains('X');

            cy.get('@game_status').contains('Next Player: O');
        })

        it('Resets State', () => {
            cy.get('@square_0').click().contains('X');
            cy.get('@square_3').click().contains('O');

            cy.get('[data-cy=moves_list]').children('li').first().click();

            cy.get('@square_0').not('has', 'X');
            cy.get('@square_3').not('has','O');
        })
    })


    context('Sad Paths are Sad', () => {
        it('Prevents duplicate movez', () => {
            cy.get('@square_0').click().contains('X');
            cy.get('@square_0').click().contains('X');

            cy.get('@game_status').contains('Next Player: O');
        })
    })
})
