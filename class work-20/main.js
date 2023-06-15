'use strict'

//! -------------------------0 -----------------------------
let textarea = document.querySelector("#textarea");
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let note = textarea.value;
const inputText = input.value;
const regExp = new RegExp(inputText, "g")

//button.onclick = () => {
//	if(regExp.test(note)) {
//		textarea.style.borderColor = "line";
//	} else {
//		textarea.style.borderColor = "orange";
//	}
//};


//!---------------------------1-------------------------------
button.onclick = () => {

	note = note.replace(regExp, "");
};



