const { remote } = require('electron')
const main = remote.require('./main')

let viajes = []
let estadoEditar = false;
let resultID = ""


//Datos para modificar
const ModiDia = document.getElementById('Modidia')
const ModiMes = document.getElementById('ModiMes')
const ModiYear = document.getElementById('ModiYear')
const ModiGraficos = document.getElementById('ModiGraficos')
const ModiCarrete = document.getElementById('ModiCarrete')
const ModiCantidad = document.getElementById('ModiCantidad')
const ModiPrecio = document.getElementById('ModiPrecio_Pieza')
const ModiPies = document.getElementById('ModiPies_Pieza')
const ModiPiesTotales = document.getElementById('ModipiesTotales')
const ModiDineroTotal = document.getElementById('ModidineroTotal')
const ModiDineroTotalIva = document.getElementById('ModidineroTotalIva')
const form_Editar = document.getElementById('form_Editar');


const viajesList = document.getElementById('contenido');

function limitarCaracteres() {
    var input = document.getElementById("ModiYear");
    var maxLength = 4; // Límite de caracteres permitidos
  
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength); // Truncar el valor si excede el límite
    }
  }


form_Editar.addEventListener('submit',async (e) => {
    e.preventDefault();
    if(ModiDia.value == ""  || ModiMes.value == "" || ModiYear.value == "" ||
    ModiGraficos.value == "" || ModiCarrete == "" || ModiCantidad.value == "" ||
    ModiPrecio.value == "" || ModiPies.value == "" || ModiPiesTotales == "" ||
    ModiDineroTotal == "" || ModiDineroTotalIva == "")
    {
        main.datosVacios();
    }else{

    const editResult = {
        Dia: ModiDia.value,
        Mes: ModiMes.value,
        Year: ModiYear.value,
        Graficos_Carrete: ModiGraficos.value,
        Tipo_Carrete: ModiCarrete.value,
        Cantidad: ModiCantidad.value,
        Precio_por_pieza: ModiPrecio.value,
        Pies_por_pieza: ModiPies.value,
        Dinero_total: ModiDineroTotal.value,
        Dinero_total_iva: ModiDineroTotalIva.value,
        Pies_total: ModiPiesTotales.value
    }

    if(estadoEditar){
        await main.edicionDelRegistro(resultID, editResult)
        form_Editar.reset();
        ModiDia.focus();
        location.reload();
    }
}
})


function renderRegistros(viajes){
    viajesList.innerHTML=`
        <tr>
            <th>Día</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Gráficos carrete</th>
            <th>Tipo carrete</th>
            <th>Cantidad</th>
            <th>Precio por pieza</th>
            <th>Pies por pieza</th>
            <th>Dinero total del viaje</th>
            <th>Dinero total del viaje más IVA</th>
            <th>Pies totales del viaje</th>
            <th colspan = 2>Privilegios</th>
        </tr>`;
    viajes.forEach(viaje => {
        viajesList.innerHTML +=`
           
    <tr>
        <td>
            ${viaje.Dia}
        </td>
        <td>
            ${viaje.Mes}
        </td>
        <td>
            ${viaje.Year}
        </td>        
        <td>
            ${viaje.Graficos_Carrete}
        </td>
        <td>
            ${viaje.Tipo_Carrete}
        </td>
        <td>
            ${viaje.Cantidad}
        </td>
        <td>
            ${viaje.Precio_por_pieza}
        </td>
        <td>
            ${viaje.Pies_por_pieza}
        </td>
        <td>
            ${viaje.Dinero_total}
        </td>
        <td>
            ${viaje.Dinero_total_iva}
        </td>
        <td>
            ${viaje.Pies_total}
        </td>
        <td>
            <button class='btn del' onclick="deleteRegistro('${viaje.ID}')">
                Eliminar
            </button>
        </td>
        <td>
            <button class='btn edit' onclick="editarRegistro('${viaje.ID}')">
                Editar
            </button>
        </td>
    </tr>
        `;
    })
}

async function editarRegistro(ID){
   const result = await main.getRegistroPorId(ID)

   ModiDia.value = result.Dia;
   ModiMes.value = result.Mes;
   ModiYear.value = result.Year;
   ModiGraficos.value = result.Graficos_Carrete;
   ModiCarrete.value = result.Tipo_Carrete;
   ModiCantidad.value = result.Cantidad;
   ModiPrecio.value = result.Precio_por_pieza;
   ModiPies.value = result.Pies_por_pieza;
   ModiDineroTotal.value = result.Dinero_total;
   ModiDineroTotalIva.value = result.Dinero_total_iva;
   ModiPiesTotales.value = result.Pies_total;
   
   estadoEditar = true;
   resultID = result.ID
}


async function deleteRegistro(ID){
    const respuesta = confirm("¿Estas seguro de eliminar este registro?")

    if(respuesta){
        await  main.deleteRegistro(ID)
        await obtenerProductos();
    }
    return;
}

const obtenerProductos = async () => {
    viajes = await main.obtenerProductos()
    renderRegistros(viajes)

}

async function init() {
    await obtenerProductos();
}


//Codigo para recalcular
function recalcular() {


    var RpiesT;
    var RdineroT;
    var RdineroTIva;
    var IVA;
    var ModiCantidad = document.getElementById('ModiCantidad').value;
    var ModiPrecio_Pieza = document.getElementById('ModiPrecio_Pieza').value;
    var ModiPies_Pieza = document.getElementById('ModiPies_Pieza').value;

    RpiesT = parseInt(ModiCantidad) * parseFloat(ModiPies_Pieza);
    RdineroT = parseInt(ModiCantidad) * parseFloat(ModiPrecio_Pieza);
    IVA = parseInt(ModiCantidad) * parseFloat(ModiPrecio_Pieza) * 0.16;
    RdineroTIva = parseInt(ModiCantidad) * parseFloat(ModiPrecio_Pieza) + IVA;

    if( ModiCantidad == "" || ModiPies_Pieza == "" || ModiPrecio_Pieza == ""){
        document.getElementById('ModiCantidad').style.Color = 'red';
        document.getElementById('ModiPies_Pieza').style.Color = 'red';
        document.getElementById('ModipiesTotales').value = 'Faltan Valores por ingresar';
    }else{
        document.getElementById('ModipiesTotales').value =  RpiesT.toFixed(1);
        document.getElementById('ModidineroTotal').value = "$"+ RdineroT.toFixed(2);
        document.getElementById('ModidineroTotalIva').value = "$"+ RdineroTIva.toFixed(2);
    }
}
//Fin de codigo de recalcular


init();

