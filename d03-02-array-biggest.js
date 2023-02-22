/* Objective
Given any array of numbers, write funtion returning largest number in array. */

/* Variable */
/* *************************************** */
const intObject = {
    arrayInt: 
        ["String", 13,23,-235, "Along", 777, 333],
    
    showProcess: true
}

const { arrayInt, showProcess} = intObject;


/* Function */
/* *************************************** */
const getBiggestLog = (currentMemory, newMemory, isSwitched) => {        
        console.log(`   Current: ${currentMemory} New: ${newMemory} ${isSwitched}`);
}

const setBiggestInt = (thisArray=[1,2], showProcess=false) => {
    let isSwitched = "";    
     let currentMemory = 0;

    for (let i = 0; i < thisArray.length; i++) { 
        let newMemory = thisArray[i];

        (showProcess > 0) ? getBiggestLog(currentMemory, newMemory, isSwitched) : null;

        if (newMemory > currentMemory) {
            currentMemory = newMemory;
            isSwitched = "✅";
        } else {
            isSwitched = "";
        }
    }    

    return currentMemory;
}

/* Process */
/* *************************************** */


/* Execute */
/* *************************************** */
console.log(`👍 The Biggest Integer...`);
console.log(`---------------------------------`);
console.log(` Integer Array:`, arrayInt);
console.log(`---------------------------------`);
console.log(` Show Prcoess:`, showProcess);
const resultInt = setBiggestInt(arrayInt, showProcess);
console.log(`\n Winner is... `, resultInt);
console.log(`---------------------------------`);
