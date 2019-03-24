const express = require('express');
const app = express();

const PORT = process.env.PORT;

let count = 1;

app.get('/', (req, res) => {
    const msg = 'This is port #' + PORT + '. I have been hit ' + count + ' times.';
    console.log('count', count);
    count++;
    res.send(msg + '\n');
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT, '...');
});