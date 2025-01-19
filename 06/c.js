// 6c.
// Write a JavaScript function to check whether an object contains given property

function hasProperty(object, property) {
    return object.hasOwnProperty(property);
}

let person = { name: "Alice", age: 25 };
console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "gender"));