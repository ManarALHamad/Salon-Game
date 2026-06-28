
/*-------------------------------- Constants --------------------------------*/
let isPlaying = false;
let stopTimer;
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/


const dryer = document.querySelector('img')
console.log(dryer)
const sound = new Audio ('sounds/hair-dryer-sound.mp3') //adding the blow-dryer sound


/*----------------------------- Event Listeners -----------------------------*/

//dryer is clicked and the sound only plays for 10 seconds
dryer.addEventListener('click', function(event){

    const dragDryer = event.target;
    console.log('dryer is clicked')
    
    

    if(isPlaying){

        clearTimeout(stopTimer);
    }

    else {

        sound.currentTime = 0;
        sound.play()
        isPlaying =true;

    }

    stopTimer = setTimeout (function(){
        sound.pause()
        sound.currentTime = 0;
        isPlaying =false;

    }, 10000)
    
})

/*-------------------------------- Functions --------------------------------*/