function submitData(name,email){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  })
}).then(res => res.json()).then(res =>
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode("Water");         // Create a text node
  node.appendChild(res.data);  
);
}
