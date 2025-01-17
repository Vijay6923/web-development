// const greet=function(name){
//     console.log("hello"+ name);
// };

// const person={
//     name:"vijay",
//     key:function(){
//         console.log("hello "+ this.name)
//     }
// };
// person.key();

// const function1 = function() {
//     console.log("This is f1");
// };
// const function2 = function() {
//     console.log("This is f2");
// };
// const arr = [];
// arr.push(function1);
// arr.push(function2);
// arr[0](); 
// arr[1]();

// function sport(time) {
//     if (time == "morning")
//         return swim();
//     else
//         return chess();
// }
// function swim() {
//     console.log("swim");
// }
// function chess() {
//     console.log("chess");
// }
// sport("morning")(); 
// sport("evening")(); 

function functionthatacceptsanotherfunction(argument){
    console.log("functionthatacceptsanotherfunction...");
    argument();
}
function functionpassedasargument(){
    console.log("functionpassedasargument..")
}

functionthatacceptsanotherfunction(functionpassedasargument);
