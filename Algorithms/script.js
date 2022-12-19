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


// algos week 2 day 1

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswers() {
	var i = Math.floor(Math.random() * lifesAnswers.length);
    return lifesAnswers[i];
}
console.log(getAnswers());

function d6() {
    var roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);