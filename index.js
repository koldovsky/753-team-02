const boxList = document.getElementsByClassName('slider__container')[0];
const boxChild = boxList.children;
const lengh = boxChild.length;
const prevs = document.getElementsByClassName('prev')[0];
const nexts = document.getElementsByClassName('next')[0];
let num = 1;

const elem = document.querySelector('.slider');
let width = parseFloat(window.getComputedStyle(elem).getPropertyValue('width'));
const mediaQuery = window.matchMedia('(max-width: 768px)');

function onWindowResize() {
    width = parseFloat(window.getComputedStyle(elem).getPropertyValue('width'));
    if (mediaQuery.matches) {
        width *= 2;
    }
    boxList.style.transition = '0s';
    boxList.style.left = (num * -width) / 2 + 'px';
}

window.addEventListener('resize', onWindowResize);

nexts.onmousedown = function () {
    if (num === lengh - 2) {
        boxList.style.transition = '0s';
        num = 0;
        boxList.style.left = (num * -width) / 2 + 'px';
    }
};
nexts.onmouseup = function () {
    num++;
    boxList.style.left = (num * -width) / 2 + 'px';
    boxList.style.transition = '0.5s';
};

prevs.onmousedown = function () {
    if (num === 0) {
        boxList.style.transition = '0s';
        num = lengh - 2;
        boxList.style.left = (num * -width) / 2 + 'px';
    }
};
prevs.onmouseup = function () {
    num--;
    boxList.style.left = (num * -width) / 2 + 'px';
    boxList.style.transition = '0.5s';
};
