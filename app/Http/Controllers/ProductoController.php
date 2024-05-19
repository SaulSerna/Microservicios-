<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Tipo;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::all();
        return view('/productoIndex', compact('productos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //return view('productCreate');
        $tipos = Tipo::all();
        return view('productCreate', compact('tipos'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Producto::create($request->all());
        // return redirect('/producto'); 
        $request->validate([
            'nombre' => 'required|string',
            'precio' => 'required|numeric',
            'marca' => 'required|string',
            'tipos' => 'required'
        ]);

        //crear el producto
        $producto = new Producto();
        $producto->nombre = $request->nombre;
        $producto->precio = $request->precio;
        $producto->marca = $request->marca;
        $producto->save();

        $producto->tipos()->attach($request->tipos);

        return redirect('/producto');
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {   
        //dd($producto);
        return view('productShow', compact('producto'));
        // dd($producto);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        //return view('productEdit', compact('producto'));

        $tipos = Tipo::all();
        return view('productEdit', compact('tipos', 'producto'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        //Producto::where('id', $producto->id)->update($request->except('_token', '_method', 'action'));
        //return redirect('/producto');

        $producto->nombre = $request->nombre;
        $producto->precio = $request->precio;
        $producto->marca = $request->marca;
        $producto->save();
        //dd($request);
        if ($request->has('tipos')) {
                $producto->tipos()->sync($request->tipos);
            } else {
                $producto->tipos()->detach(); 
            }

        return redirect('/producto');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        Session()->flash('success', 'Producto eliminado');
        return redirect('/producto');
    }
}
