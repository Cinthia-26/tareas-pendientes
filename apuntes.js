//Comentarios
//alt + 39 
//console.log('Hola_Mundo');
//alert ('Hola desde un alert');
//DECLARAR VARIABLE CON LET FORMA ACTUAL DE DESCRIBIR UNA VARIABLE
//var apellido="Mendez";
let nombre= "Alexis";
//CONSTANTE

const pi=3.14;

//string nombre="Luna";
//TIPOS DE DATOS
//NO DEFINIDO
let noDefinido;
//Numero
let cantidad = 50;
//cadena de texto o string
let bebida = "agua";
//BOOLEANOS
let activo = true ;
let inactivo = false;

//OBJETOS
//persona: nombre, apellido, edad, peso
let persona={nombre:'Cinthia', apellido:'Bernabe', edad: 23, peso:57}
console.log(persona);
//Arrays coleccion
let personas = [
    {nombre: 'Alicia', apellido:"Mendoza", edad:43},
    {nombre: 'Diego', apellido:"Bernabe", edad:18},
    {nombre: 'Manuel', apellido:"Bernabe", edad:16}
]
console.log(personas);
console.log(personas[2]);
//FUNCION JS
// LISTADO DE INSTRUCCIONES
/*
 // Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma
let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
// Por 
*/
// Funciones JS
// Listado de instrucciones

function suma(a, b) {
    return a + b;
}
let resultado = suma(9, 7);
console.log(resultado);

function multiplicación(params){
    return a * b;
}
let resultadom = multiplicación(5, 7);
console.log(resultadom);