const fs = require('fs');
const path = require('path');

// create array of notes and save using fs 
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
};


// checks for string in title and text, need both to be strings
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string'){
        return false;
    }
    return true;
}

// export functions in this file
module.exports = {
    createNewNote,
    validateNote
}