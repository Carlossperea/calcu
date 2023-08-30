function calculosImp() {
    let cotDolarScrap = document.getElementById('cotDolar').dataset.cotizacion;
    let cotDolar = cotDolarScrap.replace(/,/g, '.');
    const impPais = 30;
    const impGanancias = 45; 
    let dolares = document.getElementById("dolares").value;
    let valorDolar = dolares * cotDolar;
    let valorPais = valorDolar * (impPais / 100);
    let valorGanancias = valorDolar * (impGanancias / 100);
    let valorTotal = valorDolar + valorPais + valorGanancias;
    document.getElementById("valorDolar").innerHTML = '$ ' + (valorDolar.toFixed(2));
    document.getElementById("valorPais").innerHTML = '$ ' + (valorPais.toFixed(2));
    document.getElementById("valorGanancias").innerHTML = '$ ' + (valorGanancias.toFixed(2));
    document.getElementById("valorTotal").innerHTML = '$ ' + (valorTotal.toFixed(2));
}

/* CALCULAR CON ENTER */

const visitanteApretoEnter = (event) =>
{
    if(event.keyCode == 13)
        calculosImp();
}


/*API DÓLAR SI*/

/*PRECIO DÓLAR BLUE (VENTA)*/

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(datos=>datos.json())
    .then(
        datos => {
            const HTMLResponse = document.querySelector("#cotDolarV");
            HTMLResponse.dataset.cotizacion = datos[1]['casa']['venta'];
            HTMLResponse.innerHTML = '$ ' + datos[1]['casa']['venta'];
        }
    )

    /*PRECIO DÓLAR BLUE (COMPRA)*/

    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(datos=>datos.json())
    .then(
        datos => {
            const HTMLResponse = document.querySelector("#cotDolarC");
            HTMLResponse.dataset.cotizacion = datos[1]['casa']['compra'];
            HTMLResponse.innerHTML = '$ ' + datos[1]['casa']['compra'];
        }
    )

    /*PRECIO DÓLAR OFICIAL (VENTA)*/

    fetch("https://dolarapi.com/v1/dolares/oficial")
  .then(response => response.json())
  .then(data => console.log(data));
        }
    )
