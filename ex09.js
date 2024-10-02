// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

function sortByProperty(array, condition) {
    function comparison(a, b) {
        if (a[condition] > b[condition]) return 1
        if (a[condition] < b[condition]) return -1
        return 0
    }
    let result = array.sort(comparison)
    return result
}

console.log(sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Ethan", age: 21}], "age")); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]