<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nhanvien extends Model
{
    use HasFactory;
    protected $table = 'nhanvien';
    public $timestamps = True;
    protected $fillable = [
        'tennv','cmnd','banglai','ngaysinh','gioitinh','diachi','dienthoai',
    ];
    public function chuyenxe(){
        return $this->belongsTo(Chuyenxe::class);
    }
}
