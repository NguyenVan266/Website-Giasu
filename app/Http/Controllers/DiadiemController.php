<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diadiem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class DiadiemController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $city = DB::table('diadiem')->get();
            return view('admin.car.diadiem',[
                'city'=>$city,
                'user'=>$adminUser
        ]);
    }
    public function them()
     {
        $adminUser = Auth::guard('web')->user();
        return view('admin.car.themdiadiem',[
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
                foreach ($request->tendiadiem as $key=> $tendiadiem) {
                $data = new Diadiem;
                $data->tendiadiem = $tendiadiem;
                $data->Save();
                alert()->success('Thêm mới thành công');
                }
            return redirect()->route('location.list');
    }
    public function update(Request $request) {
            $update = [
                        'tendiadiem' => $request->tendiadiem,
                    ];
                    DB::table('diadiem')->where('id',$request->id)->update($update);
                    alert()->success('Chỉnh sửa thành công');
                    return redirect()->back();
        }
     public function destroy(Request $city) {
            $deletecity = $city->all();
            $deletecity = Diadiem::findOrfail($city->id);
            if (
            $deletecity->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('location.list');
        } else {
            alert()->success('Xóa thành công');
            return redirect()->back();
        }
    }
}
