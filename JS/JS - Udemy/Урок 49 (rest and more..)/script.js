const log = function(a, b, ...arg) { //! rest - всегда пишеться в конце
    console.log(a, b, arg)
}

log(1, 2, 3, 4, 5, 6);

function calcOrDouble(number, basis = 2) {

    console.log(number * basis);
}

calcOrDouble(5);