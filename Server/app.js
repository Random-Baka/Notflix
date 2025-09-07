const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/video', (req, res) => {
    res.sendFile('d:/test.mkv', {root: __dirname});
});

app.listen(4000, () => {
    console.log('Listending on P400');
});