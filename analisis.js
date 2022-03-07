const salarios = colombia.map(p => p.salary);

salarios.sort((a, b) => a - b);

function esPar(num){
    return num % 2 === 0;
}

function calcularMedianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if(esPar(lista.length)){
        return ((lista[mitad] + lista[mitad - 1]) / 2);
    }
    else{
        return lista[mitad];
    }
}

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(suma = 0, elemento){
            return suma += elemento;
        }
    )

    return sumaLista/lista.length;
}


const salariosTopTen = salarios.splice(salarios.length * 90 / 100);

console.log(calcularMedianaSalarios(salarios));
console.log(calcularMedianaSalarios(salariosTopTen));
