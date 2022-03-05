// Código del cuadrao
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
}

function areaTriangulo(base, altura){
    return base * altura / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return radio * radio * Math.PI;
}

console.groupEnd();
