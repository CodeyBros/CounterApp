const count = document.querySelector('#count');
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const reset = document.querySelector('#reset');

// Actions
add.addEventListener('click', () => {
    count.innerHTML++;
    pickColor();
});
sub.addEventListener('click', () => {
    count.innerHTML--;
    pickColor();
});
reset.addEventListener('click', () => {
    count.innerHTML = 0;
    pickColor();
});


// Color Application
function pickColor() {
    if(count.innerHTML > 0) {
        count.style.color = 'green';
    }
    else if(count.innerHTML < 0) {
        count.style.color = 'red';
    }
    else {
        count.style.color = 'black';
    }
};
