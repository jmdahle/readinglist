const axios = require('axios');
const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';

module.exports = {
    findAll: function(request, response) {
        const params = request.query;
        console.log(BASEURL + params.q);
        axios.get(BASEURL + params.q)
            .then( qresults  => response.json(qresults.data) )
            .catch( error => {response.status(422).json(error) } );
    }
}