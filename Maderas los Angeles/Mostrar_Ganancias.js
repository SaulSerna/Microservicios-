const { remote } = require('electron')
const main = remote.require('./main')

const GanarMes = document.getElementById('GanarMes');
const formGanancias = document.getElementById('formGanancias');
const table_ganancias = document.getElementById('table_ganancia');


formGanancias.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const mesGanancia = GanarMes.value;
    const ganancias = await main.getGananciaMes(mesGanancia)
    console.log(ganancias);

    table_ganancias.innerHTML=`
        <tr id="tr-top">
            <th>Mes</th>
            <th>Pies  Totales</th>
            <th>Pago del Mes</th>
            <th>Opciones</th>
        </tr>
    `;    ganancias.forEach(ganancia => {
        table_ganancias.innerHTML += `
            <tr>
                <td>
                    ${ganancia.Mes}
                </td>
                <td>
                    ${ganancia.Pies_totales}
                </td>
                <td>
                    ${ganancia.Pago_del_mes}
                </td>
                <td>
                    <button class='btn del' onclick="eliminarGanancia('${ganancia.ID}')">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    })

})


async function eliminarGanancia(ID){
    const respuesta = confirm('Estas segura de eliminar esta registro de Ganancias?')

    if(respuesta){
        await  main.eliminarGanancia(ID);
        location.reload();
    }
    return;
}

