/*API DÓLAR*/

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

    fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(datos=>datos.json())
    .then(
        datos => {
            const HTMLResponse = document.querySelector("#cotDolar");
            HTMLResponse.dataset.cotizacion = datos[0]['casa']['venta'];
            HTMLResponse.innerHTML = '$ ' + datos[0]['casa']['venta'];
        }
    )
