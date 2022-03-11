const router = require('express').Router();
const { validateNote, createNewNote } = require('../lib/notes');
const notes = require('../db/db.json');


// GET route
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// POST route
router.post('/notes', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;