<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Lotrinh;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class LotrinhController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $route = Lotrinh::with('tuyenduong')->get();
            return view('admin.car.lotrinh',[
                'route'=>$route,
                'user'=>$adminUser,
        ]);
    }
     public function create(Request $request) {
            $route = new Lotrinh;
            $route->id_tuyenduong     = $request['id_tuyenduong'];
            $route->tramdung    = $request['tramdung'];
            $route->thoigiandi  = $request['thoigiandi'];
            $route->thoigianden = $request ['thoigianden'];
            $route->ngaydi      = $request ['ngaydi'];
            $route->ngayden     = $request['ngayden'];
            $route->save();
            alert()->success('Thêm mới thành công');
            return redirect()->back();
    }
    public function update(Request $request) {
            $update = [
                        'id_tuyenduong' => $request->id_tuyenduong,
                        'tramdung'      => $request->tramdung,
                        'thoigiandi'    => $request->thoigiandi,
                        'thoigianden'   => $request->thoigianden,
                        'ngaydi'        => $request->ngaydi,
                        'ngayden'       => $request->ngayden,
                    ];
                    // dd($update);
                    DB::table('lotrinh')->where('id',$request->id)->update($update);
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
        }
     public function destroy(Request $route) {
            $dellotrinh = $route->all();
            $dellotrinh = Lotrinh::findOrfail($route->id);
            if (
            $dellotrinh->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('route.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
}
