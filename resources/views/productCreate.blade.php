<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear producto</title>
    @vite(['resources/css/create.css'])
</head>
<body>
    <h1>Ingresa un producto</h1>
    <form action="/producto" method="POST" id="formulario">
        @csrf

        <div class="iform">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" required>
        </div>

        <div class="iform">
            <label for="precio">Precio</label>
            <input type="number" name="precio" id="precio" required>
        </div>

        <div class="iform">
            <label for="marca">Marca</label>
            <input type="text" name="marca" id="marca" required>
        </div>

        <div class="iform">
            <label for="tipos">Categoria</label>
            <select name="tipos[]" id="tipos" multiple required>
                @foreach ($tipos as $tipo)
                    <option value="{{ $tipo->id }}">{{ $tipo->nombre }}</option>
                @endforeach
                <label for="tipos">Categorias</label>
            </select>
        </div>

        <input class="iset" type="submit" name="action" value="Enviar">

    </form>

    <a href="/producto" id="REG">Regresar</a>
</body>
</html>