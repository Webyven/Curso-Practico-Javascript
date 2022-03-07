function calcularPromedio(lista){
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce(
        function(suma = 0, elemento){
            return suma += elemento;
        }
    )

    return sumaLista/lista.length;
}