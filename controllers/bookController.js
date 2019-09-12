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
        // console.log('adding book to db', request.body)
        db.Book
            .create(request.body)
            .then( dbModel => response.json(dbModel) )
            .catch( error => response.status(422).json(error) );
      },

    remove: function(request, response) {
        console.log('removing book from db', request.params.id)
        db.Book
            .findById( { _id: request.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => response.json(dbModel) )
            .catch( error => response.status(422).json(error) );
    }
    
}