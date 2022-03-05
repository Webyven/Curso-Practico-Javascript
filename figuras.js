// Código del cuadrao

function calcularCuadrado(){
    const input = document.getElementById("square-input");
    const value = input.value;

    alert("El perímetro del cuadrado es de " + perimetroCuadrado(value) + "cm");
    alert("El área del cuadrado es de " + areaCuadrado(value) + "cm^2");
}

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

// Código del triángulo

function calcularTriangulo(){
    const inputOne = parseInt(document.getElementById("triangle-first-input").value);
    const inputTwo = parseInt(document.getElementById("triangle-second-input").value);
    const inputBase = parseInt(document.getElementById("triangle-base-input").value);
    const inputHeight = parseInt(document.getElementById("triangle-height-input").value);

    alert("El perímetro del triangulo es de " + perimetroTriangulo(inputOne,inputTwo, inputBase) + "cm");
    alert("El área del triangulo es de " + areaTriangulo(inputBase, inputHeight) + "cm^2");
}

function calcularAlturaIsosceles(){
    const inputOne = parseInt(document.getElementById("triangle-first-input").value);
    const inputTwo = parseInt(document.getElementById("triangle-second-input").value);
    const inputBase = parseInt(document.getElementById("triangle-base-input").value);

    if(inputOne == inputTwo && inputOne != inputBase){
        document.getElementById('triangle-height-input').value = Math.sqrt(inputOne**2 - (inputBase**2)/4);
    }
    else
        alert("Las medidas no corresponden a un triángulo isósceles.");
}

function perimetroTriangulo(ladoUno, ladoDos, base){
    return (ladoUno + ladoDos + base);
}

function areaTriangulo(base, altura){
    return base * altura / 2;
}

// Código del círculo

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return radio * radio * Math.PI;
}

function calcularCirculo(){
    const input = document.getElementById("circle-input").value;

    alert("El perímetro del círculo es de " + perimetroCirculo(input) + "cm");
    alert("El área del círculo es de " + areaCirculo(input) + "cm^2");
}
