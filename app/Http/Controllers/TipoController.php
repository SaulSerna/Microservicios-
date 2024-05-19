<?php

namespace App\Http\Controllers;

use App\Models\Tipo;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipos = Tipo::all();
        return view('tipo/tipoIndex', compact('tipos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('tipo/tipoCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Tipo::create($request->all());
        return redirect('/tipo');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tipo $tipo)
    {
        return view('tipo/tipoShow', compact('tipo'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tipo $tipo)
    {
        return view('tipo/tipoEdit', compact('tipo'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tipo $tipo)
    {
        Tipo::where('id', $tipo->id)->update($request->except('_token', '_method', 'action'));
        return redirect('/tipo');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tipo $tipo)
    {
        $tipo->delete();
        Session()->flash('success', 'Tipo eliminado');
        return redirect('/tipo');
    }
}
