/// <reference types="cypress" />
import home from "../pages/home"

describe('testing home page', () => {

    beforeEach(() => {
    cy.visit('https://www.mercadolivre.com.br')
    cy.wait(2500)
})
  it('Create Account', () => {
    
    home.createAccount()
    home.digitaEmail()
  });
})