<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;
use Directory;
use Illuminate\Support\Facades\DB;
use Alert;
class AdminUserController extends Controller
{
    private $admin;
    private $role;
    public function __construct(Admin $admin, Role $role)
    {
        $this->admin = $admin;
        $this->role = $role;
    }
    public function list() {
        $roles = Role::all();
        $adminUser = Auth::guard('web')->user();
        $users = DB::table('users')->where('level',0)->get();
            return view('admin.user.listuser',[
                'users'=>$users,
                'user'=>$adminUser,
                'roles' => $roles
                ]);
        }
        public function create(Request $request) {
            //  $level = $request->level;
            // if($level) {
            //     $user = new User;
            //     if($user) {
            //     $user->name = $request['name'];
            //     $user->email = $request['email'];
            //     $user->address = $request['address'];
            //     $user->phone = $request['phone'];
            //     $user->gender = $request['gender'];
            //     $user->password = Hash::make($request['password']);
            //     $user->level = $request['level'];
            //     $user->save();
            //     $run = $user->roles()->attach($request->role);
            //     $request->session()->flash('success', 'Thêm mới thành công!!!');
            //     return redirect()->back();
            //     }
            //         else {
            //         $request->session()->flash('error', 'Thêm mới thất bại!!');
            //         return redirect()->back();
            //         }
            //     }
            // else {
            //     $user = new User;
            //     if($user) {
            //     $user->name = $request['name'];
            //     $user->email = $request['email'];
            //     $user->address = $request['address'];
            //     $user->phone = $request['phone'];
            //     $user->gender = $request['gender'];
            //     $user->password = Hash::make($request['password']);
            //     $user->level = 0;
            //     $user->save();
            //     $request->session()->flash('success', 'Thêm mới thành công!!!');
            //     return redirect()->back();
            //     }
            //         else {
            //         $request->session()->flash('error', 'Thêm mới thất bại!!');
            //         return redirect()->back();
            //         }
            // }
                $level = $request->level;
                if($level) {
                    $user = new User;
                    if($user) {
                        $validate = null;
                        if ($user->email === $request['email']){
                            $validate = $request->validate([
                                'name' => 'required|min:2',
                                'email' => 'required|email',
                                'password' => 'required|min:7|confirmed'
                            ]);
                        } else {
                            $validate = $request->validate([
                                'name' => 'required|min:2',
                                'email' => 'required|email|unique:users',
                                'password' => 'required|min:7|confirmed'
                            ]);
                        }
                        if ($validate) {
                    $user->name = $request['name'];
                    $user->email = $request['email'];
                    $user->address = $request['address'];
                    $user->phone = $request['phone'];
                    $user->gender = $request['gender'];
                    $user->password = Hash::make($request['password']);
                    $user->level = $request['level'];
                    $user->save();
                    $run = $user->roles()->attach($request->role);
                    alert()->success('Thêm mới thành công');
                    return redirect()->back();
                    } else {
                        alert()->error('Thêm mới thất bại');
                        return redirect()->back();
                    }
                }

            }
                else {
                    $user = new User;
                    if($user) {
                        $validate = null;
                        if ($user->email === $request['email']){
                            $validate = $request->validate([
                                'name' => 'required|min:2',
                                'email' => 'required|email',
                                'password' => 'required|min:7|confirmed'
                            ]);
                        } else {
                            $validate = $request->validate([
                                'name' => 'required|min:2',
                                'email' => 'required|email|unique:users',
                                'password' => 'required|min:7|confirmed'
                            ]);
                        }
                        if ($validate) {
                    $user->name = $request['name'];
                    $user->email = $request['email'];
                    $user->address = $request['address'];
                    $user->phone = $request['phone'];
                    $user->gender = $request['gender'];
                    $user->password = Hash::make($request['password']);
                    $user->level = 0;
                    $user->save();
                    alert()->success('Thêm mới thành công');
                    return redirect()->back();
                    } else {
                        alert()->error('Thêm mới thất bại');
                        return redirect()->back();
                    }
                }
            }
        }
        public function edituser($id) 
         {
            $roles = Role::all();
            $adminUser = Auth::guard('web')->user();
            $kh = User::find($id);
            $rolesOfUser = $kh->roles;
            // dd($roles->toArray());
                return view('admin.user.edituser',[
                    'kh' => $kh,
                    'user'=>$adminUser,
                    'roles'=>$roles,
                    'rolesOfUser'=>$rolesOfUser,
            ]);
        }
        public function update(Request $request, $id) {
        $level = $request->level;
        if($level) {
            try {
            DB::beginTransaction();
            User::find($id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'phone' => $request->phone,
                'gender' => $request->gender,
                'level' => $request->level
            ]);
            $admin = User::find($id);
            $admin->roles()->sync($request->role);
            DB::commit();
            alert()->success('chỉnh sửa thành công');
            return redirect()->route('user.list');
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
                'address' => $request->address,
                'phone' => $request->phone,
                'gender' => $request->gender,
                'level' => 0,
            ]);
            $admin = User::find($id);
            $admin->roles()->sync($request->role);
            DB::commit();
            alert()->success('chỉnh sửa thành công');
            return redirect()->route('user.list');
            } catch (\Exception $exception) {
                DB::rollBack();
                Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());

            }
        }
    }
        public function destroy(Request $user) {
            $deleteuser = $user->all();
            $deleteuser = User::findOrfail($user->id);
            $deleteuser->roles()->sync($user->role);
            if (
            $deleteuser->delete()){
                alert()->success('Xóa thành công');
            return redirect()->route('user.list');
        } else {
            alert()->error('Xóa thất bại');
            return redirect()->back();
        }
    }
}
