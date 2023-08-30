/*CALCULO DE LOS IMPUESTOS*/

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


/** RESETEAR INPUT */

function resetInput(){
    var getValue= document.getElementById("dolares");
      if (getValue.value != ""){
        getValue.value = "1";
      }
}
    
