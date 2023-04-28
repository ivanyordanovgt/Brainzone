
function substract(a, b) {
    return a-b
}

function add(a, b) {
    return a+b
}

function devide(a, b) {
    return a/b
}

function multiply(a, b) {
    return a*b
}

export default mathOperators = {
    '-': substract,
    '+': add,
    '/': devide,
    '*': multiply,
}