function submitDate(name,email){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "kagan",
    email: "kagan@irina.com"
  })
});
}
