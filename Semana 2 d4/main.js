













let jugador1 = prompt("¿Piedra, papel o tijera?")
let jugador2= prompt("¿Piedra, papel o tijera?")


var comparar = function(jugador1, jugador2) { 
    if(jugador1 === jugador2){ 
        console.log ("¡Es un empate!"); 
    } 
     
    if(jugador1 === "piedra"){ 
        if(jugador2 === "tijera"){ 
            console.log("piedra gana"); 
        }else{ 
            "papel gana"; 
        } 
    } 
     
    else if(jugador1 === "papel"){ 
        if(jugador2 === "piedra"){ 
            console.log ("gana tijera"); 
        } 
        else{ 
            console.log ("tijera gana"); 
        } 
    } 
    else if(jugador1 === "tijera"){ 
        if(jugador2 === "papel"){ 
            console.log ("gana tijera"); 
        } 
        else{ 
            console.log ("gana piedra"); 
        } 
         
    } 
     
} 

console.log(comparar (jugador1, jugador2)); 





	