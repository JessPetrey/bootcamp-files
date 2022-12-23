// ALWAYS HUNGRY CHALLENGE

function alwaysHungry(arr) {
    var nope = 0
    for(var i = 0; i < arr.length; i ++) {
        if (arr[i] == "food")  {
            console.log("yummy")
        } else {
            if (arr[i] !== "food") {
                nope ++
            }
        }
    }
    if (nope == arr.length) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



// HIGH PASS FILTER CHALLENGE

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// BETTER THAN AVERAGE

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0
    // count how many values are greater than the average
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > sum/arr.length) {
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// ARRAY REVERSE

function reverse(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    return arr;
    }
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// FIBONACCI ARRAY 

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n){
        var sum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
        fibArr.push(sum)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]