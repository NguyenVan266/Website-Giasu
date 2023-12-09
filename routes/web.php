<?php
use Carbon\Carbon;
use App\Models\User;
use App\Models\Role;
use App\Models\Diadiem;
use App\Models\Admin_role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\NhanvienController;
use App\Http\Controllers\DiadiemController;
use App\Http\Controllers\LotrinhController;
use App\Http\Controllers\LoaixeController;
use App\Http\Controllers\XeController;
use App\Http\Controllers\ChuyenxeController;
use App\Http\Controllers\VeController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DondatveController;
use App\Http\Controllers\TintucController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\TuyenduongController;
use App\Http\Controllers\DiemdontraController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\CloneController;
use App\Http\Controllers\ContactController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});
*/
Auth::routes();

Route::get('/', [HomeController::class, 'index'])->name('index');
Route::post('datve/chon-chuyen-xe', [BookingController::class, 'chuyenxe'])->name('chuyenxe');
Route::get('/tintuc/{slugnews}',[HomeController::class, 'showtintuc'])->name('viewtintuc');
Route::get('/tintuc',[HomeController::class, 'tintuc'])->name('tintuc');
Route::get('/gioithieu',[HomeController::class, 'gioithieu'])->name('gioithieu');
Route::get('lienhe',[HomeController::class, 'lienhe'])->name('lienhe');
Route::post('/userlogin',[UserController::class, 'login'])->name('user.login');
Route::post('/userlogin2',[UserController::class, 'login2'])->name('user.login2');
Route::post('/userregister',[UserController::class, 'register'])->name('user.register');
Route::post('contact/create', [ContactController::class,'store'])->name('contact.create');


