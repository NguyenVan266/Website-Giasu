<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\User_role;
use App\Models\Role;
use App\Models\Permissions;
use Directory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
class CloneController extends Controller
{
    public function listquantri() {
        $adminUser = Auth::guard('web')->user();
        $admin = DB::table('users')->where('level',1)->get();
            return view('admin.clone.listadmin',[
                'admin'=>$admin,
                'user'=>$adminUser
                ]);
    }
    public function themquantri()
     {
        $roles = DB::table('roles')->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.clone.themquantri',[
                'user'=>$adminUser,
                'roles'=>$roles,
        ]);
    }
    public function createquantri(Request $request) {
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
            return redirect()->route('clone.listquantri');
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());

        }
    }
    public function suaquantri($id)
     {
        $roles = Role::all();
        $adminUser = Auth::guard('web')->user();
        $admin = User::find($id);
        $rolesOfUser = $admin->roles;
        // dd($roles->toArray());
            return view('admin.clone.suaquantri',[
                'admin' => $admin,
                'user'=>$adminUser,
                'roles'=>$roles,
                'rolesOfUser'=>$rolesOfUser,
        ]);
    }
    public function updatequantri(Request $request, $id) {
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
                return redirect()->route('clone.listquantri')->with('success','Cập nhật thành công');
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
                return redirect()->route('clone.listquantri')->with('success','Cập nhật thành công');
                } catch (\Exception $exception) {
                    DB::rollBack();
                    Log::error('Message :' . $exception->getMessage() . '--- Line: ' . $exception->getLine());
                }
        }

    }

    public function listvaitro() {
        $adminUser = Auth::guard('web')->user();
        $role = DB::table('roles')->get();
            return view('admin.clone.listroles',[
                'role'=>$role,
                'user'=>$adminUser
                ]);
        }
    public function themvaitro()
     {
        $roles = DB::table('roles')->get();
        $permissionsParent = Permissions::where('parent_id',0)->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.clone.addroles',[
                'user'=>$adminUser,
                'roles'=>$roles,
                'permissionsParent' => $permissionsParent
        ]);
    }
    public function createvaitro (Request $request){
        $roles = Role::create([
            'name' => $request->name,
            'display_name' => $request->display_name
        ]);
        $roles->permissions()->attach($request->permissions_id);
        return redirect()->route('clone.listvaitro')->with('success','Thêm vai trò thành công');
    }

    public function thempermissions()
     {
        $roles = DB::table('roles')->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.clone.addpermissions',[
                'user'=>$adminUser,
                'roles'=>$roles,
        ]);
    }
    public function createpermissions(Request $request) {
            $permissions = Permissions::create([
                'name' => $request->module_parent,
                'display_name' => $request->module_parent,
                'parent_id' => 0,

            ]);
            foreach ($request->module_chilrent as $value) {
                $Permissions = Permissions::create([
                'name' => $value,
                'display_name' => $value,
                'parent_id' => $permissions->id,
                'key_code' => $request->module_parent .  '_' . $value

            ]);
            }
        return redirect()->back()->with('success','Thêm thành công');
        }

}
