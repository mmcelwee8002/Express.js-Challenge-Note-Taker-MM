const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Helper method for generating unique ids


// this 'path is the same used in HTML routes index
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes/');
const htmlRoutes = require('./routes/htmlRoutes');

//added middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () =>
    console.log(`Note Taker listening at http://localhost:${PORT}/index`)
);









