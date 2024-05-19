<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    @vite(['resources/css/styles.css'])
</head>
<body>
    <header class="header">
        <div class="header-left"><a href="/">Inicio</a></div>
        <div class="header-right">
            <a href="/producto/create">Crear nuevo producto</a>
            <a href="/tipo">Categoria</a>
        </div>
    </header>

    @if (session()->has('success'))
        <p>Producto Eliminado exitosamente</p>
    @endif
    <h1>Productos</h1>

        <table id="tabla_product">
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Marca</th>
                <th>Categoria</th>
                <th>Ver</th>
                <th>Edit</th>
                <th>Borrar</th>
            </tr>
            @foreach ($productos as $producto)
            <tr>
                <td>{{ $producto->id }}</td>
                <td>{{ $producto->nombre }}</td>
                <td>{{ $producto->precio }}</td>
                <td>{{ $producto->marca }}</td>
                <td>
                @foreach ($producto->tipos as $tipo)
                    {{$tipo->nombre}}<br>
                @endforeach
                </td>
                <td><a href="/producto/{{$producto->id}}" id="IR">IR</a></td>
                <td>
                    <a href="/producto/{{$producto->id}}/edit" id="EDIT">Edit</a>
                </td> 
                <td>
                    <form class="delete-form" action="/producto/{{$producto->id}}" method="POST">
                        @csrf
                        @method('DELETE')
                        <input type="submit" class="delete-button" value="Borrar">
                    </form>
                </td>
            </tr>
            @endforeach
        </table>
</body>
</html>