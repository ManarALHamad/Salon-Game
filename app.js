
/*-------------------------------- Constants --------------------------------*/
// let isPlaying = false;
    let stopTimer;

// let timer = 20;
// let stop;
// let isClicked = false;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const sound = new Audio ('sounds/hair-dryer-sound.mp3') //adding the blow-dryer sound
// const startBtn = document.querySelector('#startBtn')
// const timer = document.querySelector('#timer')

/*----------------------------- Event Listeners -----------------------------*/

//drag the hair dryer and point it to the hair

const dryer = document.getElementById("dryer");


let isDragging = false;
let offsetX = 0;  //store where the dryer is clicked 
let offsetY = 0;

//dragging starts 
dryer.addEventListener("mousedown", function (event) {

    isDragging = true;

    // distance between dryer and mouse
    offsetX = event.clientX - dryer.offsetLeft;
    offsetY = event.clientY - dryer.offsetTop;

    //cursor design is grapping

    dryer.style.cursor = "grabbing";

    //when dragging the dryer the sound will play and 
    // hair will be touched

    if(isDragging){

        sound.play()
        sound.currentTime = 0;
        

    }
     stopTimer = setTimeout (function(){

        sound.pause()
        sound.currentTime = 0;
        isPlaying =false;

    }, 10000) //10 seconds

});

// dryer movement around 
document.addEventListener("mousemove", function (event) {

    if (!isDragging) return;

    dryer.style.left = (event.clientX - offsetX) + "px";
    dryer.style.top = (event.clientY - offsetY) + "px";
    // direction of the hair 
    const hair =document.getElementById("dropZone")
    const dryerRect = dryer.getBoundingClientRect();
    const hairRect = hair.getBoundingClientRect();

        if (
        dryerRect.right > hairRect.left &&
        dryerRect.left < hairRect.right &&
        dryerRect.bottom > hairRect.top &&
        dryerRect.top < hairRect.bottom
    ) 

        console.log("Hair is touched!");


});

// Stop dragging
document.addEventListener("mouseup", function () {

    isDragging = false;
    dryer.style.cursor = "grab";
});




//click start then the timer will begin 

// startBtn.addEventListener('click', function(event){

// const start = event.target;
// console.log('start is clicked')

// if(isClicked){

//     clearTimeout(stopTimer);
// }

// else {

//     timer.currentTime =0;
//     timer.start()
//     isClicked = true;
// }

// stopTimer = setTimeout (function(){

//     timer.pause()
//     timer.currentTime 
// })

// })


//     //20 seconds but in code we write it in milisecond

//     //if clicked the startBtn the timer will start and show in the ui

   








// //dryer is moved and the sound only plays for 10 seconds

// dryer.addEventListener('click', function(event){

//     const dragDryer = event.target;
//     console.log('dryer is clicked')
    
    
//     //check if the sound of dryer is playing or no 
//     // is playing either T or F
//     if(isPlaying){

//         //if the sound is playing will stop it
//         clearTimeout(stopTimer);
//     }

//     // now we will play the dryer sound 
//     else {

//         sound.currentTime = 0;
//         sound.play()
//         isPlaying =true; //true to play the sound

//     }

//     //timer so the sound only plays for 10 seconds 
//     stopTimer = setTimeout (function(){

//         sound.pause()
//         sound.currentTime = 0;
//         isPlaying =false;

//     }, 10000) //10 seconds
    
// })



//hair changing from dark (wet) to light (dry)





//win or lose based on the time spent drying the hair if <= 20 win
// if more than 20 seconds lose 



//reset button to replay the game 






/*-------------------------------- Functions --------------------------------*/