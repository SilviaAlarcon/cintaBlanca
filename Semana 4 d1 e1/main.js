// const saludo = ()=>{
// 	console.log("hola")
// }

// saludo()

//siempre declarar las funciones como una constante 
let x = 5


const suma = (a,b) =>{
	let c = a + b;
	console.log(c);
	return c
}

const resta = (a,b) =>{
	let c = a - b;
	console.log(c);
	return c
}

suma(3,4);
resta( suma(1,1), 4);

const cuadrado=(x)=>{
	x= x*x;
	console.log(x)
}

cuadrado(x);

console.log(5);