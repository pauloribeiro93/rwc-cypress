/// <reference types ="Cypress"/>

import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
    });
});

