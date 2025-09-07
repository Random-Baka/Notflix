const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/video', (req, res) => {
    res.sendFile('assets/12/12.mkv', {root: __dirname});
});

app.listen(4000, () => {
    console.log('Listending on P400');
});