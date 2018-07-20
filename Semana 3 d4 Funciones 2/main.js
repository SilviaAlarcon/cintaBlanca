// let boton = document.getElementById("boton");
// let a = 10;
// let b = 20;
// let res= document.getElementById("res");


// boton.addEventListener("click", ()=>{
//   validarPar(a,b)
// });

// const validarPar = (x,y) => {
// 	let r = x.value * y.value;
// 	if( r % === 0){
// 		res.innerHTML = "El resultado es:" + r + "Es un numero par"
// 	}else{
// 		res.innerHTML = "El resultado es:" + r + "Es un numero impar"

// 	}
// }

let boton = document.getElementById("boton");
let a = document.getElementById("input1");
let b = document.getElementById("input2");
let c = document.getElementById("input3");
let res= document.getElementById("res");


boton.addEventListener("click", ()=>{
  validarPerimetro(a,b,c)
});

const validarPerimetro = (x,y,z) => {
	let r = x.value + y.value + z.value;
}