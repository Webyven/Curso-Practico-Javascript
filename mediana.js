const list = [500,100,300,200];
list.sort((a, b) => a - b);

const mitadLista = parseInt(list.length / 2);

function esPar(num){
    return (num % 2 === 0);
}

let res = 0;

if(esPar(list.length)){
    res = list[(list.length / 2)] + list[((list.length / 2) - 1)];
    res /= 2;
}
else{
    res = list[mitadLista];
}

console.log(res);