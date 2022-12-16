var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(var i = 0; i < numbers.length; i++)
    if(numbers[i] > 0) {
        countPositives ++
    }
    
console.log("there are " + countPositives + " positive values");


// not enough time working with others to do it together, this is my solo solution





var arr = ["a", "b", "c", "d", "e"];
function reverse(arr){
    for(i=1; i<arr.length/2 - 1; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length - 1] = temp;
        return 
    }
}
console.log(reverse)