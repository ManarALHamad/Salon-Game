
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const hair = document.querySelector('.hair')
console.log(hair)



/*----------------------------- Event Listeners -----------------------------*/

hair.addEventListener ('click', function(event){

    const clickedHair = event.target;
    console.log('hair clicked')
})

/*-------------------------------- Functions --------------------------------*/