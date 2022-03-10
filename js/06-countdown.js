let again = 'y'
let startNum = parseInt(prompt('Enter a number to start with'))
do (startNum != 0) {
    num--
    document.write(`${num}<br>`)
    again = prompt('Repeat entries? (y or no)')
} while if (again != 'y' && again != 'no')
