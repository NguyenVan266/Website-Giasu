<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Xe extends Model
{
    use HasFactory;
    protected $table = 'xe';
    public $timestamps = True;
    protected $fillable = [
        'id_loaixe','tenxe','bienso','anhxe','trangthai',
    ];
    public function loaixe(){
        return $this->HasOne(Loaixe::class, 'id', 'id_loaixe' );
    }
    public function chuyenxe(){
        return $this->belongsTo(Xe::class);
    }
}
