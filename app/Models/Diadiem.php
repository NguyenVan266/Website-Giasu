<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diadiem extends Model
{
    use HasFactory;
    protected $table = 'diadiem';
    public $timestamps = True;
    protected $fillable = [
        'tendiadiem',
    ];
}
