/// <reference types="cypress" />
import home from "../pages/home"

describe('testing home page', () => {
  it('should visit home page', () => {
    home.visit()
    
  })
  it('Create Account', () => {
    home.visit()
    home.createAccount()
  });
})