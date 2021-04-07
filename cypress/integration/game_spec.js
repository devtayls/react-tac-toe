describe('The application loads', () => {
    it('Loads the application', () => {
        cy.visit('/')

        cy.contains('Next Player: ')

    })
})
