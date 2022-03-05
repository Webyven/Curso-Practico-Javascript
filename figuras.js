// Código del cuadrao
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();

// Código del triángulo
console.group("Triángulos")
const ladoUno = 6;
const ladoDos = 6;
const base = 4;
const altura = 5.5;
console.log(
    "Los lados del triángulo miden: " + ladoUno + "cm, " 
    + ladoDos + "cm, " + base + "cm, " + altura + "cm"
    );

const perimetroTriangulo = ladoUno + ladoDos + base;
console.log("El perímetro del triángulo es de " + perimetroTriangulo + "cm");

const areaTriangulo = base * altura / 2;
console.log("La base del triángulo es de " + areaTriangulo + "cm");

console.groupEnd();

// Código del círculo
console.group("Círculos");
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log("El radio es de " + radio + "cm, PI tiene un valor de " + PI);

const perimetroCirculo = PI * diametro;
console.log("El perímetro del círculo es de " + perimetroCirculo + "cm");

const areaCirculo = radio * radio * PI;
console.log("El área del círculo es de " + areaCirculo + "cm");
