// Ejercicio 1 //

const superheroes = new Map();

superheroes.set(1, {
    id: 1,
    nombre: "Iron Man",
    universo: "Marvel",
    poder: "Tecnología avanzada",
    fuerza: 85
});

superheroes.set(2, {
    id: 2,
    nombre: "Hulk",
    universo: "Marvel",
    poder: "Súper fuerza",
    fuerza: 100
});

superheroes.set(3, {
    id: 3,
    nombre: "Spider-Man",
    universo: "Marvel",
    poder: "Fuerza y agilidad",
    fuerza: 80
});

superheroes.set(4, {
    id: 4,
    nombre: "Batman",
    universo: "DC",
    poder: "Inteligencia y tecnología",
    fuerza: 75
});

superheroes.set(5, {
    id: 5,
    nombre: "Superman",
    universo: "DC",
    poder: "Súper fuerza y vuelo",
    fuerza: 98
});

superheroes.set(6, {
    id: 6,
    nombre: "Wonder Woman",
    universo: "DC",
    poder: "Fuerza y habilidades de combate",
    fuerza: 95
});

console.log(superheroes);

// Ejercicio 2 //

const buscarSuperheroePorID = (id) => {
    if (superheroes.has(id)) {
        return superheroes.get(id);
    } else {
        console.error(`No se encontró un superhéroe con el ID ${id}`);
    }
};

console.log(buscarSuperheroePorID(1));
console.log(buscarSuperheroePorID(99));

// Ejercicio 3 //

const buscarPorUniverso = (universo) => {
    const resultados = [];

    for (const superheroe of superheroes.values()) {
        if (superheroe.universo === universo) {
            resultados.push(superheroe);
        }
    }

    return resultados;
};

console.log(buscarPorUniverso("Marvel"));

// Ejercicio 4 //

const actualizarFuerza = (id, nuevaFuerza) => {
    if (superheroes.has(id)) {
        const superheroe = superheroes.get(id);

        superheroe.fuerza = nuevaFuerza;

        console.log(`El nivel de fuerza de ${superheroe.nombre} ha sido actualizado a ${nuevaFuerza}.`);
    } else {
        console.error(`No se encontró un superhéroe con el ID ${id}`);
    }
};

actualizarFuerza(1, 90);

// Ejercicio 5 //

const eliminarSuperheroe = (id) => {
    if (superheroes.has(id)) {
        superheroes.delete(id);
        console.log(`El superhéroe con ID ${id} ha sido eliminado.`);
    } else {
        console.error(`No se encontró un superhéroe con el ID ${id}`);
    }
};

eliminarSuperheroe(2);

// Ejercicio 6 //

const mostrarSuperheroes = () => {
    for (const [id, superheroe] of superheroes) {
        console.log(`ID: ${id}, Nombre: ${superheroe.nombre}`);
    }
};

mostrarSuperheroes();

// Ejercicio 7 //

const superheroeMasFuerte = () => {
    let superheroeFuerte = null;

    for (const superheroe of superheroes.values()) {
        if (superheroeFuerte === null || superheroe.fuerza > superheroeFuerte.fuerza) {
            superheroeFuerte = superheroe;
        }
    }

    return superheroeFuerte;
};

const ganador = superheroeMasFuerte();

console.log(`El superhéroe más fuerte es ${ganador.nombre} con una fuerza de ${ganador.fuerza}.`);

// Ejercicio 8 //

const combate = (id1, id2) => {
    if (!superheroes.has(id1) || !superheroes.has(id2)) {
        console.error("Uno o ambos superhéroes no existen.");
        return;
    }

    const superheroe1 = superheroes.get(id1);
    const superheroe2 = superheroes.get(id2);

    if (superheroe1.fuerza > superheroe2.fuerza) {
        console.log(`${superheroe1.nombre} (Fuerza: ${superheroe1.fuerza}) vence a ${superheroe2.nombre} (Fuerza: ${superheroe2.fuerza}).`);
    } else if (superheroe2.fuerza > superheroe1.fuerza) {
        console.log(`${superheroe2.nombre} (Fuerza: ${superheroe2.fuerza}) vence a ${superheroe1.nombre} (Fuerza: ${superheroe1.fuerza}).`);
    } else {
        console.log("El combate termina en empate.");
    }
};

combate(1, 4);

// Ejercicio 9 //

superheroes.get(1).habilidades = [
    "Armadura",
    "Vuelo",
    "Tecnología avanzada"
];

superheroes.get(3).habilidades = [
    "Sentido arácnido",
    "Trepar paredes",
    "Agilidad"
];

superheroes.get(4).habilidades = [
    "Artes marciales",
    "Inteligencia",
    "Tecnología"
];

superheroes.get(5).habilidades = [
    "Súper fuerza",
    "Vuelo",
    "Visión láser"
];

superheroes.get(6).habilidades = [
    "Súper fuerza",
    "Velocidad",
    "Habilidades de combate"
];

const mostrarHabilidades = (id) => {
    if (superheroes.has(id)) {
        const superheroe = superheroes.get(id);

        console.log(`Habilidades de ${superheroe.nombre}: ${superheroe.habilidades.join(", ")}.`);
    } else {
        console.error(`No se encontró un superhéroe con el ID ${id}`);
    }
};

mostrarHabilidades(5);