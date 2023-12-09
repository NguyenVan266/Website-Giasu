<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diemdontra extends Model
{
    use HasFactory;
    protected $table = 'diemdontra';
    public $timestamps = True;
    protected $fillable = [
        'id_tuyenduong','diemdon','diemtra'
    ];
    public function tuyenduong(){
        return $this->HasOne(Tuyenduong::class,'id','id_tuyenduong');
    }
}
