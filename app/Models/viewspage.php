<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viewpage extends Model
{
    use HasFactory;
    protected $table = 'viewspage';
    public $timestamps = true;
    protected $fillable = [
        'viewpage',
    ];
}
