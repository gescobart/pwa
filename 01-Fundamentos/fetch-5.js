
fetch('https://reqres.in/api/users/1000')
    .then( resp => {
        console.log( resp ); 
        if ( resp.ok ){
            resp.json();
        } else {
            throw new Error( 'No existe el usuario 1000' );
        }     
    })
    .then( console.log )
    .catch( error => {
        console.log('Error en la petición');
        console.log( error );
    });