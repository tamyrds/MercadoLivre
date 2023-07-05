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
            cy.contains(mensagem.mensagemCreate).should('be.visible') // Valida mensagem
        cy.wait(1000)
        cy.get(elem.terms).click()
        cy.get(elem.botaoCriarContaPessoal).click()
            cy.contains(mensagem.mensagemCreateAccount).should('be.visible')
    }

}
export default new home