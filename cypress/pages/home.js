/// <reference types="cypress" />

import { mensagem } from "./commands/mensager"
import { elem } from "./commands/object"

class home {

    visit(){
        cy.visit('/')
        cy.get('.nav-logo').should('be.visible')
        

    }

    createAccount(){
        
        cy.contains('a', 'Crie a sua conta').should('be.visible')
            .click()
        cy.contains(mensagem.mensagemCreate).should('be.visible')
        cy.get(elem.terms).click()
    }

}
export default new home