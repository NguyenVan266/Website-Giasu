<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Alert;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        if(session()->has('viewpage')){

        } else {
            $request->session()->put('viewpage','increase views');
            DB::table('viewspage')->increment('viewpage');
        }
        $rememberemail = $request->cookie('rememberemail');
        $rememberpassword = $request->cookie('rememberpassword');
        $tintuc = DB::table('news')->where('active',0)->orderBy('id','desc')->limit(6)->select("*")->get();
        $slide = DB::table('slides')->where('active',0)->get();
        $time = Carbon::now('Asia/Ho_Chi_Minh')->format('Y-m-d');
        // $time = Carbon::now('Asia/Ho_Chi_Minh')->addDays(1)->format('Y-m-d');
        return view('home',[
            'tintuc' => $tintuc,
            'slide' => $slide,
            'time' => $time,
            'rememberemail' => $rememberemail,
            'rememberpassword' => $rememberpassword,       
        ]);
    }
    public function showtintuc($slugnews){
             $tintuc = DB::table("news")
                 ->where("slugnews",$slugnews)
                 ->select("tieude","mota","noidung","created_at")
                 ->get();
             $tintuckhac = DB::table("news")
                 ->where("slugnews","!=",$slugnews)
                 ->orderBy('id', 'desc')
                 ->limit(4)
                 ->select("*")
                 ->get();
            return view('viewtintuc',["tintuc"=>$tintuc,"tintuckhac"=>$tintuckhac]);
    }
    public function tintuc(){
            /* lấy thông tin tin tức*/
                 $tintuc = DB::table("news")
                     ->where('active',0)
                     ->orderBy('id', 'desc')
                     ->paginate(16);
            /* trả về trang tin tức*/
                return view('tintuc',["tintuc"=>$tintuc]);
    }
    public function gioithieu(){
        return view('gioithieu');
    }
    public function lienhe(){
        return view('lienhe');
    }
}
