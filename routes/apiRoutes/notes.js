const router = require("express").Router();

//json to hold the notes
const {
    notes
} = require('../../Develop/db/db.json');

//this doesn't seem to be working to create a new note/delete a note
const req = require("express/lib/request");
const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunction.js');

router.post('./notes', (req, res) =>{
    let saved = notes;
    res.json(saved);
});

router.post ('./notes', (req, res) => {
    req.body.id = notes.length.toString();
    let  note = createNewNote(req.body, notes);
});

router.delete('./notes', (req, res) => {
    deleteNote(notes, req.params.id)
    res.delete(notes);
}); 

module.exports = router;

