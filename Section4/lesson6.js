const fs = require('fs')

const getNotes = function (file) {
    const notes = loadNotes (file)
    return notes
}

const addNotes = (file, title, body) => {
    const notes = loadNotes(file)
    const dupeNotes = notes.filter(function (note) {
        note.title !== title
    })

    if (dupeNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes, file)
        console.log('Added new note')
    } else {
        console.log('Note taken')
    }
}

const saveNotes = (notes, file) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(file, dataJSON)
}

const loadNotes = (file) => {
    try {
        const dataBuff = fs.readFileSync(file)
        const dataJSON = dataBuff.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNotes = (notes, title) => {
    const load = loadNotes(notes)
    const filterNotes = load.filter((note) => note.title !== title)
    saveNotes(filterNotes, notes)
}

const listNotes = (file)=> {
    const notes = loadNotes(file)
    notes.forEach((note) => {
        console.log("Title : " + note.title + "  |   Body : " + note.body)
    });
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes
}