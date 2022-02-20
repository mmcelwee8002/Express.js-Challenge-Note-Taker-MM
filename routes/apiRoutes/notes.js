const router = require("express").Router();
const { createNewNote } = require('../../lib/noteFunction.js');
const uuid = require('../../helpers/uuid');
//json to hold the notes
const { newNote } = require('../../db/db.json');
const res = require("express/lib/response");

//this doesn't seem to be working to create a new note/delete a note
// GET request for notes / this works
router.get("/notes", (req, res) => {
    let results = newNote;
     uuid(),
    res.json(results);
});

router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, newNote);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


// POST request for note
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    // req.body.id = newNote.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!createNewNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, newNote);
        res.json(note);


    }

});
// delete note function route

// router.delete('/notes/:id', (req, res) => {
//     newNote
//         .removeNote(req.params.id)
//         .then(() => res.json({ ok: true }))
//         .catch(err => res.status(500).json(err))
// })




module.exports = router;

