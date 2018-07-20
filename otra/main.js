let array = [3,4,5,1,3,6];
let res = [];


for(let i=0; i= array.length; i++){
	if (array[i+1] !== undefined) {
	res[i]= array[i] * array [i+1]
    } 
}

console.log(res)