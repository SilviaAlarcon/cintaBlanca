let array = [3,4,5,1,3,6];
let res = 0;
let max= 0;

for(let i=0; i< array.length; i++){
	if (array[i+1] !== undefined) {
	res= array[i] * array [i+1];
	if (res>max){
		max=res;
	} 
    }

}
 console.log(max);
