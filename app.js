const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello to rocket learn');
});

app.listen('3000', () => {
    console.log('server is run on port 3000');
});