<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tipo show</title>
    @vite(['resources/css/show.css'])

</head>
<body>
    <h1>Tipo {{ $tipo->id }}</h1>
    <p>Nombre: {{ $tipo->nombre }}</p>
    <p>Descripcion: {{ $tipo->descripcion }}</p>
    <p>Clase: {{ $tipo->clase }}</p>

    <a href="/tipo">Regresar</a>

</body>
</html>