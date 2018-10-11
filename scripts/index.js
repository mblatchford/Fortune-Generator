

const triggerElement = document.querySelector('[data-trigger]');
const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement = document.querySelector('[data-output]');
/* fortune arrays */

let fortunesCpy = [];
let moreFortunesCpy = [];

const fortunes = ["You're as useless as the 'ueue' in 'queue'.",
    "Mirrors can't talk. Lucky for you, they can't laugh either.", 
    "Hey, you have something on your chin...No the third one down.", 
    "You're the reason the gene pool needs a lifeguard.", 
    "So a thought crossed your mind? Must have been a long and lonely journey."];  

const moreFortunes = [
    "If I wanted to kill myself I'd climb up your ego and jump to your IQ.",
    "Someday you'll go far...and I hope you stay there.", 
    "I'd agree with you but then we'd both be wrong.",
    "If I had a dollar for every time you said something smart, I'd be broke.",
    "I love what you've done with your hair. How do you get it to come out of your nose like that?"       
]        

function shuffle(original) {
        let array = [...original];
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



triggerElement.addEventListener('click', function () {
    fortunesCpy = fortuneText (fortunesCpy, fortunes);
});


triggerElement2.addEventListener('click', function () {
       moreFortunesCpy = fortuneText (moreFortunesCpy, moreFortunes);
});


function fortuneText (array, toCopy){
    /* check if empty array */
    if (array.length === 0) {
        /* if empty reassign array to a new shuffled version of original */
        array = shuffle(toCopy);
        /* print out one value */
        outputElement.textContent = array.pop();
        /* return current state of array so data persists across multiple clicks */
        return array;

    }else{
    /* if fortunes left in array print one */
    outputElement.textContent = array.pop();
    /* return current state of array so data persists across multiple clicks */
    return array;

    }
}