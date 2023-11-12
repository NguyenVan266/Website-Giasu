<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
use App\Models\Slide;
class SlideController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $slide = DB::table('slides')->get();
            return view('admin.tintuc.slide',[
                'slide'=>$slide,
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $slide = new Slide;
            $slide->active  = $request['active'];
            if ($request->hasfile('slide')) {
            $file = $request->file('slide');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/slide/',$filename);
            $slide->slide = $filename;
            } else {
            return $request;
            $slide->slide = '';
            }
            $slide->save();
            return redirect()->route('slide.list')->with('success','Thêm mới thành công');
    }
    public function editslide($id)
     {
        $adminUser = Auth::guard('web')->user();
        $slide = Slide::find($id);
            return view('admin.tintuc.editslide',[
                'slide' => $slide,
                'user'=>$adminUser,
        ]);
    }
    public function update(Request $request,$id) {
            $slide = Slide::find($id);
            $slide->active = $request['active'];
            if ($request->hasfile('slide')) {
                $file = $request->file('slide');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/slide/',$filename);
                $slide->slide = $filename;
            } else {
            return $request;
            $slide->slide = '';
            }
            $slide->save();
            return redirect()->route('slide.list')->with('success','Chỉnh sửa thành công');
        }
     public function destroy(Request $slide) {
            $deleteslide = $slide->all();
            $deleteslide = Slide::findOrfail($slide->id);
            if (
            $deleteslide->delete()){
            return redirect()->route('slide.list')->with('success','Xóa thành công');
        } else {
            return redirect()->back()->with('error','Xóa thất bại !!!');
        }
    }
    public function active($id) {
        DB::table('slides')->where('id',$id)->update(['active'=>0]);
        session()->flash('success','Thay đổi từ ẩn sang hiện');
        return redirect()->back();
    }
    public function unactive($id) {
        DB::table('slides')->where('id',$id)->update(['active'=>1]);
        session()->flash('success','Thay đổi từ hiện sang ẩn');
        return redirect()->back();
    }
}
