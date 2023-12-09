<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tintuc extends Model
{
    use HasFactory;
    protected $table = 'news';
    public $timestamps = True;
    protected $fillable = [
        'tieude','slugnews','image','mota','noidung','nguoidang','nguoisua','active',
    ];
}
