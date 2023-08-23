
// EJERCICIO 1

console.log("\nEJERCICIO 1\n")

function convertirSnake(texto) {
    let conteo = 1;
    let snake = "";
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] === texto[i].toUpperCase())
        {
            conteo++;
            snake += "_"
        }
        snake += texto[i].toLowerCase();
        
    }
    return [conteo,snake]
    
}
const ejemplo = "ejemploDeVariableEnCamelCase"
const resultado = convertirSnake(ejemplo)
console.log("Ejemplo en Camel case: "+ejemplo+"\nNúmero de palabras: "+ resultado[0] + " \nConversión a snake case: " + resultado[1])

// EJERCICIO 2

console.log("\nEJERCICIO 2\n")

const letras = ["a","b","c","d"];
console.log(combinar(letras));

function combinar (arreglo) {
    if (arreglo.length === 0) {
        return [[]];
    }

    let ultimo = arreglo[arreglo.length - 1];
    arreglo.pop();

    const iteracion = combinar(arreglo);
    const resultado = [];

    for (const comb of iteracion) {
        const copiaComb = [...comb];
        copiaComb.push(ultimo); // Agregar el último elemento al arreglo copiado
        resultado.push(copiaComb);
        resultado.push(comb); // Agregar la versión original de la combinación
    }

    return resultado;
    
    
}

// EJERCICIO 3

console.log("\nEJERCICIO 3\n")

const fetch = require('node-fetch'); 

const obtenerDatos = async() =>{
    try {
        const response =  await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error al obtener los datos: ", error);
        return null;
        
    }
};
// obtenerDatos().then(data=> { console.log(data);});

const modificarDatos = async() =>{
    let datos = await obtenerDatos();
    let pares = datos.filter(personaje => personaje.id % 2 === 0);

    let modificados = pares.map(personaje => {
        if(personaje.type === ''){
            personaje.type = "Programación Móvil"
        }
        return personaje;
    });
    // console.log("\nPARES:\n");
    // console.log(JSON.stringify(pares, null, 2));

    console.log("\nMODIFICADOS:\n");
    console.log(JSON.stringify(modificados, null, 2));
    return modificados
}



function personajeObj(personaje, episodios, masDeCincoEpisodios){
    this.personaje = personaje;
    this.episodios = episodios;
    this.masDeCincoEpisodios = masDeCincoEpisodios;
}

const arreglarDatos = async() =>{
    let datos = await modificarDatos();
    let resultado = [];

    datos.forEach(personaje => {
        let cantidad = personaje.episode.length;
        let masDeCincoEpisodios = cantidad > 5 ? "Sí" : "No";
        let insertar = new personajeObj(personaje.name, cantidad, masDeCincoEpisodios);
        resultado.push(insertar);
    });


    return resultado;
}

arreglarDatos().then(resultado => {
    console.log(JSON.stringify(resultado, null, 2));
});




