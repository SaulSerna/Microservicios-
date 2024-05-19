<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>product Edit</title>
    @vite(['resources/css/create.css'])

</head>
<body>
    <form action="/producto/{{$producto -> id}}" method="POST" id="formulario">
        @csrf
        @method('patch')

        <div class="iform">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value="{{$producto->nombre}}">
        </div>

        <div class="iform">
            <label for="precio">Precio</label>
            <input type="text" name="precio" id="precio" value="{{$producto->precio}}">
        </div>

        <div class="iform">
            <label for="marca">Marca</label>
            <input type="text" name="marca" id="marca" value="{{$producto->marca}}">
        </div>

        <div class="iform">
		    <label for="tipos">Categorías</label>
		    <select name="tipos" id="tipo" multiple>
			    @foreach($tipos as $tipo)
				    <option value="{{ $tipo->id }}"
					    @if($producto->tipos->contains($tipo->id)) selected @endif>
					    {{ $tipo->nombre }}
				    </option>
			    @endforeach
		    </select>
	    </div>
        
        <input class="iset" type="submit" name="action" value="enviar">

    </form>
    <br>
    <br>

    <a href="/producto"  id="REG">Regresar</a>

</body>
</html>