// Route::prefix('admin')->middleware(['auth'])->group(function () {
//     Route::get('/users', [HomeController::class, 'index'])->name('index');
// });
Route::prefix('taikhoan')->middleware(['auth'])->group(function () {
    Route::get('thong-tin', [UserController::class,'profile'])->name('profile');
    Route::post('cap-nhat', [UserController::class,'update'])->name('update');
    Route::post('mat-khau', [UserController::class,'password'])->name('password');
    Route::post('thong-tin/{id}', [UserController::class,'images'])->name('images');
    Route::get('thongtinve', [UserController::class,'thongtinve'])->name('thongtinve');
    Route::get('chitietve', [UserController::class,'chitietve'])->name('chitietve');
    Route::post('huyve', [UserController::class,'huyve'])->name('huyve');
});
Route::prefix('datve/')->middleware(['auth'])->group(function () {
    Route::get('chon-ve/{id}', [BookingController::class, 'getidve'])->name('chonve');
    Route::post('datve', [BookingController::class, 'datve'])->name('datve');
    Route::post('payment/online',[BookingController::class, 'createpayment'])->name('payment.online');
    Route::get('vnpay/return', [BookingController::class, 'vnpayreturn'])->name('vnpay.return');
});
route::get('admin/dangnhap',function(){
    return view('admin.login');
});
Route::post('admin/dangnhap', [AdminController::class, 'login'])->name('admin.login');
Route::prefix('admin')->middleware('admin')->group(function () {
    /*-------------------------------------------------Admin---------------------------------------------------------------*/
    Route::get('dashboard', [AdminController::class,'dashboard'])->name('dashboard')->middleware('can:list-dashboard');
    Route::post('dashboard', [AdminController::class,'dashboardfilter'])->name('dashboardfilter')->middleware('can:list-dashboard');
    Route::post('logout', [AdminController::class,'logout'])->name('dangxuat');
    /*--------------------------------------------------END----------------------------------------------------------------*/
     /*-------------------------------------------------Quản trị----------------------------------------------------------------*/
    Route::get('danhsach/quan-tri-vien', [AdminController::class,'list'])->name('admin.list')->middleware('can:list-admin');
    Route::get('them/quan-tri-vien', [AdminController::class,'themquantri'])->name('admin.themquantri')->middleware('can:add-admin');
    Route::get('sua/thong-tin-quantrivien/{id}', [AdminController::class,'suaquantri'])->name('admin.suaquantri')->middleware('can:edit-admin');
    Route::post('admin/create', [AdminController::class,'create'])->name('admin.create');
    Route::post('admin/update/{id}', [AdminController::class,'update'])->name('admin.update');
    Route::post('admin/destroy', [AdminController::class,'destroy'])->name('admin.destroy')->middleware('can:delete-admin');
    /*--------------------------------------------------END---------------------------------------------------------------*/
     /*-------------------------------------------------Role----------------------------------------------------------------*/
    Route::get('danhsach/vai-tro', [RolesController::class,'list'])->name('roles.list')->middleware('can:list-role');
    Route::get('them/vai-tro', [RolesController::class,'themroles'])->name('roles.themroles')->middleware('can:add-role');
    Route::get('sua/thong-tin-vai-tro/{id}', [RolesController::class,'suaroles'])->name('roles.suavaitro')->middleware('can:edit-role');
    Route::post('role/create', [RolesController::class,'create'])->name('roles.create');
    Route::post('role/update/{id}', [RolesController::class,'update'])->name('roles.update');
    Route::post('role/destroy', [RolesController::class,'destroy'])->name('roles.destroy')->middleware('can:delete-role');
    /*--------------------------------------------------END---------------------------------------------------------------*/
     /*-------------------------------------------------Permission----------------------------------------------------------------*/
    Route::get('them/du-lieu-permission', [PermissionsController::class,'thempermissions'])->name('permissions.thempermissions')->middleware('can:list-permission');
    Route::get('sua/thong-permissions', [PermissionsController::class,'suapermission'])->name('roles.suapermission');
    Route::post('permissions/create', [PermissionsController::class,'create'])->name('permissions.create')->middleware('can:add-permission');
    Route::post('permissions/update', [PermissionsController::class,'update'])->name('permissions.update');
    Route::post('permissions/destroy', [PermissionsController::class,'destroy'])->name('permissions.destroy');
    /*--------------------------------------------------END---------------------------------------------------------------*/
    /*-------------------------------------------------Thành viên----------------------------------------------------------------*/
    Route::get('danhsach/thanh-vien', [AdminUserController::class,'list'])->name('user.list')->middleware('can:list-user');
    Route::post('user/create', [AdminUserController::class,'create'])->name('user.create')->middleware('can:add-user');
    Route::get('sua/thong-tin-khach-hang/{id}', [AdminUserController::class,'edituser'])->name('user.edit')->middleware('can:edit-user');
    Route::post('user/update/{id}', [AdminUserController::class,'update'])->name('user.update');
    Route::post('user/destroy', [AdminUserController::class,'destroy'])->name('user.destroy')->middleware('can:delete-user');
    /*--------------------------------------------------END---------------------------------------------------------------*/
    /*-------------------------------------------------Nhân viên----------------------------------------------------------------*/
    Route::get('danhsach/nhan-vien', [NhanvienController::class,'list'])->name('employee.list')->middleware('can:list-employee');
    Route::post('employee/create', [NhanvienController::class,'create'])->name('employee.create')->middleware('can:add-employee');
    Route::post('employee/update', [NhanvienController::class,'update'])->name('employee.update')->middleware('can:edit-employee');
    Route::post('employee/destroy', [NhanvienController::class,'destroy'])->name('employee.destroy')->middleware('can:delete-employee');
    /*--------------------------------------------------END---------------------------------------------------------------*/
    /*-------------------------------------------------Địa điểm----------------------------------------------------------------*/
    Route::get('danhsach/tinh-thanh', [DiadiemController::class,'list'])->name('location.list')->middleware('can:list-city');
    Route::get('them/tinh-thanh', [DiadiemController::class,'them'])->name('location.them')->middleware('can:add-city');
    Route::post('location/create', [DiadiemController::class,'create'])->name('location.create');
    Route::post('location/update', [DiadiemController::class,'update'])->name('location.update')->middleware('can:edit-city');
    Route::post('location/destroy', [DiadiemController::class,'destroy'])->name('location.destroy')->middleware('can:delete-city');
    /*--------------------------------------------------End---------------------------------------------------------------*/
     /*-------------------------------------------------Tuyến Đường----------------------------------------------------------------*/
    Route::get('danhsach/tuyen-duong', [TuyenduongController::class,'list'])->name('tuyenduong.list')->middleware('can:list-tuyenduong');
    Route::get('them/tuyen-duong', [TuyenduongController::class,'them'])->name('tuyenduong.them')->middleware('can:add-tuyenduong');
    Route::post('tuyenduong/create', [TuyenduongController::class,'create'])->name('tuyenduong.create');
    Route::post('tuyenduong/update', [TuyenduongController::class,'update'])->name('tuyenduong.update')->middleware('can:edit-tuyenduong');
    Route::post('tuyenduong/destroy', [TuyenduongController::class,'destroy'])->name('tuyenduong.destroy')->middleware('can:delete-tuyenduong');
    /*--------------------------------------------------End---------------------------------------------------------------*/
     /*-------------------------------------------------Đón trả----------------------------------------------------------------*/
    Route::get('danhsach/diem-don-tra', [DiemdontraController::class,'list'])->name('diemdontra.list')->middleware('can:list-diemdontra');
    Route::get('them/diem-don-tra', [DiemdontraController::class,'them'])->name('diemdontra.them')->middleware('can:add-diemdontra');
    Route::post('diemdontra/create', [DiemdontraController::class,'create'])->name('diemdontra.create');
    Route::post('diemdontra/update', [DiemdontraController::class,'update'])->name('diemdontra.update')->middleware('can:edit-diemdontra');
    Route::post('diemdontra/destroy', [DiemdontraController::class,'destroy'])->name('diemdontra.destroy')->middleware('can:delete-diemdontra');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Lộ trình----------------------------------------------------------------*/
    Route::get('danhsach/lo-trinh', [LotrinhController::class,'list'])->name('route.list')->middleware('can:list-lotrinh');
    Route::post('route/create', [LotrinhController::class,'create'])->name('route.create')->middleware('can:add-lotrinh');
    Route::post('route/update', [LotrinhController::class,'update'])->name('route.update')->middleware('can:edit-lotrinh');
    Route::post('route/destroy', [LotrinhController::class,'destroy'])->name('route.destroy')->middleware('can:delete-lotrinh');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Loại xe----------------------------------------------------------------*/
    Route::get('danhsach/loai-xe', [LoaixeController::class,'loaixe'])->name('typecar.list')->middleware('can:list-loaixe');
    Route::post('typecar/create', [LoaixeController::class,'create'])->name('typecar.create')->middleware('can:add-loaixe');
    Route::post('typecar/update', [LoaixeController::class,'update'])->name('typecar.update')->middleware('can:edit-loaixe');
    Route::post('typecar/destroy', [LoaixeController::class,'destroy'])->name('typecar.destroy')->middleware('can:delete-loaixe');
    Route::post('typecar/createloaixe', [LoaixeController::class,'createloaixe'])->name('typecar.createloaixe');
    /*--------------------------------------------------End---------------------------------------------------------------*/

    /*-------------------------------------------------Xe----------------------------------------------------------------*/
    Route::get('danhsach/xe', [xeController::class,'list'])->name('car.list')->middleware('can:list-xe');
    Route::get('them/thong-tin-xe', [xeController::class,'themxe'])->name('car.themxe')->middleware('can:add-xe');
    Route::get('sua/thong-tin-xe/{id}', [xeController::class,'suaxe'])->name('car.suaxe')->middleware('can:edit-xe');
    Route::post('car/create', [xeController::class,'create'])->name('car.create');
    Route::post('car/update/{id}', [xeController::class,'update'])->name('car.update');
    Route::post('car/destroy', [xeController::class,'destroy'])->name('car.destroy')->middleware('can:delete-xe');
    Route::get('car/active/{id}', [xeController::class,'active'])->name('car.active');
    Route::get('car/unactive/{id}', [xeController::class,'unactive'])->name('car.unactive');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Chuyến xe----------------------------------------------------------------*/
    Route::get('danhsach/chuyen-xe', [ChuyenxeController::class,'list'])->name('buses.list')->middleware('can:list-chuyenxe');
    Route::post('buses/create', [ChuyenxeController::class,'create'])->name('buses.create')->middleware('can:add-chuyenxe');
    Route::post('buses/update', [ChuyenxeController::class,'update'])->name('buses.update')->middleware('can:edit-chuyenxe');
    Route::post('buses/destroy', [ChuyenxeController::class,'destroy'])->name('buses.destroy')->middleware('can:delete-chuyenxe');
    Route::get('buses/active/{id}', [ChuyenxeController::class,'active'])->name('buses.active');
    Route::get('buses/unactive/{id}', [ChuyenxeController::class,'unactive'])->name('buses.unactive');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------vé----------------------------------------------------------------*/
    Route::get('danhsach/ve', [VeController::class,'list'])->name('ticket.list')->middleware('can:list-ve');
    Route::post('ticket/create', [VeController::class,'create'])->name('ticket.create')->middleware('can:add-ve');
    Route::post('ticket/update', [VeController::class,'update'])->name('ticket.update')->middleware('can:edit-ve');
    Route::post('ticket/destroy', [VeController::class,'destroy'])->name('ticket.destroy')->middleware('can:delete-ve');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------DOn Dat ve----------------------------------------------------------------*/
    Route::get('danhsach/donve', [DondatveController::class,'list'])->name('orderticket.list')->middleware('can:list-dondatve');
    Route::get('xacnhanhuy/{id}', [DondatveController::class,'xacnhanhuy'])->name('xacnhanhuy');
    Route::post('huyve', [DondatveController::class,'huyve'])->name('orderticket.huyve');
    Route::post('updateorder', [DondatveController::class,'updateOrder'])->name('orderticket.update');
    Route::get('tuchoihuy/{id}', [DondatveController::class,'tuchoihuy'])->name('tuchoihuy');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Tin tức----------------------------------------------------------------*/
    Route::get('danhsach/tin-tuc', [TintucController::class,'list'])->name('news.list')->middleware('can:list-tintuc');
    Route::get('sua/tin-tuc/{id}', [TintucController::class,'suatintuc'])->name('news.suatintuc')->middleware('can:edit-tintuc');
    Route::post('news/create', [TintucController::class,'create'])->name('news.create')->middleware('can:edit-tintuc');
    Route::post('news/update/{id}', [TintucController::class,'update'])->name('news.update');
    Route::post('news/destroy', [TintucController::class,'destroy'])->name('news.destroy')->middleware('can:delete-tintuc');
    Route::get('news/active/{id}', [TintucController::class,'active'])->name('news.active');
    Route::get('news/unactive/{id}', [TintucController::class,'unactive'])->name('news.unactive');
    Route::get('news/slide/{id}', [TintucController::class,'slide'])->name('news.slide');
    Route::get('news/unslide/{id}', [TintucController::class,'unslide'])->name('news.unslide');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Liên hệ----------------------------------------------------------------*/
    Route::get('danhsach/lien-he', [ContactController::class,'index'])->name('contact.list')->middleware('can:list-tintuc');
    Route::get('sua/lien-he/{id}', [ContactController::class,'edit'])->name('contact.suatintuc')->middleware('can:edit-tintuc');
    Route::post('contact/update/{id}', [ContactController::class,'update'])->name('contact.update');
    Route::post('contact/destroy', [ContactController::class,'destroy'])->name('contact.destroy')->middleware('can:delete-tintuc');
    /*--------------------------------------------------End---------------------------------------------------------------*/
    /*-------------------------------------------------Slide----------------------------------------------------------------*/
    Route::get('danhsach/slide', [SlideController::class,'list'])->name('slide.list')->middleware('can:list-slide');
    Route::get('sua/slide/{id}', [SlideController::class,'editslide'])->name('slide.editslide')->middleware('can:edit-slide');
    Route::post('slide/create', [SlideController::class,'create'])->name('slide.create')->middleware('can:add-slide');
    Route::post('slide/update/{id}', [SlideController::class,'update'])->name('slide.update');
    Route::post('slide/destroy', [SlideController::class,'destroy'])->name('slide.destroy')->middleware('can:delete-slide');
    Route::get('slide/active/{id}', [SlideController::class,'active'])->name('slide.active');
    Route::get('slide/unactive/{id}', [SlideController::class,'unactive'])->name('slide.unactive');
    /*--------------------------------------------------End---------------------------------------------------------------*/
});
/*--------------------------------------------------Clone---------------------------------------------------------------*/
    Route::get('clone/quantri', [CloneController::class,'listquantri'])->name('clone.listquantri');
    Route::get('clone/themquantri', [CloneController::class,'themquantri'])->name('clone.themquantri');
    Route::post('clone/createquantri', [CloneController::class,'createquantri'])->name('clone.createquantri');
    Route::get('clone/suaquantri/{id}', [CloneController::class,'suaquantri'])->name('clone.suaquantri');
    Route::post('clone/update/{id}', [CloneController::class,'updatequantri'])->name('clone.updatequantri');
    Route::get('clone/vaitro', [CloneController::class,'listvaitro'])->name('clone.listvaitro');
    Route::get('clone/themvaitro', [CloneController::class,'themvaitro'])->name('clone.themvaitro');
    Route::post('clone/createvaitro', [CloneController::class,'createvaitro'])->name('clone.createvaitro');
    Route::get('clone/permissions', [CloneController::class,'thempermissions'])->name('clone.thempermissions');
    Route::post('clone/thempermissions', [CloneController::class,'createpermissions'])->name('clone.createpermissions');
    /*--------------------------------------------------End---------------------------------------------------------------*/
