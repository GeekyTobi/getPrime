// A *getPrimes** function program that generates  prime numbers in an array 
//from 0 to n,  taking an integer value n as arguement

module.exports = function getPrimes(n){
	var list = [];

	if(typeof(n) != "number")     								//if n is not a number
	{
		return "Input is not a number";				//Return "Input is not a number"
	}
	if (n < 1) {									// if input n is less than one because prime numbers do not contain negative numbers
		return list;
	}
	else
	{
		for (let i = 2; i <= n; i++) {
			if(Prime(i) === true){
				list.push(i);
			}
		}
	}

	return list
}

function Prime(n){
	var prime = true;
	if(n < 2){
		return false;
	}
	else{
		for(let i = 2; i <= Math.sqrt(n); i++){
			if (n % i == 0){
				prime = false;
			}
		}
	}
	return prime;
}
 
 // getPrimes(5);
// var getPrimes = function (n){
// var numbers = [];
// var primenumbers = [];
// c = Math.sqrt(n);
// 	for(var i = 0; i < c ; i++ ){
// 		if ( !numbers[i] ) {
// 			for(var j = i * i; j <= n; j += i){
// 				numbers[j] = 'false';
// 			}
			
// 		}
// 	}

// 	for(var i = 2; i <= n; i++)
// 	{
// 		if (!numbers[i]) {
// 			primenumbers.push(i);
// 		}
// 	}
// 	if(n === 0)
// 	{
// 		return '0 is not a prime number'
// 	}
// 	else if(n === 1)
// 	{
// 		return '1 is not a prime number'
// 	}
// 	else if(n === 2)
// 	{
// 		return [n] 
// 	}
// 	else if (n === 3) {
// 		return[n]
// 	}
// 	return B;
// };

// module.exports = getPrimes

// console.log(getPrimes(50));