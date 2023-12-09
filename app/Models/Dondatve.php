<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dondatve extends Model
{
     use HasFactory;
    protected $table = 'dondatve';
    public $timestamps = True;
    protected $fillable = [
        'id_xe','id_user','id_chuyenxe','vitri','soluongve','tongtien','trangthai','destroy'
    ];
    public function payment(){
        return $this->HasOne(Payment::class,'p_dondatve_id','id');
    }
    public function xe(){
        return $this->HasOne(Xe::class,'id','id_xe');
    }
    public function chuyenxe(){
        return $this->HasOne(Chuyenxe::class,'id','id_chuyenxe');
    }
    public function user(){
        return $this->HasOne(User::class,'id','id_user');
    }
}
