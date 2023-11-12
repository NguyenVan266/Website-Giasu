<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diemdontra;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class DiemdontraController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $diemdontra = Diemdontra::with('tuyenduong')->get();
            return view('admin.car.diemdontra',[
                'diemdontra'=>$diemdontra,
                'user'=>$adminUser
        ]);
    }
    public function them()
     {
        $adminUser = Auth::guard('web')->user();
        return view('admin.car.themdiemdontra',[
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $count = count($request->id_tuyenduong);
                for ($i=0;$i<$count;$i++) {

                $data = new Diemdontra;
                $data->id_tuyenduong = $request->id_tuyenduong[$i];
                $data->diemdon = $request->diemdon[$i];
                $data->diemtra = $request->diemtra[$i];
                $data->Save();
                alert()->success('Thêm mới thành công');
            }
            return redirect()->route('diemdontra.list');

    }
    public function update(Request $request) {
            $update = [
                        'id_tuyenduong' => $request->id_tuyenduong,
                        'diemdon' => $request->diemdon,
                        'diemtra' => $request->diemtra,
                    ];
                    DB::table('diemdontra')->where('id',$request->id)->update($update);
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
        }
     public function destroy(Request $diemdontra) {
            $deletediemdontra = $diemdontra->all();
            $deletediemdontra = Diemdontra::findOrfail($diemdontra->id);
            if (
            $deletediemdontra->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('diemdontra.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
}
