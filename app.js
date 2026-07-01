
/*-------------------------------- Constants --------------------------------*/

let stopTimer;
let isDragging = false;
let offsetX = 0;  //store where the dryer is clicked 
let offsetY = 0;
let runTimer;
let time= 20;

//hair sections 
let baseDry = false;
let leftDry = false;
let rightDry = false;
let bangsDry =false;
//timer for each hair section
let baseTimer = null;
let leftTimer = null;
let rightTimer = null;
let bangsTimer = null; 

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const dryer = document.getElementById("dryer");
const sound = new Audio ('sounds/hair-dryer-sound.mp3') //adding the blow-dryer sound
const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('#timer')
const hair =document.getElementById("dropZone")
const hairBase = document.querySelector('#hairBase')
const hairLeft =document.querySelector('#hairLeft')
const hairRight =document.querySelector('#hairRight')
const bangs =document.querySelector('#bangs')
const reset =document.querySelector('#reset')
/*----------------------------- Event Listeners -----------------------------*/
//start button with timer 

startBtn.addEventListener("click", function (event) {

    wetHair();
    // Reset timer
    time = 20;
    timer.textContent = "Time: " + time;

    // Prevent multiple intervals
    clearInterval(runTimer);

    // Start counting down
    runTimer = setInterval(function () {

        time--;
        timer.textContent = "Time: " + time;

        console.log("Time left:", time);

        if (time <= 0) {

            clearInterval(runTimer);
            timer.textContent = "Time over you lost";

            

        }

    }, 1000);

});



// /*-------------------------------- Functions --------------------------------*

function dryHairBase(){

   hairBase.style.backgroundColor = '#714926';
   baseDry = true;
   checkWin();  
}

function dryHairLeft(){

    hairLeft.style.backgroundColor = '#714926';
    leftDry = true;
    checkWin();
}

function dryHairRight(){

    hairRight.style.backgroundColor = '#714926';
    rightDry = true;
    checkWin();
}

function dryHairBangs(){

    bangs.style.backgroundColor = '#714926';
    bangsDry = true;
    checkWin();
}   
   

function wetHair(){

   hairBase.style.backgroundColor = '#331d0a';
   hairLeft.style.backgroundColor = '#331d0a';
   hairRight.style.backgroundColor = '#331d0a';
   bangs.style.backgroundColor = '#331d0a';

    baseDry = false;
    leftDry = false;
    rightDry = false;
    bangsDry =false;

}


//drag the hair dryer and point it to the hair

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
    //hair color change

    if(isDragging){

        sound.play()
        sound.currentTime = 0;
        
    }
     stopTimer = setTimeout (function(){

        sound.pause()
        sound.currentTime = 0;
        isPlaying =false;

    }, 20000) //20 seconds

});


//overlapping function
//rectA is the dryer and rectB is the hair we check if the overlap
function isOverlapping(rectA, rectB){

    return (
        
        rectA.right > rectB.left &&
        rectA.left < rectB.right &&
        rectA.bottom > rectB.top &&
        rectA.top < rectB.bottom

    )

}


// dryer movement around 
document.addEventListener("mousemove", function (event) {

    //if the dryer is not being dragged the function will stop

    if (!isDragging) return;

    dryer.style.left = (event.clientX - offsetX) + "px"; //mouse horizontal
    dryer.style.top = (event.clientY - offsetY) + "px";  //mouse vertical
    //offset will keep the dryer from jumping

    // we will point to the hair using right, left, top, bottom
    // direction of the hair 


    //get bounding return the size and position of the hair 

    const dryerRect = dryer.getBoundingClientRect();
    
    
    //dryer rect position of dryer and hair rect position of hair

    //this if statement will check if dryer and hair overlap
    //there is timer for each hair section

   
if (isOverlapping(dryerRect, bangs.getBoundingClientRect())) {

    if (!bangsTimer && !bangsDry) {

        bangsTimer = setTimeout(function () {
            dryHairBangs();
            bangsTimer = null;
        }, 5000);

    }

} else {

    clearTimeout(bangsTimer);
    bangsTimer = null;

}

if (isOverlapping(dryerRect, hairRight.getBoundingClientRect())) {

    if (!rightTimer && !rightDry) {

        rightTimer = setTimeout(function () {
            dryHairRight();
            rightTimer = null;
        }, 5000);

    }

} else {

    clearTimeout(rightTimer);
    rightTimer = null;

}


//leftTimer 

if (isOverlapping(dryerRect, hairLeft.getBoundingClientRect())) {

    if (!leftTimer && !leftDry) {

        leftTimer = setTimeout(function () {
            dryHairLeft();
            leftTimer  = null;
        }, 5000);

    }

} else {

    clearTimeout(leftTimer);
    leftTimer = null;

}

//baseTimer 

if (isOverlapping(dryerRect, hairBase.getBoundingClientRect())) {

    if (!baseTimer  && !baseDry) {

        baseTimer  = setTimeout(function () {
            dryHairBase();
            baseTimer   = null;
        }, 5000);

    }

} else {

    clearTimeout(baseTimer );
    baseTimer  = null;

}




});




// stop dragging
document.addEventListener("mouseup", function () {

    isDragging = false;
    dryer.style.cursor = "grab";
    
});


//check win function 

function checkWin(){

    if (baseDry && rightDry && leftDry && bangsDry){


        clearInterval(runTimer);

        timer.textContent = "🎊Winner"

        isDragging = false;


    }
    else if (time <= 0){

        checkLose();

    }

    
}

function checkLose(){

  

    clearInterval(runTimer);

    timer.textContent = "😞 You Lost!";

    isDragging = false;

   
}



//reset button to replay the game 

reset.addEventListener('click', function(){
    console.log("Replay clicked");

    // stop any running countdown
    clearInterval(runTimer);

    // stop any pending "hair drying" timeouts
    clearTimeout(baseTimer);
    clearTimeout(rightTimer);
    clearTimeout(leftTimer);
    clearTimeout(bangsTimer);

    baseTimer = null;
    rightTimer = null;
    leftTimer = null;
    bangsTimer = null;

    // stop the dryer sound
    sound.pause();
    sound.currentTime = 0;

    // reset game state
    time = 20;
    gameOver = false;
    isDragging = false;

    // reset hair back to wet (also resets baseDry/leftDry/rightDry/bangsDry to false)
    wetHair();

    // reset the timer display
    timer.textContent = "Time: " + time;

    // put the dryer back to its starting spot and cursor
    dryer.style.left = "";
    dryer.style.top = "";
    dryer.style.cursor = "grab";
});







//fix win and lose


//when time stops I wanna disable the dragging


//modify the ui 
//pop up if win or lose 