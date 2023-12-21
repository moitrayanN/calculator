let tarea = document.getElementById('tarea');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let decimal = document.getElementById('decimal');
let percent = document.getElementById('percent');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let into = document.getElementById('into');
let by = document.getElementById('by');
let power = document.getElementById('power');
let openbrac = document.getElementById('openbrac');
let closebrac = document.getElementById('closebrac');
let mod = document.getElementById('mod');
let abs = document.getElementById('abs');
let bkspc = document.getElementById('bkspc');
let e = document.getElementById('e');
let pi = document.getElementById('pi');
let fact = document.getElementById('fact');
let space = document.getElementById('space');
let square = document.getElementById('square');
let eqn = ''

clear.onclick = function () {
    location.href = "index.html";
}

zero.onclick = function () {
    eqn = tarea.value;
    eqn += '0';
    tarea.value = eqn;
}

one.onclick = function () {
    eqn = tarea.value;
    eqn += '1';
    tarea.value = eqn;
}

two.onclick = function () {
    eqn = tarea.value;
    eqn += '2';
    tarea.value = eqn;
}

three.onclick = function () {
    eqn = tarea.value;
    eqn += '3';
    tarea.value = eqn;
}

four.onclick = function () {
    eqn = tarea.value;
    eqn += '4';
    tarea.value = eqn;
}

five.onclick = function () {
    eqn = tarea.value;
    eqn += '5';
    tarea.value = eqn;
}

six.onclick = function () {
    eqn = tarea.value;
    eqn += '6';
    tarea.value = eqn;
}

seven.onclick = function () {
    eqn = tarea.value;
    eqn += '7';
    tarea.value = eqn;
}

eight.onclick = function () {
    eqn = tarea.value;
    eqn += '8';
    tarea.value = eqn;
}

nine.onclick = function () {
    eqn = tarea.value;
    eqn += '9';
    tarea.value = eqn;
}

decimal.onclick = function () {
    eqn = tarea.value;
    eqn += '.';
    tarea.value = eqn;
}

percent.onclick = function () {
    eqn = tarea.value;
    eqn += '/100';
    tarea.value = eqn;
}

plus.onclick = function () {
    eqn = tarea.value;
    eqn += '+';
    tarea.value = eqn;
}

minus.onclick = function () {
    eqn = tarea.value;
    eqn += '-';
    tarea.value = eqn;
}

into.onclick = function () {
    eqn = tarea.value;
    eqn += '*';
    tarea.value = eqn;
}

by.onclick = function () {
    eqn = tarea.value;
    eqn += '/';
    tarea.value = eqn;
}

power.onclick = function () {
    eqn = tarea.value;
    eqn += '**';
    tarea.value = eqn;
}

openbrac.onclick = function () {
    eqn = tarea.value;
    eqn += '(';
    tarea.value = eqn;
}

closebrac.onclick = function () {
    eqn = tarea.value;
    eqn += ')';
    tarea.value = eqn;
}

mod.onclick = function () {
    eqn = tarea.value;
    eqn += '%';
    tarea.value = eqn;
}

abs.onclick = function () {
    eqn = tarea.value;
    eqn += 'abs(';
    tarea.value = eqn;
}

bkspc.onclick = function () {
    eqn = tarea.value;
    tarea.value = eqn.slice(0, eqn.length - 1);
}

e.onclick = function () {
    eqn = tarea.value;
    eqn += '2.7182818284590452353602874713527';
    tarea.value = eqn;
}

pi.onclick = function () {
    eqn = tarea.value;
    eqn += '3.1415926535897932384626433832795';
    tarea.value = eqn;
}

fact.onclick = function () {
    eqn = tarea.value;
    eqn += '!';
    tarea.value = eqn;
}

space.onclick = function () {
    eqn = tarea.value;
    eqn += ' ';
    tarea.value = eqn;
}

square.onclick = function () {
    eqn = tarea.value;
    eqn += '**2';
    tarea.value = eqn;
}

exp.onclick = function () {
    eqn = tarea.value;
    eqn += '2.7182818284590452353602874713527**';
    tarea.value = eqn;
}

equal.onclick = function () {
    eqn = tarea.value;
    let result = '';

    if (eqn.includes('abs')) {
        let no = eqn.slice(eqn.lastIndexOf('(') + 1, eqn.indexOf(')'));
        result = (no[0] == '-') ? (no.slice(1)) : no;
    }

    else if (eqn.includes('!')) {
        let no = eqn.slice(0, eqn.indexOf('!'));
        let num = Number.parseInt(no);
        let res = 1;
        for (let i = 1; i <= num; i++) {
            res *= i;
        }
        result = res.toString();
    }

    else if (eqn[0] == '0') {
        while (eqn[0] == '0') {
            eqn = eqn.slice(1);
        }
        result = eval(eqn);
    }

    else {
        result = eval(eqn);
    }

    tarea.value = result;
}