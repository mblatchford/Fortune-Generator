

const triggerElement = document.querySelector('[data-trigger]');
const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement = document.querySelector('[data-image]');
/* img fortune arrays */

let imgFortunesCpy = [];
let imgMoreFortunesCpy = [];      

let imgFortunes = [{img:"https://s3.scoopwhoop.com/anj/wdkusd/56e77205-7614-4eac-a80f-4131113db56a.jpg"},
{img:"https://s4.scoopwhoop.com/anj/wdkusd/1e0f91f0-dfa6-4634-bd45-ea48b3b2f67e.jpg"},
{img:"https://s4.scoopwhoop.com/anj/wdkusd/c47ebb95-250c-449c-a2a2-ab60acb1e329.jpg"},
{img:"https://s4.scoopwhoop.com/anj/wdkusd/5f3a1870-8451-491c-8ef0-e863af289e11.jpg"},
{img:"https://s4.scoopwhoop.com/anj/wdkusd/8aa41648-457e-4abe-9669-b633d054fc1c.jpg"},
]

let imgMoreFortunes = [{img:"https://s3.scoopwhoop.com/anj/wdkusd/56e77205-7614-4eac-a80f-4131113db56a.jpg"},
{img: "https://s3.scoopwhoop.com/anj/wdkusd/ddcb1e77-e70a-454f-b1f7-6b051df9e985.jpg"},
{img: "https://s4.scoopwhoop.com/anj/wdkusd/7f37bd7c-3622-466b-bfd1-7d4f86bcb21d.jpg"},
{img: "https://s4.scoopwhoop.com/anj/wdkusd/fa5bda61-d3da-458d-9504-4ddd5a2bb852.jpg"},
{img: "https://s3.scoopwhoop.com/anj/wdkusd/a704292a-e4ef-4ec9-907f-1d216951b3ef.jpg"},
{img: "https://s4.scoopwhoop.com/anj/wdkusd/098c2b6e-65ba-4f0e-a502-1708277f8fab.jpg"}     
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
    imgFortunesCpy = fortuneImg (imgFortunesCpy, imgFortunes);
});


triggerElement2.addEventListener('click', function () {
       imgMoreFortunesCpy = fortuneImg (imgMoreFortunesCpy, imgMoreFortunes);
});


function fortuneImg (array, toCopy){
    /* check if empty array */
    console.log(array);
    if (array.length === 0) {
        /* if empty reassign array to a new shuffled version of original */
        array = shuffle(toCopy);
        console.table(array);
        let using = array.pop();
        outputElement.src = using.img;
        /* return current state of array so data persists across multiple clicks */
        return array;

    }else{
        /* if fortunes left in array print one */
        let using = array.pop();
        outputElement.src = using.img;
        /* return current state of array so data persists across multiple clicks */
        return array;
    }
}

