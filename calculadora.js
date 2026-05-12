// criar uma função que soma dois números inteiros positivos
function somar(a, b) {
    if (a < 0 || b < 0) {
        return "Os números devem ser inteiros positivos.";
    }
    return a + b;
}

// criar uma função que subtrai dois números inteiros positivos
function subtrair(a, b) {
    if (a < 0 || b < 0) {
        return "Os números devem ser inteiros positivos.";
    }
    return a - b;
}

// criar uma função que multiplica dois números inteiros positivos
function multiplicar(a, b) {
    if (a < 0 || b < 0) {
        return "Os números devem ser inteiros positivos.";
    }
    return a * b;
}

// criar uma função que divide dois números inteiros positivos
function dividir(a, b) {
    if (a < 0 || b < 0) {
        return "Os números devem ser inteiros positivos.";
    }
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    return a / b;
}