<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nhanvien;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class NhanvienController extends Controller
{
    public function list() {
        $adminUser = Auth::guard('web')->user();
        $employee = DB::table('nhanvien')->get();
            return view('admin.user.employee',[
                'employee'=>$employee,
                'user'=>$adminUser
                ]);
        }
        public function create(Request $request) {
            $employee = new Nhanvien;
            $employee->tennv = $request['tennv'];
            $employee->cmnd  = $request['cmnd'];
            $employee->banglai  = $request['banglai'];
            $employee->ngaysinh = $request['ngaysinh'];
            $employee->gioitinh  = $request['gioitinh'];
            $employee->diachi = $request['diachi'];
            $employee->dienthoai  = $request['dienthoai'];
            $employee->save();
            alert()->success('Thêm mới thành công');
            return redirect()->back();
        }
        public function destroy(Request $nhanvien) {
            $dlemployee = $nhanvien->all();
            $dlemployee = Nhanvien::findOrfail($nhanvien->id);
            if (
            $dlemployee->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('employee.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
    public function update(Request $request) {
        $update = [
                    'tennv' => $request->tennv,
                    'cmnd' => $request->cmnd,
                    'banglai' => $request->banglai,
                    'ngaysinh' => $request->ngaysinh,
                    'diachi' => $request->diachi,
                    'dienthoai' => $request->dienthoai,
                    'gioitinh' => $request->gioitinh,
                ];
            DB::table('nhanvien')->where('id',$request->id)->update($update);
            alert()->success('Chỉnh sửa thành công');
            return redirect()->back();
        }
}
