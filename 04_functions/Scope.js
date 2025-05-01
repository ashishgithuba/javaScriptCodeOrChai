//Global Scope
// let name="Ashish"
// function sayHii()
// {
//     console.log(name);
// }
// sayHii(); 
// Function scope
// function greet() {
//     let message = "Hello";
//     console.log(message); // Works!
//   }
  
//  //console.log(message); // ❌ Error (outside the function)
//   greet();
//Block Scope
// {
//     let age = 20;
//     console.log(age); // Works!
//   }
  
 // console.log(age); // ❌ Error (outside the block)
 function outer() {
    let outerName = "Ashish";
  
    function inner() {
      console.log(outerName); // Works!
    }
  
    inner();
  }
  