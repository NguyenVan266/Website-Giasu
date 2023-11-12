<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chuyenxe;
use App\Models\Ve;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
use Carbon\Carbon;
class ChuyenxeController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $buses = Chuyenxe::with('lotrinh','nhanvien','xe')->get();
            return view('admin.car.buses',[
                'buses'=>$buses,
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $buses = new Chuyenxe;
            $buses->id_lotrinh     = $request['id_lotrinh'];
            $buses->id_nhanvien    = $request['id_nhanvien'];
            $buses->id_xe        = $request['id_xe'];
            $buses->giave        = $request['giave'];
            $buses->trangthai     = $request['trangthai'];
            $buses->save();
            $id = $buses->id;
            if($request->soghe){
                $mabimat = str::random(8);
                $mave = str::random(6);
                $trangthai = 1;
                for($i=1;$i<=$request->soghe;$i++){
                $datasave = [
                    'id_chuyenxe' => $buses->id,
                    'vitrighe' => 'A-'.($i),
                    'mabimat' => str::random(8),
                    'mave' => str::random(8),
                    'trangthai' => $trangthai,
                    'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
                ];
                DB::table('ve')->insert($datasave);
            }
        }
        alert()->success('Thêm mới thành công');
        return redirect()->back();
    }
    public function update(Request $request) {
            $update = [
                        'id_lotrinh' => $request->id_lotrinh,
                        'id_nhanvien' => $request->id_nhanvien,
                        'id_xe' => $request->id_xe,
                        'giave' => $request->giave,
                        'trangthai' => $request->trangthai,
                    ];
                    DB::table('chuyenxe')->where('id',$request->id)->update($update);
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
        }
     public function destroy(Request $buses) {
            $update = [
                'id_lotrinh' => null,
                'id_nhanvien' => null,
                'id_xe' =>null
            ];
            DB::table('chuyenxe')->where('id',$buses->id)->update($update);
            DB::table('ve')->where('id_chuyenxe',$buses->id)->delete();
            $iddonve = DB::table('dondatve')->where('id_chuyenxe',$buses->id)->select('id')->get();
            foreach ($iddonve as $iddonve) {
                $deletepayments = DB::table('payments')->where('p_dondatve_id',$iddonve->id)->delete();
            }
            DB::table('dondatve')->where('id_chuyenxe',$buses->id)->delete();
            // dd($update);
            $delbuses = $buses->all();
            $delbuses = Chuyenxe::findOrfail($buses->id);
            // dd($delbuses->toArray());
            if (
            $delbuses->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('buses.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
    public function active($id) {
        DB::table('chuyenxe')->where('id',$id)->update(['trangthai'=>1]);
        alert()->success('Thay đổi từ không hoạt động sang hoạt động');
        return redirect()->back();
    }
    public function unactive($id) {
        DB::table('chuyenxe')->where('id',$id)->update(['trangthai'=>2]);
        alert()->success('Thay đổi từ hoạt động sang không hoạt động');
        return redirect()->back();
    }
}
