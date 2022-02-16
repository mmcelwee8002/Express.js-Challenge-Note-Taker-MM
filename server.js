const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const notesData = require('./Develop/db/db.json');




// Add a static route for index.html
// app.get('/', (req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    // res.sendFile(__dirname + 'Develop/public/index.html');
// });

// app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
// app.get('/api', (req, res) => res.json(notesData));

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









