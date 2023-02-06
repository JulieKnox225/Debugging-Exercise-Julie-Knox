//Problems: 1. item was not declared in the function parameters, 2. was setting all numbers' background to transparent no matter what
function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    spanElements.forEach(function(item) {
        if(item.innerText % 2 === 0) {
            ((item.style.backgroundColor === 'yellow') ? item.style.backgroundColor = 'transparent' : item.style.backgroundColor = 'yellow');
        }
    });
}
    