// 1) Greeting
// 2) Get userName - userName must contain more than 2 symbols
//                 - userName must be convert into upper case
//                 - cut last 3 letters from name and reverse it
// 3) Get user age => Age must be positive number
//                 => Age must be a number
//                 => If age is not a number -> return user to prompt("Enter your age")
// 4) Every step must keep propose to user => Do you wanna exit ?



let greeting: string = console.log("Hi " + `${userName}` + "!");

//let userAge: number | null = +prompt("What is your age ?")
let counter: boolean = true

while (counter) {
	let userName: string = prompt("What is your name ?")

	if (userName.length <= 2) {
		prompt(userName)
	} else {
		alert(greeting);
		counter = false
	}
}