let input = document.getElementById('calc-input')
let calc_input = "";
let result = "";

let buttons = document.querySelectorAll('button')

const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '%', '^',
    '(', ')',
    '.',
    'Backspace',
    'Enter',
    '=',
    'Escape'
];

console.log('Script loaded, found', buttons.length, 'buttons')

function calculate(calc_input) {
    return ""
}

// Todo: Make it so that even while typing with buttons, the cursor automatically moves into the input box
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.id == 'result-button') {
            result = calculate(calc_input)
            input.value = result
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
        else {
            calc_input += e.currentTarget.textContent.trim()
            input.value = calc_input
        }
    })
})

input.addEventListener('keydown', (e) => {
    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
        return;
    } else {
        if (e.key == 'Backspace') {
            e.preventDefault()
            // This only deletes last character. Todo: Add cursor based deletion
            calc_input = calc_input.substring(0, calc_input.length - 1)
            input.value = calc_input
            return;
        }
        // else if (e.key == '')
    }
})
