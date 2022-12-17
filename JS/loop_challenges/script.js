// print odds 1-20
var odd = 0

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        odd = i;
        console.log(odd)
    }
}

// decreasing multiples of 3
var num = 100
for (var i = num; i > 0; i--) {
    if (i % 3 == 0) {
        num = i;
        console.log(num)
    }
}

// print the sequence
var sequence = [4, 2.5, 1, -0.5, -2, -3.5]
    for(var i = 0; i < sequence.length; i++) {
        console.log(sequence[i])
    }

// sigma
var sum = 0
for (var i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)


// factorial
var product = 1
for (var i = 1; i <= 12; i++) {
    product = product * i
}
console.log(product)
