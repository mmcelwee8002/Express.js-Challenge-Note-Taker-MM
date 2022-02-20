
// this is the route the server takes to pull from the notes.js

const router = require('express').Router();
const notesRoutes = require('./notes');

router.use(notesRoutes);




module.exports = router;