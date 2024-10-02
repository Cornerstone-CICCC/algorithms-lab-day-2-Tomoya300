// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(string) {
    let obj1 = {}
    let largest = 0
    let maxch = ""
    for (i = 0; i < string.length; i++) {
        if (!obj1[string[i]]) {
            obj1[string[i]] = 1
        } else if (obj1[string[i]]) {
            obj1[string[i]] += 1
        }
        if (obj1[string[i]] > largest) {
            largest = obj1[string[i]]
            maxch = string[i]
        }
    }
    return maxch
}

console.log(mostFrequentChar("javascript")); // Expected output: "c"
