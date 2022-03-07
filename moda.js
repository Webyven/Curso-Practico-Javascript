const input = [1, 2, 2, 3, 1, 1, 1, 1, 2, 3, 3, 2, 1, 3];

calcularModa(input);

function calcularModa(list){
    const listCount = {};

    list.map(
        function(a){
            if(listCount[a]){
                listCount[a]++;
            }
            else
                listCount[a] = 1;
        }
    );
    
    const array = Object.entries(listCount).sort((a,b) => b[1] - a[1]);
    
    console.log("La moda es " + array[0][0]);
}

