// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(string) {
    let arr1 = string.split("_")
    let result = arr1[0]
    for (i = 1; i < arr1.length; i++) {
            result += arr1[i][0].toUpperCase() + arr1[i].slice(1)
    }
    return result
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"