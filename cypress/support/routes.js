class Routes {

     as = {
        postArticles: 'POSTArticles',
        getArticles: 'GETArticles',
        getArticlesComments:'GETArticlesComments'
    }

    init(){
        cy.server();
        cy.route('POST','**/api/articles' ).as(this.as.postArticles);
        cy.route('GET','**/api/articles/agilizei-titulo-**' ).as(this.as.getArticles);
        cy.route('GET','**/api/articles/agilizei-titulo-**/comments' ).as(this.as.getArticlesComments);
    }

}

export default new Routes()