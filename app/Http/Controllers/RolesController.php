<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use App\Models\Permissions;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Directory;
use Illuminate\Support\Facades\DB;
use Alert;
class RolesController extends Controller
{
    public function list() {
        $adminUser = Auth::guard('web')->user();
        $role = DB::table('roles')->get();
            return view('admin.quantri.roles.listroles',[
                'role'=>$role,
                'user'=>$adminUser
                ]);
        }
    public function themroles()
     {
        $roles = DB::table('roles')->get();
        $permissionsParent = Permissions::where('parent_id',0)->get();
        $adminUser = Auth::guard('web')->user();
            return view('admin.quantri.roles.addroles',[
                'user'=>$adminUser,
                'roles'=>$roles,
                'permissionsParent' => $permissionsParent
        ]);
    }
    public function create (Request $request){
        $roles = Role::create([
            'name' => $request->name,
            'display_name' => $request->display_name
        ]);
        $roles->permissions()->attach($request->permissions_id);
        alert()->success('Thêm mới thành công', 'Successfully');
        return redirect()->route('roles.list');
    }
    public function suaroles ($id){
        $permissionsParent = Permissions::where('parent_id',0)->get();
        $roles = Role::find($id);
        $adminUser = Auth::guard('web')->user();
        $permissionsChecked = $roles->permissions;
            return view('admin.quantri.roles.editroles',[
                'roles' => $roles,
                'user'=>$adminUser,
                'permissionsParent' => $permissionsParent,
                'permissionsChecked' => $permissionsChecked
        ]);
    }
    public function update(Request $request, $id){
        $roles = Role::find($id);
        $roles->update([
            'name' => $request->name,
            'display_name' => $request->display_name
        ]);
        $roles->permissions()->sync($request->permissions_id);
        alert()->success('Cập nhật thành công');
        return redirect()->route('roles.list');
    }

    public function destroy(Request $roles) {
            $delroles = $roles->all();
            $delroles = Role::findOrfail($roles->id);
            DB::table('permission_role')->where('role_id',$delroles->id)->delete();
            DB::table('user_role')->where('role_id',$delroles->id)->update(['role_id'=>null]);
            if (
            $delroles->delete()){
            alert()->error('Xóa thành công');
            return redirect()->route('roles.list');
        } else {
            return redirect()->back()->with('error','Xóa thất bại !!!');
        }
    }
}
