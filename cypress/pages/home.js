/// <reference types="cypress" />

import { elem } from "./commands/object"

class home {

    visit(){
        cy.visit("/")
        cy.get('.nav-logo').should('be.visible')
        cy.get(elem.cookie).click()

    }

    createAccount(){
        cy.get(elem.createAccount)
            .should('Crie a sua conta')
            .click()
    }
}


export default new home