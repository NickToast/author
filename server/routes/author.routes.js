//what are routes used for? we need controller info (our actions) so that when we go to our route, something happens

const authorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', authorController.allAuthors);
    app.get('/api/authors/:id', authorController.getOneAuthor);
    app.post('/api/authors/new', authorController.newAuthor);
    app.put('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
}