<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loaixe extends Model
{
    use HasFactory;
    protected $table = 'loaixe';
    public $timestamps = True;
    protected $fillable = [
        'tenloaixe','sohang','socot','sodo','soluongghe',
    ];
    public function xe(){
        return $this->belongsTo(Xe::class);
    }
}
