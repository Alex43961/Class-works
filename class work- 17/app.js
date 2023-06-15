//! ===============

const div = document.getElementById("h1");
console.log(div);
div.addEventListener('click', (event) => {
	console.log((event.x, event.y));
});

//!========= 1 =========

function addText(id) {
	const div = document.getElementById(id);
	const text = div.innerHTML = "Hello world !"
}
addText("h1");


//! ========== 2 =========

function CreateTag(tag, text) {
	const addingTag = {
		el: document.createElement(tag),

	}
	addingTag.el.textContent = text;
	return addingTag;
}
const greeting = new CreateTag("h2", "Hello everyone !");
console.log(greeting);
document.body.append(greeting.el);


//!========== 3 ===========

function manyElements(count, text, tag) {

	for (let i = 1; i <= count; i++) {
		const div = document.createElement(tag);
		div.className = "newGreeting"
		div.innerHTML = text;
		document.body.append(div);
	}

}

manyElements(5, "hello !", "h3");

//!=========== 4 ============
function anyClass(cl, t){
	const div = document.createElement(t);
	div.className = cl;
	document.body.append(div) ;
}

anyClass("btn", "button");

//! =========== 5 ==========

function MyCat(tag, img){
	
}
