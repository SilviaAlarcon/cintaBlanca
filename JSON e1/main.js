
let nombre= document.getElementById("nombre");
let edad= document.getElementById("edad");
let email= document.getElementById("email");
let boton= document.getElementById("boton");

let alumno = {
	nombre: "",
	edad: 0,
	email: ""
}

console.log(alumno)

boton.addEventListernet("click", ()=>{
	event.preventDefault()

	alumno.nombre = nombre.value;
	alumno.edad = edad.value;
	alumno.email = emai.value;
	console.log(alumno);
})


