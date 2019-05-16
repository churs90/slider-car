var img = document.getElementsByTagName('img');
var span = document.getElementsByTagName('span')[3];
var krug = document.getElementsByClassName('krug');
var number = 1;
function one() {
    number = 0;
        img[1].style.opacity = '0';
        krug[1].style.backgroundColor = 'white';
        img[2].style.opacity = '0';
        krug[2].style.backgroundColor = 'white';
        img[0].style.opacity = '1';
        krug[0].style.backgroundColor = 'blue';
    span.innerHTML = 'значение переменной равно: ' + number;
}
function two() {
    number = 1;
    img[0].style.opacity = '0';
    krug[0].style.backgroundColor = 'white';
    img[2].style.opacity = '0';
    krug[2].style.backgroundColor = 'white';
    img[1].style.opacity = '1';
    krug[1].style.backgroundColor = 'blue';
    span.innerHTML = 'значение переменной равно: ' + number;
}
function three() {
    number = 2;
    img[1].style.opacity = '0';
    krug[1].style.backgroundColor = 'white';
    img[0].style.opacity = '0';
    krug[0].style.backgroundColor = 'white';
    img[2].style.opacity = '1';
    krug[2].style.backgroundColor = 'blue';
    span.innerHTML = 'значение переменной равно: ' + number;
}

function left() {
    number--;
    if (number < 0) {
        number = img.length - 1;
    }
    if (number > img.length-1) {
        number = 0;
    }
    for(var i = 0; i < img.length; i++) {
        if ( i != number) {
            img[i].style.opacity = '0';
            krug[i].style.backgroundColor = 'white';
        }
        else {
            img[i].style.opacity = '1';
            krug[i].style.backgroundColor = 'blue';
        }
    }
    span.innerHTML = 'значение переменной равно: ' + number;
}

function right() {
    number++;
    if (number < 0) {
        number = img.length - 1;
    }
    if (number > img.length-1) {
        number = 0;
    }
    for(var i = 0; i < img.length; i++) {
        if ( i != number) {
            img[i].style.opacity = '0';
            krug[i].style.backgroundColor = 'white';
        }
        else {
            img[i].style.opacity = '1';
            krug[i].style.backgroundColor = 'blue';
        }
    }
    span.innerHTML = 'значение переменной равно: ' + number;
}
left();

