/// <reference types="Cypress"/>

describe('Login', () => {
	it('login com Sucesso', () => {
		cy.visit('https://www.saucedemo.com/v1')
		cy.get('#user-name').type('performance_glitch_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.get('.product_label').should('contain','Products')
	});
	it('login com usuário inválido', () => {
		cy.visit('https://www.saucedemo.com/v1')
		cy.get('#user-name').type('cristian')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.get('[data-test="error"]').should('not.have.value', 'Username and password do not match any user in this service')
			
	});

	it('login com senha inválida', () => {
		cy.visit('https://www.saucedemo.com/v1')
		cy.get('#user-name').type('performance_glitch_user')
		cy.get('#password').type('secret_sauce73')
		cy.get('#login-button').click()
		cy.get('[data-test="error"]').should('not.have.value', 'Username and password do not match any user in this service')
	});

});