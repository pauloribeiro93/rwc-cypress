const faker = require('faker')
const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {
    acessarFormularioDenovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }
    preencherFormulario() {
        cy.get(el.inputTitle).type('Agilizei Titulo')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('Cypress')
    }

    submeterArtigo() {
        cy.get(el.buttonSubmit).click();
    }

    verificarSeaPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticles}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesComments}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200)
        })

    }

}
export default new Articles();