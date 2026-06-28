
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

// const hair = document.querySelector('.hair')
// console.log(hair)
const dryer = document.querySelector('.dryer')
console.log(dryer)



/*----------------------------- Event Listeners -----------------------------*/

// hair.addEventListener ('click', function(event){

//     const clickedHair = event.target;
//     console.log('hair clicked')
// })

dryer.addEventListener('move', function(event){

    const dragDryer = event.target;
    console.log('dryer is drag')
})

/*-------------------------------- Functions --------------------------------*/