class Routes {

     as = {
        postArticles: 'POSTArticles',
        getArticles: 'GETArticles',
        getArticlesComments:'GETArticlesComments',
        postRegisterUsers:'POSTUsers',
        getRegisterTags: 'GETRegisterTags',
        getRegisterFeed:'GETRegisterFeed'
    }

    init(){
        cy.server();
        cy.route('POST','**/api/articles' ).as(this.as.postArticles);
        cy.route('GET','**/api/articles/agilizei-titulo-**' ).as(this.as.getArticles);
        cy.route('GET','**/api/articles/agilizei-titulo-**/comments' ).as(this.as.getArticlesComments);
        
        cy.route('POST','**/api/users' ).as(this.as.postRegisterUsers);
        cy.route('GET','**/api/tags' ).as(this.as.getRegisterTags);
        cy.route('GET','**/api/articles/feed**' ).as(this.as.getRegisterFeed);
    }

}

export default new Routes()
