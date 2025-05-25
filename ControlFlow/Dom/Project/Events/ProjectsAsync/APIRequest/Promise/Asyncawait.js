//Async code
// async function fetchUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json(); // waits for JSON parsing
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//   }
// }

// fetchUser();

fetch('https://jsonplaceholder.typicode.com/users/1')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
