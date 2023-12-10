fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        // Verificar si la respuesta 
        if (!response.ok) {
            // Si la respuesta no es exitosa lanzar un error 
            throw new Error(`No se pudo obtener la imagen. Código de estado: ${response.status}`);
        }
        // enviar respuesta en modo JSON
        return response.json();
    })
    .then(data => {
        //llamamos todos los datos que nos da el api
        console.log(data);

        // llamamos la url que nos da el api
        const imageUrl = data.message;
        console.log( `el url de la imagen es : ${imageUrl}`)
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al obtener la imagen:', error);
    });
