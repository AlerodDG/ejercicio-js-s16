
// las variables son elementos que cambian su valor a lo largo de su vida util 
let edad = 17
// var hacer uso de sus elementos de manera global 
// let hacer uso de estos elemetnos pero de manera local 

// mayor de edad 

for (let i = 1; i <= 18; i++) {
    console.log(i)
}

// practica de bucles

// tres intentos antes que antes que se bloquee el usuario
let cuenta = 1234;
let usuario = "EverSorto";
for (let i = 1; i <= 3; i++) {
    if (usuario === cuenta) {
        console.log("Acceso concedido");
        break;
    } else {
        console.log("Cuenta incorrecta. Intento " + i);
    }
}


// vamos a crear la tabla de multiplcar del 7
let numero = 7;
let resultado = 0;
for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado);
}


let tabla5 = 5;
let tabla6 = 6;
let resultado2 = 0;
for (let i = 1; i <= 10; i++) {
    resultado2 = tabla5 * i;
    console.log(tabla5 + "x" + i + "=" + resultado2);
}

for (let j = 1; j <= 10; j++) {
    resultado2 = tabla6 * j;
    console.log(tabla6 + "x" + j + "=" + resultado2);
}