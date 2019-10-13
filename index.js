// Add your code here

function submitData(usersName,usersemail){
  fetch("http://localhost:3000/userss", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "Irina",
    email: "irina@fun.com"
  })
});
}
