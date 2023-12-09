<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ve extends Model
{
    use HasFactory;
    protected $table = 've';
    public $timestamps = True;
    protected $fillable = [
        'id_user','id_chuyenxe','vitrighe','mabimat','mave','trangthai',
    ];
    public function user(){
        return $this->HasOne(User::class, 'id', 'id_user' );
    }
    public function chuyenxe(){
        return $this->HasOne(Chuyenxe::class,'id','id_chuyenxe');
    }
}
