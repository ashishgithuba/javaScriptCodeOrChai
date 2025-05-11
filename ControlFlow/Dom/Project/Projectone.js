const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const color = event.target.id;
        body.style.backgroundColor = color;
    });
});
