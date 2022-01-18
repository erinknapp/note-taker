const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');

const  db = require('../../data/db');

//GET function to return notes in json to the browser
//If there is no server error, display a 404 warning
router.get('/notes', (req, res) => {

    let result = db;

    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }

});

// POST function to save new notes
router.post('/notes', (req, res) => {

    const newNote = createNewNote(req.body, db);
    res.json(newNote);

});

// DELETE function to delete notes
router.delete('/notes/:id', (req, res) => { 

    // Uses the object's id to refer to that object
    const { id } = req.params;//break request object into id

    // Function to iterate through the database using the note's id
    const noteIndex = db.findIndex(p => p.id == id);
    
    // Splice function to remove the note from saved notes
    db.splice(noteIndex, 1);

    return res.send();

});

module.exports = router;