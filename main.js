const rainDropTop = document.querySelectorAll(".rainDropTop");
const rainDropMiddle = document.querySelectorAll(".rainDropMiddle");
const rainDropBottom = document.querySelectorAll(".rainDropBottom");
const element= document.querySelector(".star");
let exponentialPositionTop = 0;
let exponentialPositionBottom = 20;
let exponentialDelayMiddle = .1;  
let exponentialDelay = 0;
let i = 0;
let repetitions = 0;
let counterIteration = 0;


/* For loop for rainDrop iteration of distance */
for(i= 0; i<rainDropTop.length; i++){
    rainDropBottom[i].style.left = exponentialPositionBottom + "px";
    rainDropTop[i].style.right = exponentialPositionTop + "px";
    rainDropMiddle[i].style.left = exponentialPositionTop + "px";
    rainDropBottom[i].style.animation = "rainDrops 1.2s " + exponentialDelayMiddle + "s infinite linear";
    rainDropTop[i].style.animation  = "rainDrops 1.2s " + exponentialDelay +"s infinite linear";
    rainDropMiddle[i].style.animation  = "rainDrops 1.2s " + exponentialDelay +"s infinite linear";
    exponentialDelay = exponentialDelay + .3;
    exponentialDelayMiddle = exponentialDelayMiddle +.2;
    exponentialPositionTop = exponentialPositionTop + 80;
    exponentialPositionBottom = exponentialPositionBottom + 80;
    
}
/* End of For loop */

function animationChange(){
    repetitions++;
    console.log(repetitions);
    
if(repetitions > 9){
    element.style.animation = "starAppear 1s infinite linear";
    repetitions = 0;
}

    
}

function endAnimation(){
    element.style.animation = "";
}
rainDropTop[0].addEventListener("animationiteration", animationChange);
element.addEventListener("animationiteration",endAnimation )


