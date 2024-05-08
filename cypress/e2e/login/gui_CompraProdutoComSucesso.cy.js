/// <reference types="Cypress"/>

describe('Teste E2E Realizando a compra de produto com sucesso', () => {
	it('Fluxo da compra com sucesso', () => {
		cy.visit('https://www.saucedemo.com/v1')
		cy.get('#user-name').type('performance_glitch_user')
		cy.get('#password').type('secret_sauce')
		cy.get('#login-button').click()
		cy.get('.product_label').should('contain','Products')

		// Ordenação de produtos do menor para o maior valor
		cy.get('.product_sort_container').select('Price (low to high)')
		//cy.get('#item_2_title_link').should('contain', 'Sauce Labs Onesie')
		
		//cy.get('inventory_item_name').should('contain', 'Sauce Labs Onesie')
		cy.get(':nth-child(1) > .inventory_item_label').should('contain', 'Sauce Labs Onesie')
		cy.get(':nth-child(1) > .pricebar > .inventory_item_price').should('have.text', '$7.99')

		cy.get(':nth-child(2) > .inventory_item_label').should('contain', 'Sauce Labs Bike Light')
		cy.get(':nth-child(2) > .pricebar > .inventory_item_price').should('have.text', '$9.99')

		cy.get(':nth-child(3) > .inventory_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')
		cy.get(':nth-child(3) > .pricebar > .inventory_item_price').should('have.text', '$15.99')
	});
});