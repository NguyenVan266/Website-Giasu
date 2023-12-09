<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';
    public $timestamps = True;
    protected $fillable = [
        'p_dondatve_id','p_user_id','p_dondatve_code','p_money','p_note','p_vnp_response_code','p_code_vnp','p_code_bank',
    ];
    public function payment(){
        return $this->belongsTo(Dondatve::class);
    }
}
