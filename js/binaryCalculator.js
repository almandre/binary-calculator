let operator = '';

const display = document.getElementById('res');
const isOperator = c => c === '+' || c === '-' || c === '*' || c === '/';

function append(e) {
    const { id } = e.target || e.srcElement;
    const value = document.getElementById(id).innerHTML;

    if (!isOperator(value)) {
        const input = display.innerHTML;

        if (input.length === 1 && isOperator(input[0])) {
            display.innerHTML = value;
            operator = '';
        } else {
            display.innerHTML += value;   
        }

        return;
    }

    if (!operator) {
        display.innerHTML += value;
        operator = value;
    } else {
        const input = display.innerHTML;
        const last = input.slice(input.length - 1);

        if (isOperator(last)) {
            display.innerHTML = input.slice(0, input.length - 1) + value;
            operator = value;
        }
    }
}

function reset() {
    display.innerText = '';
    operator = '';
}

function calc() {
    if (operator) {
        const input = display.innerHTML;
        const last = input.slice(input.length - 1);

        if (!isOperator(last)) {
            const [a, b] = input.split(operator);
            const sequence = parseInt(a, 2) + operator + parseInt(b, 2);
            const result = eval(sequence);

            display.innerHTML = Math.floor(result).toString(2);
            operator = '';
        }
    }
}
