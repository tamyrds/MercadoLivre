/// <reference types="cypress" />

class home {

    visit(){
        cy.visit("/")
        cy.get('.nav-logo').should('be.visible')
        cy.get('[data-testid="action:understood-button"]').click()

    }
}


export default new home