describe('The application loads', () => {
    it('Loads the application', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Next Player: ')

    })
})
