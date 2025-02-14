const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    const Person = {
        name: 'Ranga',
        age: 35,
        id: 7,
      };
    res.json(Person)
})

app.listen(5000, () => {console.log("Server started on port 5000")})