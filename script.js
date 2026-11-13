const message = document.getElementById('message');
const counter = document.getElementById('counter');
const clear = document.getElementById('clear-button');

message.addEventListener('input', () => {
    const counterLength = message.value.length;
    counter.textContent = 'Characters: ' + counterLength;
});

clear.addEventListener('click', () => {
    message.value = '';
    counter.textContent = 'Characters: 0';
});