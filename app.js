
/*-------------------------------- Constants --------------------------------*/

let stopTimer;
let isDragging = false;
let offsetX = 0;  //store where the dryer is clicked 
let offsetY = 0;
let runTimer;

// let stop;
// let isClicked = false;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const dryer = document.getElementById("dryer");
const sound = new Audio ('sounds/hair-dryer-sound.mp3') //adding the blow-dryer sound
const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector('#timer')

/*----------------------------- Event Listeners -----------------------------*/
//start button with timer 
startBtn.addEventListener("click", function () {

    // Reset timer
    time = 10;
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
            timer.textContent = "Time's Up!";

            console.log("Game Over");

        }

    }, 1000);

});


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

    // we will point to the hair using right, left, top, bottom
    // direction of the hair 
    // dropzone is the hair sections

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

// stop dragging
document.addEventListener("mouseup", function () {

    isDragging = false;
    dryer.style.cursor = "grab";
});

// wet dark and dry light we will add water




//hair changing from dark (wet) to light (dry)





//win or lose based on the time spent drying the hair if <= 20 win
// if more than 20 seconds lose 



//reset button to replay the game 






/*-------------------------------- Functions --------------------------------*/