<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use App\Models\Chuyenxe;
use App\Models\Ve;
use App\Models\Xe;
use App\Models\Dondatve;
use App\Models\User_role;
use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Alert;
class AdminController extends Controller
{
    private $admin;
    private $role;
    public function __construct(Admin $admin, Role $role)
    {
        $this->admin = $admin;
        $this->role = $role;
    }
    public function login(Request $request) {
        $data = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::guard('web')->attempt($data)) {
            $user = Auth::guard('web')->user();

            if ($user->level == 1) {
                // User has level 1, redirect to dashboard
                alert()->success('Đăng nhập thành công')->showConfirmButton('Đồng ý','#3085d6')->autoClose(5000);
                return redirect()->route('dashboard');
            } else {
                // User has level 0, no permission
                Auth::guard('web')->logout();
                $request->session()->flash('error', 'Bạn không có quyền truy cập');
                return redirect()->back();
            }
        } else {
            // Invalid email or password
            $request->session()->flash('error', 'Sai mật khẩu hoặc tài khoản');
            return redirect()->back();
        }
    }
    public function dashboard(){
        $dauthangnay = Carbon::now('Asia/Ho_Chi_Minh')->startOfMonth()->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->addDays(1)->toDateString();


        $filter = 'Tháng này';
        $adminUser = Auth::guard('web')->user();
        $user = Count(User::where('level',0)->whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $xe = Count(Xe::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $chuyenxe = Count(Chuyenxe::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->whereBetween('chuyenxe.created_at',[$dauthangnay,$now])->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
        ->where('lotrinh.ngaydi','<=',$now)->get());
        $ve = Count(Ve::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $vedaban = count(Ve::whereBetween('created_at',[$dauthangnay,$now])->where('id_user',!null)->get());
        $veconlai = count(Ve::whereBetween('created_at',[$dauthangnay,$now])->where('id_user',null)->get());
        $tongthunhap = DB::table("dondatve")->where('trangthai',1)->sum('tongtien');
        $thunhap = Dondatve::where('trangthai',1)->whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->sum('tongtien');
            return view('admin.dashboard',[
                'filter' => $filter,
                'user'=>$adminUser,
                'users'=>$user,
                'xe'=>$xe,
                'chuyenxe'=>$chuyenxe,
                'chuyenxedadi'=>$chuyenxedadi,
                've'=>$ve,
                'vedaban'=>$vedaban,
                'veconlai'=>$veconlai,
                'tongthunhap'=>$tongthunhap,
                'thunhap'=>$thunhap,
                ]);
    }
    public function dashboardfilter(Request $request){
        $dauthangnay = Carbon::now('Asia/Ho_Chi_Minh')->startOfMonth()->toDateString();
        $dauthangtruoc = Carbon::now('Asia/Ho_Chi_Minh')->subMonth()->startOfMonth()->toDateString();
        $cuoithangtruoc = Carbon::now('Asia/Ho_Chi_Minh')->subMonth()->endOfMonth()->toDateString();
        $sub7days = Carbon::now('Asia/Ho_Chi_Minh')->subDays(7)->toDateString();
        $sub365days = Carbon::now('Asia/Ho_Chi_Minh')->subDays(365)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->addDays(1)->toDateString();

        $filter = 'Tháng này';
        $adminUser = Auth::guard('web')->user();
        $user = Count(User::where('level',0)->whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $xe = Count(Xe::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $chuyenxe = Count(Chuyenxe::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->whereBetween('chuyenxe.created_at',[$dauthangnay,$now])->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
        ->where('lotrinh.ngaydi','<=',$now)->get());
        $ve = Count(Ve::whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->get());
        $vedaban = count(Ve::whereBetween('created_at',[$dauthangnay,$now])->where('id_user',!null)->get());
        $veconlai = count(Ve::whereBetween('created_at',[$dauthangnay,$now])->where('id_user',null)->get());
        $thunhap = Dondatve::where('trangthai',1)->whereBetween('created_at',[$dauthangnay,$now])->orderBy('created_at','ASC')->sum('tongtien');
        if($request->filter=='7ngayqua'){
            $filter = '7 Ngày qua';
            $adminUser = Auth::guard('web')->user();
            $user = Count(User::where('level',0)->whereBetween('created_at',[$sub7days,$now])->orderBy('created_at','ASC')->get());
            $xe = Count(Xe::whereBetween('created_at',[$sub7days,$now])->orderBy('created_at','ASC')->get());
            $chuyenxe = Count(Chuyenxe::whereBetween('created_at',[$sub7days,$now])->orderBy('created_at','ASC')->get());
            $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->whereBetween('chuyenxe.created_at',[$sub7days,$now])->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
            ->where('lotrinh.ngaydi','<=',$now)->get());
            $ve = Count(Ve::whereBetween('created_at',[$sub7days,$now])->orderBy('created_at','ASC')->get());
            $vedaban = Count(Ve::whereBetween('created_at',[$sub7days,$now])->where('id_user',!null)->get());
            $veconlai = count(Ve::whereBetween('created_at',[$sub7days,$now])->where('id_user',null)->get());
            $thunhap = Dondatve::where('trangthai',1)->whereBetween('created_at',[$sub7days,$now])->sum('tongtien');
        }else if($request->filter=='thangtruoc'){
            $filter = 'Tháng trước';
            $adminUser = Auth::guard('web')->user();
            $user = count(User::where('level',0)->whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->orderBy('created_at','ASC')->get());
            $xe = Count(Xe::whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->orderBy('created_at','ASC')->get());
            $chuyenxe = Count(Chuyenxe::whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->orderBy('created_at','ASC')->get());
            $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->whereBetween('chuyenxe.created_at',[$dauthangtruoc,$cuoithangtruoc])->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
            ->where('lotrinh.ngaydi','<=',$now)->get());
            $ve = Count(Ve::whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->orderBy('created_at','ASC')->get());
            $vedaban = count(Ve::whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->where('id_user',!null)->get());
            $veconlai = count(Ve::whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->where('id_user',null)->get());
            $thunhap = Dondatve::where('trangthai',1)->whereBetween('created_at',[$dauthangtruoc,$cuoithangtruoc])->sum('tongtien');
        }else if($request->filter=='365ngayqua'){
            $filter = '1 Năm qua';
            $adminUser = Auth::guard('web')->user();
            $user = Count(User::where('level',0)->whereBetween('created_at',[$sub365days,$now])->orderBy('created_at','ASC')->get());
            $xe = Count(Xe::whereBetween('created_at',[$sub365days,$now])->orderBy('created_at','ASC')->get());
            $chuyenxe = Count(Chuyenxe::whereBetween('created_at',[$sub365days,$now])->orderBy('created_at','ASC')->get());
            $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->whereBetween('chuyenxe.created_at',[$sub365days,$now])->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
            ->where('lotrinh.ngaydi','<=',$now)->get());
            $ve = Count(Ve::whereBetween('created_at',[$sub365days,$now])->orderBy('created_at','ASC')->get());
            $vedaban = count(Ve::whereBetween('created_at',[$sub365days,$now])->where('id_user',!null)->get());
            $veconlai = count(Ve::whereBetween('created_at',[$sub365days,$now])->where('id_user',null)->get());
            $thunhap = Dondatve::where('trangthai',1)->whereBetween('created_at',[$sub365days,$now])->orderBy('created_at','ASC')->sum('tongtien');
        }else if($request->filter=='tong'){
            $filter = 'Tổng';
            $adminUser = Auth::guard('web')->user();
            $user = Count(User::where('level',0)->get());
            $xe = Count(Xe::all());
            $chuyenxe = Count(Chuyenxe::all());
            $chuyenxedadi = count(DB::table("chuyenxe")->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
            ->where('lotrinh.ngaydi','<=',$now)->get());
            $ve = Count(Ve::all());
            // dd($ve);
            $vedaban = count(DB::table("ve")->where('id_user',!null)->get());
            $veconlai = count(DB::table("ve")->where('id_user',null)->get());
            $thunhap = Dondatve::where('trangthai',1)->sum('tongtien');
        }
        return view('admin.dashboard',[
            'filter' => $filter,
            'user'=>$adminUser,
            'users'=>$user,
            'xe'=>$xe,
            'chuyenxe'=>$chuyenxe,
            'chuyenxedadi'=>$chuyenxedadi,
            've'=>$ve,
            'vedaban'=>$vedaban,
            'veconlai'=>$veconlai,
            'thunhap'=>$thunhap,
        ]);

    }
    public function logout(){
        Auth::guard('web')->logout();
        return redirect('admin/dangnhap');
    }
     public function list() {
        $adminUser = Auth::guard('web')->user();
        $admin = DB::table('users')->where('level',1)->get();
            return view('admin.quantri.listadmin',[
                'admin'=>$admin,
                'user'=>$adminUser
                ]);
    }
    public function themquantri()
     {
        $roles = DB::table('roles')->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.quantri.themquantri',[
                'user'=>$adminUser,
                'roles'=>$roles,
        ]);
    }
    public function create(Request $request) {
        try {
            DB::beginTransaction();
            $admin = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'level' => $request->level
            ]);
            $admin->roles()->attach($request->role);
            DB::commit();
            alert()->success('Thêm mới thành công');
            return redirect()->route('admin.list');
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());

        }

    }
    public function destroy(Request $admin) {
            $deleteadmin = $admin->all();
            $deleteadmin = User::findOrfail($admin->id);
            $deleteadmin->roles()->sync($admin->role);
            if (
            $deleteadmin->delete()){
            alert()->error('Xóa thành công');
            return redirect()->route('admin.list');
        } else {
            return redirect()->back()->with('error','Xóa thất bại !!!');
        }
    }
    public function suaquantri($id)
     {
        $roles = Role::all();
        $adminUser = Auth::guard('web')->user();
        $admin = User::find($id);
        $rolesOfUser = $admin->roles;
        // dd($roles->toArray());
            return view('admin.quantri.suaquantri',[
                'admin' => $admin,
                'user'=>$adminUser,
                'roles'=>$roles,
                'rolesOfUser'=>$rolesOfUser,
        ]);
    }
    public function update(Request $request, $id) {
        $password = $request->password;
        if($password){
                try {
                DB::beginTransaction();
                User::find($id)->update([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'level' => $request->level,
                ]);
                $admin = User::find($id);
                $admin->roles()->sync($request->role);
                DB::commit();
                alert()->success('Cập nhật thành công');
                return redirect()->route('admin.list');
                } catch (\Exception $exception) {
                    DB::rollBack();
                    Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());
                }
        } else {
            try {
                DB::beginTransaction();
                User::find($id)->update([
                    'name' => $request->name,
                    'email' => $request->email,
                    'level' => $request->level,
                ]);
                $admin = User::find($id);
                $admin->roles()->sync($request->role);
                DB::commit();
                alert()->success('Cập nhật thành công');
                return redirect()->route('admin.list');
                } catch (\Exception $exception) {
                    DB::rollBack();
                    Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());
                }
        }

    }
}