/*Create Admin*/
route::get('admin/create',function(){
    $admin = New User;
    $admin->name = 'Admin';
    $admin->email = 'admin@gmail.com';
    $admin->password = hash::make('admin');
    $admin->level = 1;
    $admin->save();
    return view ('admin.login');
});
/*END*/
route::get('test',function(){
$time = Carbon::now('Asia/Ho_Chi_Minh')->format('d-m-Y');
dd($time);
});

route::get('createtinhthanh',function(){
    $tinhthanh = [
        'An Giang',
        'Bà Rịa - Vũng Tàu',
        'Bắc Giang',
        'Bắc Kạn',
        'Bạc Liêu',
        'Bắc Ninh',
        'Bến Tre',
        'Bình Định',
        'Bình Dương',
        'Bình Phước',
        'Bình Thuận',
        'Cà Mau',
        'Cao Bằng',
        'Đắk Lắk',
        'Đắk Nông',
        'Điện Biên',
        'Đồng Nai',
        'Đồng Tháp',
        'Gia Lai',
        'Hà Giang',
        'Hà Nam',
        'Hà Tĩnh',
        'Hải Dương',
        'Hậu Giang',
        'Hòa Bình',
        'Hưng Yên',
        'Khánh Hòa',
        'Kiên Giang',
        'Kon Tum',
        'Lai Châu',
        'Lâm Đồng',
        'Lạng Sơn',
        'Lào Cai',
        'Long An',
        'Nam Định',
        'Nghệ An',
        'Ninh Bình',
        'Ninh Thuận',
        'Phú Thọ',
        'Quảng Bình',
        'Quảng Nam',
        'Quảng Ngãi',
        'Quảng Ninh',
        'Quảng Trị',
        'Sóc Trăng',
        'Sơn La',
        'Tây Ninh',
        'Thái Bình',
        'Thái Nguyên',
        'Thanh Hóa',
        'Thừa Thiên Huế',
        'Tiền Giang',
        'Trà Vinh',
        'Tuyên Quang',
        'Vĩnh Long',
        'Vĩnh Phúc',
        'Yên Bái',
        'Phú Yên',
        'Cần Thơ',
        'Đà Nẵng',
        'Hải Phòng',
        'Hà Nội',
        'TP HCM',
    ];
    for($i=0;$i<63; $i++){
        $test = DB::table('diadiem')->insert([
            'tendiadiem' => $tinhthanh[$i]
        ]);
   }
    return redirect()->route('admin.login');
});
