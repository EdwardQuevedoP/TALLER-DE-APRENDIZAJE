// vamos autilizar un API de perros        https://dog.ceo/api/breeds/image/random

fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                console.log(data.message)//imprime la url de una imagen random
            })
//estamos utilizando fetch que llama el api y decidimos que queremos llamar en este caso yo llame message que es la imagen