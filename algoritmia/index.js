//= para asignar una valor 
//== igual, no importa si es número o string
//=== identico, incluye numero y string
// ! negación o diferente
// != diferente, sin impportar su es número o string
// !== diferente, incluye número y string

// CICLOS FOR; FOR LOOPS

// for( i=0; i < 10; i++){
// 	console.log(i);

// }

//VARIABLES

// let cosito = [ 0, 1, 2];

// console.log(cosito [1]) poner entre corchetes para llamar a un arreglo en especifico 


//ARREGLOS

// let nuevoArreglo = [];

// for ( i= 0; i < 5; i++){
// 	nuevoArreglo[i]= (i+1)
// }

// console.log(nuevoArreglo);

// for (i=0; i < nuevoArreglo.length; i++){
// 	console.log(nuevoArreglo[i])
// }


//FUNCIONES

//definición de la función suma 
// function suma (num1, num2){
// 	return num1 + num2
// }

//Guardo lo que devuelve "return" en una variable "resultado y ejecuto en console"
// let resultado = suma(10,20);
// console.log(resultado);

//Cacho lo que devuelve "return" con un console.log, otra forma de ejecutar
// let n1= 5;
// let n2= 7;
// console.log(suma(n1, n2)); 


// let edadUsuario= prompt("Ingresa tu edad");

// function esMayorDeEdad(variable){
// 	if(variable > 18){
// 		return "Es mayor de edad";
// 	}else return "No es mayor de edad";
// }

// console.log(esMayorDeEdad(edadUsuario));



// function suma (num1, num2){
// 	return num1 + num2;
// }

// let num1=1.8;
// let num2=32;

// console.log(suma(num1,num2))



function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let formula = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(formula);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let formula = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(formula);
} 
cToF(prompt("Ingresa grados centigrados"));
fToC(prompt("Ingresa grados fahrenheit"));
























