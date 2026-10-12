let input = document.getElementById('calc-input')
let calc_input = "";
let result = "";

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
    'Delete',
    'ArrowRight',
    'ArrowLeft'
];

console.log('Script loaded, found', buttons.length, 'buttons')

function scrollInputToCaret() {
    input.scrollLeft = input.scrollWidth;
}

function calculate(calc_input) {
    return ""
}

let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.id == 'result-button') {
            result = calculate(calc_input)
            input.value = result
            calc_input = ""
            input.focus();
            scrollInputToCaret()
        }
        else if (e.currentTarget.id == 'backspace-button') {
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start-1) + calc_input.slice(start)
            input.value = calc_input
            input.focus(); 
            input.setSelectionRange(start-1, start-1)
            scrollInputToCaret()
        }
        else if (e.currentTarget.id == 'ac-button') {
            calc_input = ""
            input.value = calc_input
            input.focus();
            scrollInputToCaret()
        }
        else if (e.currentTarget.id == 'divide-button') {
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + "/" + calc_input.slice(start)
            input.value = calc_input
            input.focus();
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        }
        else if (e.currentTarget.id == 'multiply-button') {
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + "*" + calc_input.slice(start)
            input.value = calc_input
            input.focus();
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        }
        else if (e.currentTarget.id == 'exponent-button') {
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + "^" + calc_input.slice(start)
            input.value = calc_input
            input.focus(); 
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        }
        else {
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + e.currentTarget.textContent.trim() + calc_input.slice(start)
            input.value = calc_input
            input.focus(); 
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        }
    })
})

input.addEventListener('keydown', (e) => {
    e.preventDefault()
    if (!allowedKeys.includes(e.key)) {
        return;
    } else {
        if (e.key == 'Backspace') {
            e.preventDefault()
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start-1) + calc_input.slice(start)
            input.value = calc_input
            input.focus();
            input.setSelectionRange(start-1, start-1)
            scrollInputToCaret()
        }
        else if (e.key == '=' || e.key == 'Enter') {
            e.preventDefault()
            result = calculate(calc_input)
            input.value = result
            calc_input = ""
            input.focus();
            scrollInputToCaret()
        } else if (e.key == 'Escape' || e.key == 'Delete') {
            e.preventDefault()
            calc_input = ""
            input.value = calc_input
            input.focus();
            scrollInputToCaret()
        } else if ( e.key == 'x' ) {
            e.preventDefault()
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + "*" + calc_input.slice(start)
            input.value = calc_input
            input.focus();
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        } else if (e.key == 'ArrowRight') {
            e.preventDefault()
            const currentPos = input.selectionStart;
            input.setSelectionRange(currentPos+1, currentPos+1)
            scrollInputToCaret()
        } else if (e.key == 'ArrowLeft') {
            e.preventDefault()
            const currentPos = input.selectionStart;
            input.setSelectionRange(currentPos-1, currentPos-1)
            scrollInputToCaret()
        } 
        else {
            e.preventDefault()
            const start = input.selectionStart;
            calc_input = calc_input.slice(0, start) + e.key + calc_input.slice(start)
            input.value = calc_input
            input.focus();
            input.setSelectionRange(start+1, start+1)
            scrollInputToCaret()
        }
    }
})