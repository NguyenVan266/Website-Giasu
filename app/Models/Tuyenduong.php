<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tuyenduong extends Model
{
    use HasFactory;
    protected $table = 'tuyenduong';
    public $timestamps = True;
    protected $fillable = [
        'diemdi','diemden'
    ];
    public function lotrinh(){
        return $this->belongsTo(Lotrinh::class);
    }
    public function diemdontra(){
        return $this->belongsTo(Diemdontra::class);
    }
}
