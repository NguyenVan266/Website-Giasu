<?php

namespace App\Http\Controllers;
use App\Models\Chuyenxe;
use App\Models\Ve;
use App\Models\Xe;
use Carbon\Carbon;
use App\Models\Dondatve;
use App\Models\User;
use App\Models\Nhanvien;
use App\Models\Lotrinh;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Alert;
class BookingController extends Controller
{
    public function chuyenxe(Request $request){
        $time = Carbon::now('Asia/Ho_Chi_Minh')->format('Y-m-d');
        $formatdate = date('Y-m-d',strtotime($request->searchdate));
        $location = DB::table('diadiem')->get();
        $data['diemdi'] = $request->searchdiemdi;
        $data['diemden'] = $request->searchdiemden;
        $data['date'] = $formatdate;
        session(['search' => $data]);
        $searchdiemdi = $request->searchdiemdi;
        $searchdiemden = $request->searchdiemden;
        $diemdi = $request->diemdi;
        $diemden = $request->diemden;
        $date = $request->date;
        $tramdung = $request->tramdung;
        $nhaxe = $request->nhaxe;
        $loaicho = $request->loaicho;
        // dd($date);
        // $chuyenxe = Chuyenxe::with('lotrinh','xe','nhanvien','tuyenduong')->get();
        // foreach ($chuyenxe as $value) {
        //     $check = $value->lotrinh->tuyenduong->diemdi;
        // }
        // dd($check);
        if($request->searchdiemdi && $request->searchdiemden && $formatdate) {
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$searchdiemdi)->where('tuyenduong.diemden','=',$searchdiemden)->where('lotrinh.ngaydi','=',$formatdate)->where('lotrinh.ngaydi','>',$time)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
               $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$searchdiemdi)->where('tuyenduong.diemden','=',$searchdiemden)->where('lotrinh.ngaydi','=',$formatdate)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
               $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$searchdiemdi)->where('tuyenduong.diemden','=',$searchdiemden)->where('lotrinh.ngaydi','=',$formatdate)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
               // dd($countxe);
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
                'time' => $time,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->tramdung && $request->nhaxe && $request->loaicho) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('lotrinh.tramdung','=',$tramdung)->where('xe.tenxe','=',$nhaxe)->where('loaixe.tenloaixe','=',$loaicho)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->tramdung && $request->nhaxe) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('lotrinh.tramdung','=',$tramdung)->where('xe.tenxe','=',$nhaxe)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->nhaxe && $request->loaicho) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('xe.tenxe','=',$nhaxe)->where('loaixe.tenloaixe','=',$loaicho)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->tramdung  && $request->loaicho) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('lotrinh.tramdung','=',$tramdung)->where('loaixe.tenloaixe','=',$loaicho)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->tramdung) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('lotrinh.tramdung','=',$tramdung)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->nhaxe) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('xe.tenxe','=',$nhaxe)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        elseif ($request->diemdi && $request->diemden && $request->date && $request->loaicho) {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->where('loaixe.tenloaixe','=',$loaicho)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            $filterxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('xe.tenxe')->distinct()->get();
            $filtertramdung  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->join('xe','chuyenxe.id_xe','=','xe.id')->where('tuyenduong.diemdi','=',$diemdi)->where('tuyenduong.diemden','=',$diemden)->where('lotrinh.ngaydi','=',$date)->where('lotrinh.ngaydi','>',$time)->select('lotrinh.tramdung')->distinct()->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'filterxe' =>$filterxe,
                'filtertramdung' =>$filtertramdung,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
        else {
            $data['diemdi'] = $request->diemdi;
            $data['diemden'] = $request->diemden;
            $data['date'] = $request->date;
            session(['search' => $data]);
            $chuyenxe  = DB::table('chuyenxe')->where('chuyenxe.trangthai',1)->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')->join('xe','chuyenxe.id_xe','=','xe.id')->join('loaixe','xe.id_loaixe','=','loaixe.id')->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')->where('tuyenduong.diemdi','=',$request->diemdi)->where('tuyenduong.diemden','=',$request->diemden)->where('lotrinh.ngaydi','=',$formatdate)->where('lotrinh.ngaydi','>',$time)->select('chuyenxe.id','chuyenxe.id_xe','chuyenxe.id_lotrinh','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.soluongghe','xe.anhxe','xe.tenxe','xe.bienso','lotrinh.tramdung')->get();
            return view('booking.chuyenxe',[
                'chuyenxe' =>$chuyenxe,
                'searchdate' =>$formatdate,
                'search' => $data,
                'searchdiemdi' =>$searchdiemdi,
                'searchdiemden' =>$searchdiemden,
                'location' =>$location,
            ]);
        }
    }
    public function getidve($id){
        $chonve = DB::table('chuyenxe')
                    ->join('lotrinh','chuyenxe.id_lotrinh','=','lotrinh.id')
                    ->join('xe','chuyenxe.id_xe','=','xe.id')
                    ->join('loaixe','xe.id_loaixe','=','loaixe.id')
                    ->join('nhanvien','chuyenxe.id_nhanvien','=','nhanvien.id')
                    ->join('tuyenduong','lotrinh.id_tuyenduong','=','tuyenduong.id')
                    ->where('chuyenxe.id','=',$id)
                    ->select('chuyenxe.id','tuyenduong.diemdi','tuyenduong.diemden','lotrinh.thoigiandi','lotrinh.thoigianden','lotrinh.ngaydi','lotrinh.ngayden','chuyenxe.giave','loaixe.tenloaixe','loaixe.sodo','loaixe.sohang','loaixe.socot','nhanvien.tennv','xe.tenxe','xe.bienso','chuyenxe.id_xe','lotrinh.tramdung','lotrinh.id_tuyenduong')
                    ->get();
        $ve = DB::table('chuyenxe')
                    ->join('ve','chuyenxe.id','=','ve.id_chuyenxe')
                    ->where('chuyenxe.id','=',$id)
                    ->select('ve.vitrighe','ve.trangthai','ve.id','ve.id_user','ve.mave')
                    ->get();
        return view ('booking.chonve',[
            'chonve' => $chonve,
            've' => $ve,
            ]
    );
    }
    public function datve(request $request)
    {
        $giave = $request->sum;
        $book = $request->datve;
        $user = Auth::user()->id;
        $id_xe = $request->id_xe;
        $id_chuyenxe = $request->id_chuyenxe;
        $soghe = $request->soghe;
        /*session*/
        $data['sove'] = $request->soghe;
        $data['hangxe'] = $request->hangxe;
        $data['diemdi'] = $request->diemdi;
        $data['diemden'] = $request->diemden;
        $data['diemdon'] = $request->diemdon;
        $data['diemtra'] = $request->diemtra;
        $data['bienso'] = $request->bienso;
        $data['tramdung'] = $request->tramdung;
        $data['loaixe'] = $request->loaixe;
        $data['laixe'] = $request->laixe;
        $data['khoihanh'] = $request->khoihanh;
        $data['tongtien'] = $request->tongtien;
        session(['thanhtoantienmat'=> $data]);
        /*ENd*/

        /**/
        if($request->payment==1 && $request->datve && $request->diemdon && $request->diemtra){
        $dondatve = New dondatve;
        $dondatve->id_xe = $id_xe;
        $dondatve->id_user = $user;
        $dondatve->id_chuyenxe = $id_chuyenxe;
        $dondatve->diemdon = $request->diemdon;
        $dondatve->diemtra = $request->diemtra;
        $dondatve->vitri = $soghe;
        $dondatve->soluongve = count($request->datve);
        $dondatve->tongtien = $request->tongtien;
        $dondatve->trangthai = 0;
        $dondatve->destroy = 3;
        $dondatve->created_at = Carbon::now('Asia/Ho_Chi_Minh');
        $dondatve->save();
        alert()->success('Đặt vé thành công');
        /**/
            foreach ($book as $book) {
                $datasave = [
                    'id_user' => $user,
                    'trangthai' => 2,
                    'id_donhang' => $dondatve->id,
                ];
                DB::table('ve')->where('id',$book)->update($datasave);
            }
            return view('booking.thongbao',compact('data','dondatve'));
            }

            elseif ($request->payment==2 && $request->datve && $request->diemdon && $request->diemtra){
                $user = Auth::user()->id;
                $data['book'] = $request->datve;
                $data['id_xe'] = $request->id_xe;
                $data['id_chuyenxe'] = $request->id_chuyenxe;
                $data['id_user'] = $user;
                $data['diemdon'] = $request->diemdon;
                $data['diemtra'] = $request->diemtra;
                $data['bienso'] = $request->bienso;
                $data['vitri'] = $request->soghe;
                $data['soluongve'] = count($request->datve);
                $data['totalmoney'] = $request->tongtien;
                session(['datve'=> $data]);
                $totalmoney = $request->tongtien;
                return view('vnpay.index',compact('totalmoney'));
            } else {
                alert()->error('Bạn chưa chọn vị trí ghế, điểm đón, điểm trả hoặc phương thức thanh toán');
                return back()->withInput();
        }
    }
    public function thanhtoan() {
        return view('booking.thongbao');
    }
    public function createpayment(Request $request){
        $vnp_TxnRef = $request['order_id']; //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = $request['order_desc'];
        $vnp_OrderType = $request['order_type'];
        $vnp_Amount = $request->input('amount')*100;
        $vnp_Locale = $request['language'];
        $vnp_BankCode = $request['bank_code'];
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];

        $inputData = array(
            "vnp_Version" => "2.0.0",
            "vnp_TmnCode" => env('vnp_TmnCode'),
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => route('vnpay.return'),
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . $key . "=" . $value;
            } else {
                $hashdata .= $key . "=" . $value;
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = env('vnp_Url') . "?" . $query;
        if (env('vnp_HashSecret')) {
           // $vnpSecureHash = md5($vnp_HashSecret . $hashdata);
            $vnpSecureHash = hash('sha256', env('vnp_HashSecret') . $hashdata);
            $vnp_Url .= 'vnp_SecureHashType=SHA256&vnp_SecureHash=' . $vnpSecureHash;
        }
        return redirect($vnp_Url);
    }
    public function vnpayreturn(Request $request) {
        if (session()->has('datve') && $request->vnp_ResponseCode == '00'){
                $vnpaydata = $request->all();
                $data = session()->get('datve');
                $dondatve = New dondatve;
                    if ($dondatve) {
                    $dondatve->id_xe = $data['id_xe'];
                    $dondatve->id_user = $data['id_user'];
                    $dondatve->id_chuyenxe = $data['id_chuyenxe'];
                    $dondatve->diemdon = $data['diemdon'];
                    $dondatve->diemtra = $data['diemtra'];
                    $dondatve->vitri = $data['vitri'];
                    $dondatve->soluongve = $data['soluongve'];
                    $dondatve->tongtien = $data['totalmoney'];
                    $dondatve->trangthai = 1;
                    $dondatve->destroy = 3;
                    $dondatve->created_at = Carbon::now('Asia/Ho_Chi_Minh');
                    $dondatve->save();

                    $datapayment = [
                        'p_dondatve_id' => $dondatve->id,
                        'p_dondatve_code' => $vnpaydata['vnp_TxnRef'],
                        'p_user_id' => $data['id_user'],
                        'p_money' => $data['totalmoney'],
                        'p_note' => $vnpaydata['vnp_OrderInfo'],
                        'p_vnp_response_code' => $vnpaydata['vnp_ResponseCode'],
                        'p_code_vnp' => $vnpaydata['vnp_TransactionNo'],
                        'p_code_bank' => $vnpaydata['vnp_BankCode'],
                        'p_time' => date('Y-m-d H:i', strtotime($vnpaydata['vnp_PayDate'])),

                    ];
                    DB::table('payments')->insert($datapayment);
                    foreach ($data['book'] as $book) {
                        $datasave = [
                            'id_user' => $data['id_user'],
                            'trangthai' => 3,
                            'id_donhang' => $dondatve->id,
                        ];
                        DB::table('ve')->where('id',$book)->update($datasave);
                    }

                    session()->flash('success',[
                        'type' => 'success',
                        'message' => 'Đơn hàng thanh toán thành công'
                    ]);
            session()->forget('datve');
            alert()->success('Đặt vé thành công');
            return view('vnpay.return',compact('vnpaydata'));
            } else {
                return redirect()->to('/');
            }
        } else {
        return redirect()->to('/');
        }
    }
}

