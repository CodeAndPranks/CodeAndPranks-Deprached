
     document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("button");
    const btn2 = document.getElementById("button2");
    const btn3 = document.getElementById("button3");
    
    addEventListeners(btn, myFunction1);
    addEventListeners(btn2, myFunction2); 
    addEventListeners(btn3, myFunction3); 
});

function addEventListeners(button, func) {
    button.addEventListener("click", func);
    button.addEventListener("touchstart", func);
}
//twist angel of tag('s) ,e.g img tag OR all tag-name with *
function myFunction1 () {  
(function(){var x = document.body.getElementsByTagName("*"); 
for (i = 0; i < x.length; i++) {
var y = Math.floor((Math.random()*10)+1); x[i].style.transform="rotate("+y+"deg)"}}());
}  
//STOP AND RESET THE TRANSFORM(MessUpp)
function myFunction2() {var x = document.body.getElementsByTagName("*");
       for (var i = 0; i < x.length; i++) { x[i].style.transform = "none";
}
 }

// Function called on button3 click.
//Rotate script-tag you want,or all with a astric(*)
function myFunction3() {
   // Initialize the variable R
    let R = 0;
    let intervalID; // Store interval ID globally for access

    // Define the variables used in the animation
    let x1 = 1, x2 = 2, x3 = 3, x4 = 100, x5 = 150;
    let y1 = 1, y2 = 2, y3 = 3, y4 = 100, y5 = 150;

    // Get all elements
    let DI = document.getElementsByTagName("img"); 
    let DIL = DI.length;

    // Function to animate elements
    function A() {
      for (let i = 0; i < DIL; i++) { 
        let DIS = DI[i].style; 
        DIS.position = 'absolute'; 
        DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) + "px"; 
        DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) + "px";
      }
      R++;
    }

    // Function to start animation
    function startAnimation() {
      intervalID = setInterval(A, 100);
      setTimeout(function() {
        clearInterval(intervalID);
        location.reload();
      }, 4000);
    }
    
    startAnimation();
} 
