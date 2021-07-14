const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Cadastro {

    preencheCadastro(){
        cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName()).invoke('val').then(nomeUser =>{
            cy.log(nomeUser).as('nome')
        })
        cy.get(el.inputEmail).type(faker.internet.email());
         cy.get(el.inputPass).type(87654321);
    }

    submeteRegistro(){
        cy.get(el.buttonSubmit).click();
    }



    validaCriacaoDeUsuario(){
        cy.wait(`@${Routes.as.postRegisterUsers}`).then((postRegisterResponse) => {
            expect(postRegisterResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getRegisterTags}`).then((getRegisterTagsResponse) => {
            expect(getRegisterTagsResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getRegisterFeed}`).then((getRegisterFeedResponse) => {
            expect(getRegisterFeedResponse.status).to.eq(200)
        })

    }
    
}

export default new Cadastro()