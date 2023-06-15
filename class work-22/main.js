'use strict'
canvas.height = 500;
canvas.width =500;

const ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(50 10 100)";
ctx.strokeStyle = 'rgb(150 10 100)';
ctx.strokeLine = 3;


ctx.fillRect(10,10, 100, 100);
ctx.strokeRect(30,20, 100, 100);
ctx.clearRect(20, 20, 40, 40);


ctx.beginPath();
ctx.moveTo(10, 250);
ctx.lineTo(30, 250);
ctx.strokeText('Some text', 10, 10);
ctx.fillText("Some text	3", 10,10);





ctx.strokeLine();
ctx.fill();
ctx.closePath();