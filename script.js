let display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else if (num === '.' && display.value.includes('.')) {
        return;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    if (display.value === '') return;
    if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value === '0') return;
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = Math.round(result * 100000000) / 100000000;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}

// Initialize display
display.value = '0';