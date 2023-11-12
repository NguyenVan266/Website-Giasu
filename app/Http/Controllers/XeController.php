<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Xe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class XeController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $car = Xe::with('loaixe')->get();
        // $car = DB::table('xekhach')->get();
            return view('admin.car.xe',[
                'car'=>$car,
                'user'=>$adminUser,
        ]);
    }
    public function themxe()
     {
        $adminUser = Auth::guard('web')->user();
            return view('admin.car.xe.createloaixe',[
                'user'=>$adminUser,
        ]);
    }
    public function suaxe($id)
     {
        $adminUser = Auth::guard('web')->user();
        $car = Xe::find($id);
            return view('admin.car.xe.editxe',[
                'car' => $car,
                'user'=>$adminUser,
        ]);
    }
     public function create(Request $request) {
            $car = new Xe;
            $car->id_loaixe     = $request['id_loaixe'];
            $car->tenxe         = $request['tenxe'];
            $car->bienso        = $request['bienso'];
            $car->trangthai     = $request['trangthai'];
            // if ($request->hasfile('anhxe')) {
            // $file = $request->file('anhxe');
            // $extension = $file->getClientOriginalExtension();
            // $filename = time() . '.' . $extension;
            // $file->move('uploads/anhxe/',$filename);
            // $car->anhxe = $filename;
            // } else {
            // return $request;
            // $car->anhxe = '';
            // }
            $car->save();
            alert()->success('Thêm mới thành công');
            return redirect()->route('car.list');
    }
    public function update(Request $request,$id) {
            $car = Xe::find($id);
            $car->id_loaixe = $request['id_loaixe'];
            $car->tenxe = $request['tenxe'];
            $car->bienso = $request['bienso'];
            $car->trangthai = $request['trangthai'];
            // if ($request->hasfile('anhxe')) {
            //     $file = $request->file('anhxe');
            //     $extension = $file->getClientOriginalExtension();
            //     $filename = time() . '.' . $extension;
            //     $file->move('uploads/anhxe/',$filename);
            //     $car->anhxe = $filename;
            // } else {
            // return $request;
            // $car->anhxe = '';
            // }
            $car->save();
            alert()->success('Cập nhật thành công');
            return redirect()->route('car.list');
        }
     public function destroy(Request $car) {
            $update = [
                'id_loaixe' => null,
            ];
            DB::table('xe')->where('id',$car->id)->update($update);
            $delxekhach = $car->all();
            $delxekhach = Xe::findOrfail($car->id);
            if (
            $delxekhach->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('car.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
    public function active($id) {
        DB::table('xe')->where('id',$id)->update(['trangthai'=>1]);
        alert()->success('Thay đổi từ không hoạt động sang hoạt động');
        return redirect()->back();
    }
    public function unactive($id) {
        DB::table('xe')->where('id',$id)->update(['trangthai'=>2]);
        alert()->success('Thay đổi từ hoạt động sang không hoạt động');
        return redirect()->back();
    }
}
