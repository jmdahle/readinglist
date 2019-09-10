const db = require('../models');

module.exports = {
    findAll: function(request, response) {
        db.Book
            .find(request.query)
            .sort( { title: 1 } )
            .then( dbModel => response.json(dbModel) )
            .catch( error => response.status(422).json(error) );
    },

    findOne: function(request, response) {
        db.Book
            .find( { foreignId: request.params.id } )
            .then( dbModel => response.json(dbModel) )
            .catch( error => response.status(422).json(error) );
    },

    create: function(request, response) {
        db.Book
            .create(request.body)
            .then( dbModel => res.json(dbModel) )
            .catch( error => response.status(422).json(error) );
      },

    remove: function(request, response) {
        db.Book
            .find( { _id: request.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => response.json(dbModel) )
            .catch( error => response.status(422).json(error) );
    }
    
}