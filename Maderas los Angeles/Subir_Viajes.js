const formularioViajes = document.getElementById('formularioViajes')

const { remote } = require('electron')
const main = remote.require('./main')


const datoDia = document.getElementById('dia');
const datoMes = document.getElementById('Mes');
const datoYear = document.getElementById('Year');
const datoGraficos = document.getElementById('Graficos')
const datoCarrete = document.getElementById('Carrete')
const datoCantidad = document.getElementById('Cantidad')
const datoPrecio = document.getElementById('Precio_Pieza')
const datoPies = document.getElementById('Pies_Pieza')
const datoPiesTotales = document.getElementById('piesTotales')
const datoDineroTotal = document.getElementById('dineroTotal')
const datoDineroTotalIva = document.getElementById('dineroTotalIva')

function limitarCaracteres() {
    var input = document.getElementById("Year");
    var maxLength = 4; // Límite de caracteres permitidos
  
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength); // Truncar el valor si excede el límite
    }
  }

 

formularioViajes.addEventListener('submit',async (e) => {
    e.preventDefault();

    if(datoDia.value == ""  || datoMes.value == "" || datoYear.value == "" ||
    datoGraficos.value == "" || datoCarrete == "" || datoCantidad.value == "" ||
    datoPrecio.value == "" || datoPies.value == "" || datoPiesTotales == "" ||
    datoDineroTotal == "" || datoDineroTotalIva == "")
    {
        main.datosVacios();
    }else{
        const newViaje = {
            Dia: datoDia.value,
            Mes: datoMes.value,
            Year: datoYear.value,
            Graficos_Carrete: datoGraficos.value,
            Tipo_Carrete: datoCarrete.value,
            Cantidad: datoCantidad.value,
            Precio_por_pieza: datoPrecio.value,
            Pies_por_pieza: datoPies.value,
            Dinero_total: datoDineroTotal.value,
            Dinero_total_iva: datoDineroTotalIva.value,
            Pies_total: datoPiesTotales.value
        }
    
        const result = await main.crearViaje(newViaje);
        console.log(result);
    
        formularioViajes.reset();
        datoDia.focus();
    }
})

//Funcion para que calcule datos
const calcular = ((e) => {

    var RpiesT;
    var RdineroT;
    var RdineroTIva;
    var IVA;
    var Cantidad = document.getElementById('Cantidad').value;
    var Precio_Pieza = document.getElementById('Precio_Pieza').value;
    var Pies_Pieza = document.getElementById('Pies_Pieza').value;

    RpiesT = parseInt(Cantidad) * parseFloat(Pies_Pieza);
    RdineroT = parseInt(Cantidad) * parseFloat(Precio_Pieza);
    IVA = parseInt(Cantidad) * parseFloat(Precio_Pieza) * 0.16;
    RdineroTIva = parseInt(Cantidad) * parseFloat(Precio_Pieza) + IVA;

    if( Cantidad == "" || Pies_Pieza == "" || Precio_Pieza == ""){
        document.getElementById('Cantidad').style.Color = 'red';
        document.getElementById('Pies_Pieza').style.Color = 'red';
        document.getElementById('piesTotales').value = 'Faltan Valores por ingresar';
    }else{
        document.getElementById('piesTotales').value =  RpiesT.toFixed(1);
        document.getElementById('dineroTotal').value = "$"+ RdineroT.toFixed(2);
        document.getElementById('dineroTotalIva').value = "$"+ RdineroTIva.toFixed(2);
 
    }
})
