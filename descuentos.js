function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = precio * porcentajeConDescuento / 100;

    return precioConDescuento;
}

function calculatePrice(){
    const price = parseInt(document.getElementById("input-price").value);
    const disc = parseInt(document.getElementById("input-discount").value);

    const result = calcularPrecioConDescuento(price, disc);

    document.getElementById("result-price").innerText = "El precio con descuento son $" + result;    
}

