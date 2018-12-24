// Petición GET
// https://reqres.in/api/users
var request = new XMLHttpRequest();

fetch( 'https://reqres.in/api/users' )
    .then( resp =>  resp.json() )
    .then( respObj => {
        console.log( respObj );
    });
