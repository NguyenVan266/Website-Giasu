<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ve;
use App\Models\Chuyenxe;
use App\Models\User;
use App\Models\id_xe;
use App\Models\Dondatve;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class DondatveController extends Controller
{
    public function list() {
        $adminUser = Auth::guard('web')->user();
        $orderticket = Dondatve::with('payment')->orderby('updated_at','DESC')->get();
            return view('admin.ticket.dondatve',[
                'orderticket'=>$orderticket,
                'user'=>$adminUser
                ]);

        }
    //     public function destroy(Request $nhanvien) {
    //         $dlemployee = $nhanvien->all();
    //         $dlemployee = Nhanvien::findOrfail($nhanvien->id);
    //         if (
    //         $dlemployee->delete()){
    //         return redirect()->route('employee.list')->with('success','Xóa thành công');
    //     } else {
    //         return redirect()->back()->with('error','Xóa thất bại !!!');
    //     }
    // }
    public function updateOrder(Request $request) {

        $update = [
                'trangthai' => $request->trangthai,
        ];
        if($request->trangthai == 1){
            DB::table('dondatve')->where('id',$request->id)->update($update);
            DB::table('ve')->where('id_donhang',$request->id)->update(['trangthai' => 3]);
            alert()->success('Cập nhật thành công');
            return redirect()->back();
        } else {
            DB::table('dondatve')->where('id',$request->id)->update($update);
            DB::table('ve')->where('id_donhang',$request->id)->update(['trangthai' => 2]);
            alert()->success('Cập nhật thành công');
            return redirect()->back();
        }
        
    }
    public function xacnhanhuy(Request $request,$id) {
        $dondatve = Dondatve::find($id);
        $dondatve->destroy = 1;
        $dondatve->trangthai = 3;
        $update = [
                        'id_user'        => null,
                        'id_donhang'       => null,
                        'trangthai' => 1,
                    ];
        DB::table('ve')->where('id_donhang',$id)->update($update);
        alert()->success('Xác nhận hủy thành công');
        $dondatve->save();
        return redirect()->back();
    }
    public function huyve(Request $request) {
        $dondatve = Dondatve::findOrfail($request->id);
        $dondatve->destroy = 1;
        $dondatve->trangthai = 3;
        $update = [
                        'id_user'        => null,
                        'id_donhang'       => null,
                        'trangthai' => 1,
                    ];
        DB::table('ve')->where('id_donhang',$request->id)->update($update);
        $dondatve->save();
        alert()->success('Hủy thành công');
        return redirect()->back();
    }
    public function tuchoihuy(Request $request,$id) {
        $dondatve = Dondatve::find($id);
        $dondatve->destroy = 3;
        $dondatve->save();
        alert()->success('Từ chối hủy thành công');
        return redirect()->back();
    }
}
