<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lotrinh extends Model
{
    use HasFactory;
    protected $table = 'lotrinh';
    public $timestamps = True;
    protected $fillable = [
        'id_tuyenduong','tramdung','thoigiandi','thoigianden','ngaydi','ngayden',
    ];
    public function chuyenxe(){
        return $this->belongsTo(Chuyenxe::class);
    }
    public function tuyenduong(){
        return $this->HasOne(Tuyenduong::class,'id','id_tuyenduong');
    }
}
