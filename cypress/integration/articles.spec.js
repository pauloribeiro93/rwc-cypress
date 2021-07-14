/// <reference types ="Cypress"/>

import articles from '../support/pages/articles'


context('Publicação', () => {
    beforeEach(() => {
        cy.BackgroundLogin()
        articles.acessarFormularioDenovaPublicacao()

    });
    it('Criar um nova publicação', () => {
        articles.preencherFormulario()
        articles.submeterArtigo()
        articles.verificarSeaPublicacaoFoiCriadaComSucesso()
    });
});

