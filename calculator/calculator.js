function appendToOutput(value) {
    document.getElementById('output').innerText += value;
}

function calculate() {
    const expression = document.getElementById('output').innerText;
    try {
        const result = eval(expression);
        document.getElementById('output').innerText = result;
    } catch (error) {
        alert('Invalid expression');
    }
}

function clearOutput() {
    document.getElementById('output').innerText = '';
}