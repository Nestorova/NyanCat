// Creating variables
var myX = 0, myY = 0;

function update() {
    myX = myX+(mouseX-myX)/10;
	myY = 200;
   
}

function draw() {
	// This is how you draw a rectangle
    

    //rainbow
    context.fillStyle = "red"  
    context.fillRect(16, 35, 68, 52);
    context.fillRect(52, 16, 152, 52);
    context.fillRect(152, 34, 252,52);
    
    context.fillStyle = "orange"
    context.fillRect(16, 68, 68, 104);
    context.fillRect(68, 52, 134, 84);
    context.fillRect(152, 68, 252,102);
    
    context.fillStyle = "yellow"
    context.fillRect(16, 102, 68, 44);
    context.fillRect(68, 84, 134, 118);
    
    context.fillStyle = "green"
    context.fillRect(16, 134, 68, 100);
    context.fillRect(68, 118, 152, 100);
    
    context.fillStyle = "blue"
    context.fillRect(16, 168, 68, 42);
    context.fillRect(68, 152, 152, 42);
    context.fillRect(152, 152, 236, 62);
    
    context.fillStyle = "purple"
    context.fillRect(16, 202, 68, 32);
    context.fillRect(68, 186, 152, 32);
    context.fillRect(152, 202, 220, 32);

    //body
    context.fillStyle = "khaki"
    context.fillRect(252, 34, 284, 202);
    
    //biscuit
    context.fillStyle = "pink"
    context.fillRect(268, 50, 252, 170);
    
    context.fillStyle = "grey"
    //tail
    context.fillRect(138, 100, 98, 30);
    context.fillRect(214, 122, 30, 30);
    //legs
    context.fillRect(188, 210, 64, 42);
    context.fillRect(266, 252, 48, 16);
    context.fillRect(372, 252, 48, 16);
    context.fillRect(462, 252, 48, 16);
    //head
    context.fillRect(456, 112, 96, 32);
    context.fillRect(408, 80, 48, 64);
    context.fillRect(552, 80, 48, 64);
    context.fillRect(392, 142, 224, 78);
    context.fillRect(404, 220, 196, 16);
    
    //dots
    context.fillStyle = "indigo"
    context.fillRect(354 , 146, 16, 16);
    context.fillRect(268 , 146, 16, 16);
    context.fillRect(300 , 96, 16, 16);
    context.fillRect(316 , 112, 16, 16);
    context.fillRect(324 , 154, 16, 16);
    context.fillRect(268 , 204, 16, 16);
    context.fillRect(504 , 84, 16, 16);
    context.fillRect(426 , 50, 16, 16);
    context.fillRect(268 , 50, 16, 16);
    
    //conture
    context.fillStyle = "black"
    context.fillRect(252, 34, 16, 16);
    context.fillRect(268, 18, 252, 16);
    context.fillRect(520, 34, 16, 16);
    context.fillRect(236, 52, 16, 168);
    context.fillRect(252, 220, 16, 32);
    context.fillRect(536, 48, 16, 64);
    context.fillRect(266, 236, 320, 16);
    
    //head
    context.fillRect(552, 80, 16, 16);
    context.fillRect(440, 80, 16, 16);
    context.fillRect(456, 96, 16, 16);
    context.fillRect(472, 112, 64, 16);
    context.fillRect(408, 64, 32, 16);
    context.fillRect(568, 64, 32, 16);
    context.fillRect(392, 78, 16, 64);
    context.fillRect(600, 78, 16, 64);  
    context.fillRect(376, 142, 16, 64);
    context.fillRect(616, 142, 16, 64);
    context.fillRect(388, 204, 16, 16);
    context.fillRect(404, 220, 16, 16);
    context.fillRect(600, 204, 16, 16);
    context.fillRect(586, 220, 16, 16);
    
    //tail
    context.fillRect(138, 84, 64 , 16);
    context.fillRect(202, 98, 48 , 16);
    context.fillRect(122, 98, 16 , 32);
    context.fillRect(138, 114, 16, 16);
    context.fillRect(152, 130, 64 , 16);
    context.fillRect(214, 146, 32, 16); 
    
    //leg1
    context.fillRect(220, 188, 16, 16);
    context.fillRect(188, 204, 48, 16);
    context.fillRect(172, 220, 16, 48);
    context.fillRect(172, 252, 64, 16);
    context.fillRect(236, 236, 16, 16);
  
    //face
    context.fillRect(436 , 142, 32, 32);
    context.fillRect(542 , 142, 32, 32);
    context.fillRect(510 , 156, 16, 16);
    context.fillRect(450 , 204, 112, 16);
    context.fillRect(450 , 188, 16, 16);
    context.fillRect(498 , 188, 16, 16);
    context.fillRect(546 , 188, 16, 16);
    
    //leg2
    context.fillRect(266, 252, 16, 16);
    context.fillRect(312, 252, 16, 16);
    context.fillRect(280, 268, 48, 16);
    
    //leg3
    context.fillRect(372, 252, 16, 16);
    context.fillRect(420, 252, 16, 16);
    context.fillRect(388, 268, 48, 16);
    
    //leg4
    context.fillRect(458, 252, 16, 16);
    context.fillRect(504, 252, 16, 16);
    context.fillRect(472, 268, 48, 16);
    
    //eyes
    context.fillStyle = "white"
    context.fillRect(436 , 142, 16, 16);
    context.fillRect(542 , 142, 16, 16);
    
    context.fillStyle = "black"
    context.fillRect(myX-2, myY-2, 34, 34);
    context.fillStyle = "khaki"
    context.fillRect(myX, myY, 30, 30);
    context.fillStyle = "crimson"
    context.fillRect(myX-3, myY-18, 36, 16);
    context.fillStyle = "pink"
    context.fillRect(myX+7, myY-30, 16, 16);
    context.fillStyle = "red"
    context.fillRect(myX+10, myY-38, 10, 10);
    context.fillStyle = "brown"
    context.fillRect(myX-1, myY+14, 32, 17);
       
    

}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
