const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command : 'add',
    describe : 'Command line input add',
    handler : () => {
            console.log('add a new note');
        }
})

yargs.command({
    command : 'remove',
    describe : 'Command line input remove',
    handler : () => {
            console.log('remove a new note');
        }
})

console.log(yargs.argv)