let alumno = {
	nombre: "silvia",
	edad : 23,
	sensei: true,
	batch: [4,7,8,2],
	musica: {
		favoritos: ["muse", "Pate de fua"],
		meh: ["mon laferte", "31 minutos", "heroes del silencio"]
	},
	direccion: {
		calle: "palmira",
		numInt: 19,
		colonia: "alamos"
	}

}

let musica= document.getElementById("musica");

musica.innerHTML = alumno.musica.meh

for(let i= 0; i < alumno.musica.meh.length; i++){
	console.log(i)
}

console.log(alumno.musica.meh)