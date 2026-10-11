let input = document.getElementById('calc-input')
let calc_input = "";
let result = "";
const cursor_inputs = document.getElementById('calc-input')

let buttons = document.querySelectorAll('button')

const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', 'x', '/', '%', '^',
    '(', ')',
    '.',
    'Backspace',
    'Enter',
    '=',
    'Escape',
    'Delete'
];

console.log('Script loaded, found', buttons.length, 'buttons')

function calculate(calc_input) {
    return ""
}

// Todo: Make it so that even while typing with buttons, the cursor automatically moves into the input box
// Also make it so on pressing button/typing number get added wherever the cursor is not just at the end.
// Also add auto-scroll to the text box
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.id == 'result-button') {
            result = calculate(calc_input)
            input.value = result
            calc_input = ""
        }
        else if (e.currentTarget.id == 'backspace-button') {
            // This only deletes last character. Todo: Add cursor based deletion
            calc_input = calc_input.substring(0, calc_input.length - 1)
            input.value = calc_input
        }
        else if (e.currentTarget.id == 'ac-button') {
            calc_input = ""
            input.value = calc_input
        }
        else if (e.currentTarget.id == 'divide-button') {
            calc_input += "/"
            input.value = calc_input
        }
        else if (e.currentTarget.id == 'multiply-button') {
            calc_input += "*"
            input.value = calc_input
        }
        else if (e.currentTarget.id == 'exponent-button') {
            calc_input += "^()"
            input.value = calc_input
            // move cursor one unit to left
        }
        else {
            calc_input += e.currentTarget.textContent.trim()
            input.value = calc_input
        }
    })
})

input.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (!allowedKeys.includes(e.key)) {
        return;
    } else {
        if (e.key == 'Backspace') {
            // This only deletes last character. Todo: Add cursor based deletion
            calc_input = calc_input.substring(0, calc_input.length - 1)
            input.value = calc_input
        }
        else if (e.key == '=' || e.key == 'Enter') {
            result = calculate(calc_input)
            input.value = result
            calc_input = ""
        } else if (e.key == 'Escape' || e.key == 'Delete') {
            calc_input = ""
            input.value = calc_input
        } else if ( e.key == 'x' ) {
            calc_input += '*'
            input.value = calc_input
        } else {
            calc_input += e.key
            input.value = calc_input
        }
    }
})

