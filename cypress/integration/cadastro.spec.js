/// <reference types ="Cypress"/>

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuaario', () => {
        cy.visit('register');
        cadastro.preencheCadastro()
        cadastro.submeteRegistro()
        
     
     
    });
});


