const router = require("express").Router();
const { createNewNote } = require('../../lib/noteFunction.js');
const uuid = require('../../helpers/uuid');
//json to hold the notes
const { newNote } = require('../../db/db.json');


// GET request for notes / this works
router.get("/notes", (req, res) => {
    let results = newNote;
     uuid(),
    res.json(results);
    console.log(newNote)
});

// POST request for note
router.post('/notes', (req, res) => {

   
    let note = createNewNote(req.body, newNote);
    res.json(note);
});





module.exports = router;

