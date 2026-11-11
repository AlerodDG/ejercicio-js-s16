
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

let totalVentas = 0;
let diasMayoresA100 = 0;
let mayorVenta = 0;
let diaMayorVenta = 0;




// EJERCICIO: VENTAS DE UNA TIENDA semanal

let lunes = 400;
let martes = 300;
let miercoles = 200;
let jueves = 100;
let viernes = 500;
let sabado = 600;
let domingo = 0;

let ventaMinima = 0
let ventaMaxima = 0
let promedio = 0
let respuestaventa = 0
for (let i = 0; i <= 7; i++) {

    if (lunes > martes && i == 1) {
        ventaMaxima = lunes
        ventaMaxima = martes
        console.log("seVendio mas el lunes")

    }

    if (martes > miercoles && i == 2) {
        ventaMima = miercoles
        console.log("seVendio mas el martes que el miercoles")
    }
    // el operador alterno es el ?
    // resultado =  miercoles > jueves && i ==3 ? console.log("seVendio mas el miercoles") : console.log("seVendio mas el jueves")
    if (miercoles > jueves && i == 3) {
        ventaMima = jueves
        console.log("seVendio mas el miercoles que el jueves")
    }
    if (jueves > viernes && i == 4) {
        ventaMima = jueves
        console.log("seVendio mas el jueves que el viernes")
    }
    if (viernes > sabado && i == 5) {
        ventaMima = viernes
        console.log("seVendio mas el viernes que el sabado")
    }

}
 
        
 // funcion + contenido de la función + descripcion de la función
function promedioVentas(Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo) {
      // usamos mayusculas para nombrar las variables de la funcion 
        // para diferenciarlas de las variables globales
    
    console.log("entrando en la funcion ")

    // contenido de la función
    if (Lunes > Martes
        && Lunes > Miercoles
        && Lunes > Jueves
        && Lunes > Viernes
        && Lunes > Sabado
        && Lunes > Domingo) {
        console.log("el dia que mas se vendio fue el lunes")


        if (Martes > Lunes
            && Martes > Miercoles
            && Martes > Jueves
            && Martes > Viernes
            && Martes > Sabado
            && Martes > Domingo) {
            console.log("el dia que mas se vendio fue el martes")
        }

        if (Miercoles > Lunes
            && Martes > Martes
            && Miercoles > Jueves
            && Miercoles > Viernes
            && Miercoles > Sabado
            && Miercoles > Domingo) {
            console.log("el dia que mas se vendio fue el miercoles")
        }

        if (Jueves > Lunes
            && Jueves > Martes
            && Jueves > Miercoles
            && Jueves > Viernes
            && Jueves > Sabado
            && Jueves > Domingo) {
            console.log("el dia que mas se vendio fue el jueves ")
        }
        if (Viernes > Lunes
            && Viernes > Martes
            && Viernes > Jueves
            && Viernes > Miercoles
            && Viernes > Sabado
            && Viernes > Domingo) {
            console.log("el dia que mas se vendio fue el viernes ")
        }
    }
}
promedioVentas(lunes, martes, miercoles, jueves, viernes, sabado, domingo)