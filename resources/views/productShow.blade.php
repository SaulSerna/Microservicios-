<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista productos</title>
    @vite(['resources/css/show.css'])

</head>
<body>
    <a href="/producto" id="Regre">Regresar</a>
    <table>
        <th><h1>Producto {{ $producto->id }}</h1></th>
        <tr><td><p>Nombre: {{ $producto->nombre }}</p></td></tr>
        <tr><td><p>Precio: {{ $producto->precio }}</p></td></tr>
        <tr><td><p>Marca: {{ $producto->marca }}</p></td></tr>
        <tr><td> <p>Categoria: @foreach ($producto->tipos as $tipo)
                    {{$tipo->nombre}}<br>
                @endforeach</p> </td></tr>
    </table>
</body>
</html>