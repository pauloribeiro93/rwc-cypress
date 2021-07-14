/// <reference types ="Cypress"/>

const faker = require('faker')

context('Cadastro', () => {
    it('Cadastrar um novo usuaario', () => {
        cy.visit('register');
        cy.get('input[ng-model*=username]').type(faker.name.firstName() + faker.name.lastName())
        cy.get('input[ng-model*=email]').type(faker.internet.email());
        cy.get('input[ng-model*=password]').type(87654321);
        cy.get('button[type=submit]').click();
    });
});