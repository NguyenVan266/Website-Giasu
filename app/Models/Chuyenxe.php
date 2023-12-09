<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chuyenxe extends Model
{
    use HasFactory;
    protected $table = 'chuyenxe';
    public $timestamps = True;
    protected $fillable = [
        'id_lotrinh','id_nhanvien','id_xe','giave','trangthai',
    ];
    public function lotrinh(){
        return $this->HasOne(Lotrinh::class,'id','id_lotrinh');
    }
    public function tuyenduong()
    {
        return $this->hasManyThrough(
            'App\Models\Tuyenduong', 'App\Models\Lotrinh',
            'id', 'id'
        );
    }
    public function nhanvien(){
        return $this->HasOne(Nhanvien::class, 'id', 'id_nhanvien' );
    }
    public function xe(){
        return $this->HasOne(Xe::class, 'id', 'id_xe' );
    }
    public function ve(){
        return $this->belongsToMany(Ve::class);
    }

}
