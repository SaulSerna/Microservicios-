<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create categoria</title>
    @vite(['resources/css/create.css'])
</head>
<body>
<h1>Crear nueva Categoria</h1>

    <form action="/tipo" method="POST" id="formulario">
        @csrf

        <div class="iform">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" required>
        </div>

        <div class="iform">
            <label for="descripcion">Descripcion</label>
            <input type="text" name="descripcion" id="descripcion" required>
        </div>

        <div class="iform">
            <label for="clase">Clase</label>
            <input type="text" name="clase" id="clase" required>
        </div>

        <input class="iset" type="submit" name="action" value="Enviar">

    </form>
    
    <a href="/tipo"  id="REG">Regresar</a>

</body>
</html>