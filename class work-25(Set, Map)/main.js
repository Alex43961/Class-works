"use strict"

const myArray = [1, 3, 3, 4, 9, 4, 5, 6, 3 ,7];

function getNonDubleArray(arr) {
	let newMyArr = [];
	let x = new Set(arr);
	for(let value of x){
newMyArr.push(value);
	}
	return newMyArr;
}

console.log(getNonDubleArray(myArray));

const myStr = "t o m o t";
function isPalindrome(str) {
	let newStr = str.toLowerCase().replaceAll(/\s/g,"");

	let reverseStr = new Map(newStr);
	let centerCharacter = Math.floor(reverseStr.length / 2) ;
	for(let i = 0; i < reverseStr.length; i++){
		for(let j = reverseStr.length - 1 ; i>= 0; i--){
			if(reverseStr[i] === reverseStr[j]){
				return true;
			}else {
				return false;
			}
		}

	}
	
	//let reverseStr = newStr.split("").reverse().join('');
	//if(newStr === reverseStr){
	//	return true;
	//}else {
	//	return false;
	//}

}
console.log(isPalindrome(myStr));