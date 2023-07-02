/// <reference types="cypress" />
import home from "../pages/home"

describe('testing home page', () => {

    beforeEach(() => {
    home.visit()
})
  it('Create Account', () => {
    home.visit()
    home.createAccount()
  });
})