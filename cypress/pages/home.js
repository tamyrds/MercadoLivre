/// <reference types="cypress" />

import { mensagem } from "./commands/mensager"
import { elem } from "./commands/object"

class home {

    createAccount(){
      
        cy.contains('a', 'Crie a sua conta').should('be.visible')
            .click()
            cy.contains(mensagem.mensagemCreate).should('be.visible') // Valida mensagem
        cy.wait(1000)
        cy.get(elem.terms).click()
        cy.get(elem.botaoCriarContaPessoal).click()
        cy.get(elem.cookie).click()
            cy.contains(mensagem.mensagemCreateAccount).should('be.visible')
            cy.contains(mensagem.adicioneSeuEmail).should('be.visible')
        cy.get(elem.adicionarEmail).click()
        
        }

    digitaEmail(){

        const email= { email: 'teste@teste.com'}
            cy.origin(
             'https://www.mercadolivre.com',

                cy.get(elem.adicionarEmail).type(email)
             
        )}
    }
    
export default new home