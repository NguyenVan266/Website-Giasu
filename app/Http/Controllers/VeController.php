<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ve;
use App\Models\Chuyenxe;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class VeController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $ticket =  Ve::with('user','chuyenxe')->get();
            return view('admin.ticket.ticket',[
                'ticket'=>$ticket,
                'user'=>$adminUser,
        ]);
    }
     public function create(Request $request) {
        $soghe = $request['soluong'];
        $id_chuyenxe = $request['id_chuyenxe'];
        $mabimat = str::random(8);
        $mave = str::random(6);
        $trangthai = 1;
            for($i=1;$i<=$soghe;$i++){
                $datasave = [
                    'id_chuyenxe' => $id_chuyenxe,
                    'vitrighe' => 'A-'.($i),
                    'mabimat' => str::random(8),
                    'mave' => str::random(8),
                    'trangthai' => $trangthai,
                ];
                DB::table('ve')->insert($datasave);
            }
        return redirect()->back()->with('success','Thêm thành công !!!');
     }
    public function update(Request $request) {
            $update = [
                        'trangthai'   => $request->trangthai,
                    ];
                    /*dd($update);*/
                    DB::table('ve')->where('id',$request->id)->update($update);
                    return redirect()->back()->with('success','Chỉnh sửa thành công');
        }
     public function destroy(Request $ticket) {
            $delticket = $ticket->all();
            $delticket = Ve::findOrfail($ticket->id);
            if (
            $delticket->delete()){
            return redirect()->route('ticket.list')->with('success','Xóa thành công');
        } else {
            return redirect()->back()->with('error','Xóa thất bại !!!');
        }
    }
}
