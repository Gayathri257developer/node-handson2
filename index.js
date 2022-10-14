const express = require('express');

const port = 7000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Node js Handson 2</h1>');
})
app.get('/api/main', (req, res) => {
    res.send('<h2>Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.');
})

app.listen(port);