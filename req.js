fetch("http://localhost:3000/api/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify({
        name: "hello"
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(Error => console.error(Error))