(function () {
    const boxList = document.getElementsByClassName('slider__container')[0];
    const boxChild = boxList.children;
    const length = boxChild.length;
    const prev = document.getElementsByClassName('prev')[0];
    const next = document.getElementsByClassName('next')[0];
    let num = 1;

    const elem = document.querySelector('.slider');
    let width = parseFloat(window.getComputedStyle(elem).getPropertyValue('width'));
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function setSliderWidth() {
        width = parseFloat(window.getComputedStyle(elem).getPropertyValue('width'));
        if (mediaQuery.matches) {
            width *= 2;
        }
        for (let i = 0; i < length; i++) {
            boxChild[i].style.width = width / 2 + 'px';
        }
        boxList.style.transition = '0s';
        boxList.style.left = (num * -width) / 2 + 'px';
    }
    window.addEventListener('load', setSliderWidth);
    window.addEventListener('resize', setSliderWidth);

    next.onmousedown = function () {
        if (num === length - 2) {
            boxList.style.transition = '0s';
            num = 0;
            boxList.style.left = (num * -width) / 2 + 'px';
        }
    };
    next.onmouseup = function () {
        num++;
        boxList.style.left = (num * -width) / 2 + 'px';
        boxList.style.transition = '0.5s';
    };

    prev.onmousedown = function () {
        if (num === 0) {
            boxList.style.transition = '0s';
            num = length - 2;
            boxList.style.left = (num * -width) / 2 + 'px';
        }
    };
    prev.onmouseup = function () {
        num--;
        boxList.style.left = (num * -width) / 2 + 'px';
        boxList.style.transition = '0.5s';
    };
})();