canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth = 1;
ctx.rect(140,143,430,200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth = 4;
ctx.arc(260,210,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth = 4;
ctx.arc(360,210,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth = 4;
ctx.arc(460,210,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(307,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth = 4;
ctx.arc(407,250,40,0,2*Math.PI);
ctx.stroke();