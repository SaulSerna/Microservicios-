<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\TipoController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/holamundo', function () {
    return view('holamundo');
});

/*

Route::get('/product', [ProductoController::class, 'index'])->name('producto.index');
*/

//Route::get('/productCreate', [ProductoController::class, 'create'])->name('producto.create');

Route::resource('producto', ProductoController::class);

Route::resource('tipo',
TipoController::class);