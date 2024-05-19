<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categoria editar</title>
    @vite(['resources/css/create.css'])

</head>
<body>
    <h1>Cambiar informacion de la categoria</h1>
    <form action="/tipo/{{ $tipo->id }}" method="POST" id="formulario">
        @csrf
        @method('patch')

        <div class="iform">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value="{{ $tipo->nombre }}">
        </div>

        <div class="iform">
            <label for="descripcion">Descripcion</label>
            <input type="text" name="descripcion" id="descripcion" value="{{ $tipo->descripcion }}">
        </div>

        <div class="iform">
            <label for="clase">Clase</label>
            <input type="text" name="clase" id="clase" value="{{ $tipo->clase }}">
        </div>

        <input class="iset" type="submit" name="action" value="enviar">

    </form>
    <br>
    <br>
    <a href="/tipo"  id="REG">Regresar</a>

</body>
</html>