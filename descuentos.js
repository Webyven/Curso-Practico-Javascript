function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajeConDescuento / 100;

    return precioConDescuento;
}

function calculatePrice(){
    const price = parseInt(document.getElementById("input-price").value);
    const disc = parseInt(document.getElementById("input-discount").value);

    const result = calcularPrecioConDescuento(price, disc);

    const stringRes = "El precio con descuento son $" + result; 
    
    if(stringRes.includes("$NaN")){
        document.getElementById("result-price").innerText = "";
    }
    else{
        document.getElementById("result-price").innerText = stringRes;
    }
}

