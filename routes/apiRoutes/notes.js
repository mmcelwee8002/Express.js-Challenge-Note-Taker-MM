const router = require("express").Router();


const {
    notes
} = require('../../Develop/db/db.json');

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

