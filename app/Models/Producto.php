<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = ['nombre', 'precio', 'marca'];
    public $timestamps = false; // Para que no se cree created_at y updated_at
    use HasFactory;
    
    public function tipos(){
        return $this->belongsToMany(Tipo::class);
    }
}
