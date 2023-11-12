<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Loaixe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class LoaixeController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $typecar = DB::table('loaixe')->get();
            return view('admin.car.loaixe',[
                'typecar'=>$typecar,
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $typecar = new Loaixe;
            $typecar->tenloaixe = $request['tenloaixe'];
            $typecar->soluongghe = $request['soluongghe'];
            $typecar->save();
            alert()->success('Thêm mới thành công');
            return redirect()->back();
    }
    public function update(Request $request) {
            $update = [
                        'tenloaixe' => $request->tenloaixe,
                        'soluongghe' => $request->soluongghe,
                    ];
                    DB::table('loaixe')->where('id',$request->id)->update($update);
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
        }
     public function destroy(Request $typecar) {
            $delhang = $typecar->all();
            $delhang = Loaixe::findOrfail($typecar->id);
            if (
            $delhang->delete()){
             alert()->success('Xóa thành công');
            return redirect()->route('typecar.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
    public function loaixe(){
        $adminUser = Auth::guard('web')->user();
        $busmodel = DB::table('loaixe')->get();
        return view('admin.car.loaixe',[
            'user'=>$adminUser,
            'busmodel'=>$busmodel
        ]);
    }
    public function createloaixe(Request $request){
        $row = $request->row;
        $col = $request->col;
        $soghe = $request->soghe;
        $sodo = $request->noidung;
        $loaighe =$request->loaighe;
        $created_at = date('Y-m-d h-i-s');
        $updated_at = date('Y-m-d h-i-s');
        if(!empty($request->ID)) {
            if (DB::update("UPDATE `loaixe` SET `tenloaixe`= ?,`soluongghe`= ?,`sohang`= ?,`socot`= ?,`sodo`= ?,`updated_at`= ? WHERE `id`= ?",
                [$loaighe, $soghe, $row, $col, $sodo, $updated_at, $request->ID]))
            {
                return redirect()->back()->with('alert', 'Sửa thành công!');
            }
            else
                return redirect()->back()->with('alert','Sửa thất bại!');
        }
        else {
            if( DB::insert("INSERT INTO `loaixe`(`tenloaixe`, `soluongghe`, `sohang`, `socot`, `sodo`, `created_at`, `updated_at`) VALUES (?,?,?,?,?,?,?)",
                [$loaighe,$soghe,$row,$col,$sodo,$created_at,$updated_at]))
            {
                alert()->success('Thêm mới thành công');
                return redirect()->back();
            }
            else
                alert()->error('Thêm mới thất bại');
                return redirect()->back();
        }

    }
}


// $loaixe = New Loaixe;
// $loaixe->tenloaixe = $request['loaighe'];
// $loaixe->soluongghe = $request['soghe'];
// $loaixe->sohang = $request['row'];
// $loaixe->socot = $request['col'];
// $loaixe->sodo = $request['noidung'];
// $loaixe->save();
// alert()->success('Thêm mới thành công', 'Successfully');
// return redirect()->back();
