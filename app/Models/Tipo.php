<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo extends Model
{
    protected $fillable = ['nombre', 'descripcion', 'clase'];
    public $timestamps = false; // Para que no se cree created_at y updated_at
    use HasFactory;

    public function productos(){
        return $this->belongsToMany(Producto::class);
    }
}
