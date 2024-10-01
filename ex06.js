// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
    let result = {}
    let arr1 = url.split("?") // [ 'https://example.com', 'search=test&page=2' ]
    let arr2
    if (arr1.length > 1) {
        arr2 = arr1[1].split("&")
    }
    for (i = 0; i < arr2.length; i++) {
        let sub = arr2[i].split("=")
        result[sub[0]] = sub[1]
    }

    return result
}



console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }