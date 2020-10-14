function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function soma2(c) {
    c = isNaN(c) ? 1 : c
}

function soma3(a = 1, b = 0) {
    //seta valores padrao como entrada
}