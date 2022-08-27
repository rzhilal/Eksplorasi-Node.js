const yargs = require('yargs')
const notes = require('./lesson6')

yargs.version('1.1.0')

yargs.command({
    command : 'add',
    describe : 'Command line input add',
    bulder:{
        title : {
            describe : 'Add a new note',
            demandOption : true,
            type: 'string'
        },
        body : {
            describe : 'Add title',
            demandOption : true,
            type: 'string'
        }
    },
    
    handler : (argv) => {
            const note = notes.addNotes('notes.json', argv.title, argv.body)
        }
})

yargs.command({
    command : 'remove',
    describe : 'Command line input add',
    bulder:{
        title : {
            describe : 'Deleted note title',
            demandOption : true,
            type: 'string'
        }
    },
    
    handler : (argv) => {
            const _note = notes.removeNotes('notes.json', argv.title)
        }
})

yargs.command({
    command : 'list',
    describe : 'Listing out list',
    handler : () =>{
       const _note = notes.listNotes('notes.json')
    }
})

console.log(yargs.argv)