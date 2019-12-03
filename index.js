const nicoInfo = {
    name: "Kang",
    age: 23,
    gender: "Male",
    isHandosme: "true",
    favMovies: ["a", "b", "c", "d"],
    favFood: [
                {
                 name: "Kinchi",
                 fatty: false
                }, 
                {
                 name: "Chesese burger", 
                 fatty: true 
                }
            ]
}
console.log(nicoInfo, console);

function sayHello(name, age){
    console.log("Hello", name, "you have", age);
}

sayHello("kang", 15);
console.log("Hi")