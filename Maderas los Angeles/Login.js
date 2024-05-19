const { remote } = require('electron')
const main = remote.require('./main')

const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formLogin = document.getElementById('formLogin');


formLogin.addEventListener('submit', async(e) => {
    e.preventDefault();

    const Usuario = user.value
    const bandera = false
    const login = await main.loginget(Usuario)
    

    login.forEach(log => {
        const US =  log.Nombre
        const Passw = log.Contra

        if(user.value == US && pass.value == Passw){
            redirigir()
        }else{
            main.ERRORcontra();
        }
    })
})

function redirigir(){
    console.log('Bienvenido Admin');
    main.redirigir();
}
