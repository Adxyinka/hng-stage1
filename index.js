const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({"slackUsername": "Blacczen", "backend": true, "age": 16, "bio": "A graduate of history and diplomatic studies and a Node.js Backend developer"})
})

app.listen(port, () => {
    console.log(`server running at localhost:${port}`)
})