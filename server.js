const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const notesData = require('./Develop/db/db.json');
const fs = require('fs');


//added middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


// GET request for notes
app.get('/api/notes', (req, res) => {
    // Inform the client
    res.json(`${req.method} request received to get notes`);

    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
});


// POST request for note
app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a notes`);

    // Log our request to the terminal
    console.info(`${req.method} request received to add a notes`);
});









app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);









