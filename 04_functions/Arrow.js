// const obj={
//     name:"Ashish",
//     greet:()=>
//     {
//         console.log("Hello"+this.name);
//     }

// };
// obj.greet();
const obj = {
    name: "Ashish",
    greet: function () {
      const inner = () => {
        console.log("Hello " + this.name); // 'this' is from greet()
      };
      inner();
    }
  };
  
  obj.greet();