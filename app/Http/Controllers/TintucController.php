<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
use App\Models\Tintuc;
class TintucController extends Controller
{
    public function list()
     {
        $adminUser = Auth::guard('web')->user();
        $news = DB::table('news')->get();
            return view('admin.tintuc.tintuc',[
                'news'=>$news,
                'user'=>$adminUser
        ]);
    }
     public function create(Request $request) {
            $news = new Tintuc;
            $news->tieude  = $request['tieude'];
            $news->slugnews  = $request['slugnews'];
            $news->mota  = $request['mota'];
            $news->noidung  = $request['noidung'];
            $news->nguoidang  = $request['nguoidang'];
            $news->active  = $request['active'];
            if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/tintuc/',$filename);
            $news->image = $filename;
            } else {
            return $request;
            $news->image = '';
            }
            $news->save();
            alert()->success('Thêm mới thành công');
            return redirect()->route('news.list');
    }
    public function suatintuc($id)
     {
        $adminUser = Auth::guard('web')->user();
        $news = Tintuc::find($id);
            return view('admin.tintuc.edittintuc',[
                'news' => $news,
                'user'=>$adminUser,
        ]);
    }
    public function update(Request $request,$id) {
            $news = Tintuc::find($id);
            $news->tieude = $request['tieude'];
            $news->slugnews = $request['slugnews'];
            $news->mota = $request['mota'];
            $news->noidung = $request['noidung'];
            $news->nguoisua = $request['nguoisua'];
            $news->active = $request['active'];
            if ($request->hasfile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/tintuc/',$filename);
                $news->image = $filename;
            } else {
            return $request;
            $news->image = '';
            }
            $news->save();
            alert()->success('Cập nhật thành công');
            return redirect()->route('news.list');
        }
     public function destroy(Request $news) {
            $deletenews = $news->all();
            $deletenews = Tintuc::findOrfail($news->id);
            if (
            $deletenews->delete()){
            alert()->success('Xóa thành công');
            return redirect()->route('news.list');
        } else {
            alert()->success('Xóa thất bại');
            return redirect()->back();
        }
    }
    public function active($id) {
        DB::table('news')->where('id',$id)->update(['active'=>0]);
        alert()->success('Thay đổi từ ẩn sang hiện');
        return redirect()->back();
    }
    public function unactive($id) {
        DB::table('news')->where('id',$id)->update(['active'=>1]);
        alert()->success('Thay đổi từ hiện sang ẩn');
        return redirect()->back();
    }
    public function slide($id) {
        DB::table('news')->where('id',$id)->update(['slide'=>0]);
        session()->flash('success','Thay đổi không kích hoạt sang kích hoạt');
        return redirect()->back();
    }
    public function unslide($id) {
        DB::table('news')->where('id',$id)->update(['slide'=>1]);
        session()->flash('success','Thay đổi kích hoạt sang không kích hoạt');
        return redirect()->back();
    }
}
