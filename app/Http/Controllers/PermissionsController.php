<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use App\Models\Permissions;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Alert;
use Directory;
use Illuminate\Support\Facades\DB;
class PermissionsController extends Controller
{
    public function thempermissions()
     {
        $roles = DB::table('roles')->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.quantri.permissions.addpermissions',[
                'user'=>$adminUser,
                'roles'=>$roles,
        ]);
    }
    public function create(Request $request) {
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
            alert()->success('Thêm mới thành công');
            return redirect()->back();
        }
    // public function destroy(Request $roles) {
    //         $delroles = $roles->all();
    //         $delroles = Role::findOrfail($roles->id);
    //         if (
    //         $delroles->delete()){
    //         return redirect()->route('roles.list')->with('success','Xóa thành công');
    //     } else {
    //         return redirect()->back()->with('error','Xóa thất bại !!!');
    //     }
    // }
}
