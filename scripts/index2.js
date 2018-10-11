/* Make some code run when button is clicked */

/* Write some text to page from resultant button click */

/* Pull text from array of text for writing to the page */


const triggerElement = document.querySelector('[data-trigger]');
const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement = document.querySelector('[data-output]');
/* fortune arrays */
let fortunesCpy = [];

const fortunes = ["You're as useless as the 'ueue' in 'queue'.",
    "Mirrors can't talk. Lucky for you, they can't laugh either.", 
    "Hey, you have something on your chin...No the third one down.", 
    "You're the reason the gene pool needs a lifeguard.", 
    "So a thought crossed your mind? Must have been a long and lonely journey."];  

const moreFortunes = [
    "If I wanted to kill myself I'd climb up your ego and jump to your IQ",
    "Someday you'll go far...and I hope you stay there.", 
    "I'd agree with you but then we'd both be wrong",
    "If I had a dollar for every time you said something smart, I'd be broke.",
    "I love what you've done with your hair. How do you get it to come out of your nose like that?"       
]    

const imgFortunes = {fortune: '' }


const lenFortunes = fortunes.length;
const lenMoreFortunes = moreFortunes.length;

/* let shuffledFortunes = shuffle(fortunesCpy);
let shuffledMoreFortunes = shuffle(moreFortunes); */


/* random selector for fortune generation  */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    console.log(`Random num: ${randNum}`);
    return randNum;
  }
/* version 2 to handle non-repeating digits
could create a boolean array or make an object key for "used" but
while that wouldn't output duplicate fortunes for the user it would 
still produce duplicate random numbers. It seems best to randomize the array 
from the get go and pop values from that. */

function shuffle(array) {
    let i = array.length,
        j = 0,
        temp = [];

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


/* triggerElement.addEventListener('click', function () {
    const newFortune = fortunes[getRandomInt(0,lenFortunes)];
    console
    outputElement.textContent = newFortune;
});

triggerElement2.addEventListener('click', function () {
    const newFortune = moreFortunes[getRandomInt(0,lenMoreFortunes)];
    outputElement.textContent = newFortune;
}); */

/* non repeating permutations */

triggerElement.addEventListener('click', function () {
/*     debugger
 */    /* onclick print what is in array */
    console.log(fortunesCpy);
    /* check if empty array */
    if (fortunesCpy.length === 0) {
        /* if empty reassign array to a new shuffled version of original */
        fortunesCpy = shuffle(fortunes);
        console.log(fortunesCpy);

        /* print out one value */
        outputElement.textContent = fortunesCpy.pop();
        console.log(fortunesCpy);
        console.log(`fortunes ${fortunes}`);

    }else{
    /* if fortunes left in array print one */
    outputElement.textContent = fortunesCpy.pop();
    }
});

triggerElement2.addEventListener('click', function () {
    outputElement.textContent = shuffledFortunes.pop();
});