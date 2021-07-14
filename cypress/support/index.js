Cypress.Commands.add('BackgroundLogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}/users/login`,
        body: {
            user: {
                email: 'mello-rwc@mail.com',
                password: '87654321'
            }
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        });

    })

});

import Routes from  '../support/routes'

before(() => {
    Routes.init()
});