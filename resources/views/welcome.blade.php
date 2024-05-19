<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite(['resources/css/create.css'])


        <title>Pagina inicio</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->

        <body>
            <h1>Hola bienvenido al almacen</h1>
            <img src="https://img.freepik.com/vector-gratis/almacen-logistico-cajas-carton-maquina-montacargas_24908-59357.jpg" alt="" id="Imghome">
            <br>
            <br>
            <a href="/producto" id="Primera1">Producto</a>
            <a href="/tipo" id="Primera2">Categoria</a>            
        </body>
</html>
