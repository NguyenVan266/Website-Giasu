<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Ve;
use App\Models\Dondatve;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Alert;
class UserController extends Controller
{

    public function login(Request $request) {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (Auth::guard('web')->attempt($data) && $request->rememberlogin) {
            $rememberemail = cookie('rememberemail',$request->email, 43200);
            $rememberpassword = cookie('rememberpassword',$request->password, 43200);
            alert()->success('Đăng nhập thành công')->showConfirmButton('Đồng ý','#3085d6')->autoClose(5000);
            return redirect()->back()->withCookie($rememberemail)->withCookie($rememberpassword);
        }
        elseif (Auth::guard('web')->attempt($data)) {
            alert()->success('Đăng nhập thành công')->showConfirmButton('Đồng ý','#3085d6')->autoClose(5000);
            return redirect()->back();
        }else {
            alert()->error('Tài khoản hoặc mật khẩu chưa đúng !!!')->showConfirmButton('Đồng ý','red')->autoClose(5000);
            return redirect()->back();
        }
    }
    public function login2(Request $request) {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::guard('web')->attempt($data)) {
            alert()->success('Đăng nhập thành công')->showConfirmButton('Đồng ý','#3085d6')->autoClose(5000);
            return redirect('/');
        }else {
            alert()->error('Tài khoản hoặc mật khẩu chưa đúng !!!')->showConfirmButton('Đồng ý','red')->autoClose(5000);
            return redirect()->back();
        }
    }
    public function register(Request $request) {
        $combinedExists = DB::table('users')
        ->where('email', $request->email)
        ->orWhere('phone', $request->phone)
        ->exists();

        if ($combinedExists) {
            alert()->error('Email || Số điện thoại đã tồn tại !!!')->showConfirmButton('Đồng ý','red')->autoClose(5000);
            return redirect()->back();
        }

        $user = new User;
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->address = $request['address'];
        $user->gender = $request['gender'];
        $user->phone = $request['phone'];
        $user->password = Hash::make($request['password']);
        $user->level = 0;
        $check_save = $user->save();
        if ($check_save) {
        // Lưu thành công
            alert()->success('Đăng ký thành công')->showConfirmButton('Đồng ý','red')->autoClose(5000);
            return redirect()->back();
        } else {
            // Lưu không thành công
            alert()->error('Có lỗi xảy ra trong quá trình lưu vào cơ sở dữ liệu')->showConfirmButton('Đồng ý','red')->autoClose(5000);
            return redirect()->back();
        }
    }
    public function profile() {
        $user = DB::table('users')->where('id',auth::id())->get();
        if ($user){
            return view('user.profile')->withUser($user);
        } else {
            return redirect()->back();
        }
    }
    public function images(Request $request) {
        $user = User::find(Auth::user()->id);
        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/image/',$filename);
            $user->image = $filename;
        } else {
        return $request;
        $user->image = '';
        }
        $user->save();
        alert()->success('Cập nhật ảnh thành công');
        return redirect()->back();
    }
    public function update(Request $request) {
                $data = [
                    $user = User::find(Auth::user()->id),
                    // $validate = null;
                    // if (Auth::user()->email === $request['email']){
                    //     $validate = $request->validate([
                    //         'name' => 'required|min:2',
                    //         'email' => 'required|email'
                    //     ]);
                    // } else {
                    //     $validate = $request->validate([
                    //         'name' => 'required|min:2',
                    //         'email' => 'required|email|unique:users'
                    //     ]);
                    // }
                    $user->name = $request ['name'],
                    // $user->email = $request ['email'],
                    $user->address = $request ['address'],
                    $user->phone = $request ['phone'],
                    $user->gender = $request ['gender'],
                    $user->save(),
                ];
                if($data){
                    alert()->success('Cập nhật thành công');
                    return redirect()->back();
                } else {
                    alert()->error('Số điện thoại đã tồn tại!!!');
                    return redirect()->back();
                }
                
        }
    public function password(Request $request) {
        $validate = $request->validate([
            'oldPassword' => 'required|min:4',
            'password' => 'required|min:4|confirmed'
        ]);
        $user = User::find(Auth::user()->id);
        if ($user) {
            if (Hash::check($request['oldPassword'],$user->password) && $validate) {
                $user->password = Hash::make($request ['password']);
                $user->save();
                alert()->success('Đổi mật khẩu thành công');
                return redirect()->back();
            } else {
                alert()->error('Mật khẩu hiện tại không đúng, xin vui lòng thử lại!');
                return redirect()->back();
            }
        }
    }
    public function thongtinve()
    {
       $thongtinve = DB::table('dondatve')
                    ->join('xe','dondatve.id_xe','=','xe.id')
                    ->join('loaixe','xe.id_loaixe','=','loaixe.id')
                    ->join('users','dondatve.id_user','=','users.id')
                    ->join('chuyenxe','dondatve.id_chuyenxe','=','chuyenxe.id')
                    ->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
                    ->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')
                    ->where('id_user',Auth::id())
                    ->orderby('created_at','DESC')
                    ->select('dondatve.id','dondatve.vitri','dondatve.soluongve','dondatve.diemdon','dondatve.diemtra','dondatve.tongtien','dondatve.trangthai','dondatve.destroy','dondatve.created_at','xe.tenxe','xe.bienso','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.tramdung','lotrinh.ngaydi','lotrinh.thoigiandi','loaixe.soluongghe','loaixe.tenloaixe')
                    ->get();
        return view('user.thongtinve',[
        'thongtinve' => $thongtinve,
        ]);
    }
    public function huyve(Request $request) {
        $dondatve = Dondatve::findOrfail($request->id);
        $dondatve->destroy = 0;
        // $update = [
        //                 'id_user'        => null,
        //                 'id_donhang'       => null,
        //                 'trangthai' => 1,
        //                 'destroy' => 0,
        //             ];
        // DB::table('ve')->where('id_user',auth::id())->where('id_donhang',$id)->update($update);
        $dondatve->save();
        alert()->success('Yêu cầu hủy vé thành công');
        return redirect()->back();
    }
}
