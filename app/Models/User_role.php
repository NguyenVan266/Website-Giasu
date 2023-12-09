<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_role extends Model
{
    use HasFactory;
    protected $table = 'user_role';
    public $timestamps = True;
    protected $fillable = [
        'user_id','role_id',
    ];
}

