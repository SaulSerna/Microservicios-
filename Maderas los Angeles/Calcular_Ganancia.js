const { remote } = require('electron')
const main = remote.require('./main')

const formGanancias = document.getElementById('formGanancias');
const Mes = document.getElementById('Mes');
const pies_Totales = document.getElementById('pies_totales');
const pies_Entregados = document.getElementById('pies_entregados');
const table_ganancias = document.getElementById('table_ganancias');

let ganancias = []
async function Buscar() {

     const Month = Mes.value
     const resultado = await main.getRegistroByMes(Month)
     console.log(resultado);

     table_ganancias.innerHTML=`
     <tr id="tr-top">
           <th>Día</th>
           <th>Mes</th>
           <th>Año</th>
           <th>Pies totales del viaje</th>
      </tr>`;
      resultado.forEach(resultado => {
          table_ganancias.innerHTML += `
               <tr>
                    <td>
                         ${resultado.Dia}
                    </td>
                    <td>
                         ${resultado.Mes}
                    </td>
                    <td>
                         ${resultado.Year}
                    </td>
                    <td>
                         ${resultado.Pies_total}
                    </td>
               </tr>
          `;
     })

     return resultado
}


async function calcular() {
     const Month = Mes.value
     const calcular_res = await main.getRegistroByMes(Month)
     let suma = 0
     
     calcular_res.forEach(calcular => {
          suma += calcular.Pies_total;
     })
     pies_Totales.value = suma;
     const gananciaMes = suma * 1.50;
     pies_Entregados.value = '$' + gananciaMes.toFixed(2);

}


formGanancias.addEventListener('submit', async(e) => {

     const newRegistro = {
          Mes: Mes.value,
          Pies_totales: pies_Totales.value,
          Pago_del_mes: pies_Entregados.value, 
     }

     const result = await main.crearNewGanancia(newRegistro);
     console.log(result);
})


