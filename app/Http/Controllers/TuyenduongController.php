<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tuyenduong;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class TuyenduongController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $tuyenduong = DB::table('tuyenduong')->get();
            return view('admin.car.tuyenduong',[
                'tuyenduong'=>$tuyenduong,
                'user'=>$adminUser
        ]);
    }
    public function them()
     {
        $adminUser = Auth::guard('web')->user();
        return view('admin.car.themtuyenduong',[
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $count = count($request->diemdi);
                for ($i=0;$i<$count;$i++) {

                $data = new Tuyenduong;
                $data->diemdi = $request->diemdi[$i];
                $data->diemden = $request->diemden[$i];
                $data->Save();
                alert()->success('Thêm mới thành công');
            }
            return redirect()->route('tuyenduong.list');

    }
    public function update(Request $request) {
            $update = [
                        'diemdi' => $request->diemdi,
                        'diemden' => $request->diemden,
                    ];
                    DB::table('tuyenduong')->where('id',$request->id)->update($update);
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
        }
     public function destroy(Request $tuyenduong) {
            $deletecity = $tuyenduong->all();
            $deletecity = Tuyenduong::findOrfail($tuyenduong->id);
            if (
            $deletecity->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('tuyenduong.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
}
