// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(string) {
    let arr1 = string.split(" ")
    let result = ""
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i][0]) {
            result += arr1[i][0].toUpperCase() + arr1[i].slice(1)
        }
        if (i < arr1.length-1) {
            result += " "
        }
    }
    return result
}

console.log(capitalizeWords("how kind of you to let me come")); // Expected output: "Hello World"