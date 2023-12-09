<?php

namespace App\Providers;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Admin;
use App\Policies\AdminPolicy;
use App\Policies\EmployeePolicy;
use App\Policies\UserPolicy;
use App\Policies\RolePolicy;
use App\Policies\PermissionPolicy;
use App\Policies\DiadiemPolicy;
use App\Policies\TuyenduongPolicy;
use App\Policies\DiemdontraPolicy;
use App\Policies\LotrinhPolicy;
use App\Policies\LoaixePolicy;
use App\Policies\XePolicy;
use App\Policies\ChuyenxePolicy;
use App\Policies\VePolicy;
use App\Policies\DondatvePolicy;
use App\Policies\TintucPolicy;
use App\Policies\SlidePolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        // Dashboard
        Gate::define('list-dashboard', 'App\Policies\AdminPolicy@list');
        //Admin
        Gate::define('list-admin', 'App\Policies\AdminPolicy@view');
        Gate::define('add-admin', 'App\Policies\AdminPolicy@create');
        Gate::define('edit-admin', 'App\Policies\AdminPolicy@update');
        Gate::define('delete-admin', 'App\Policies\AdminPolicy@delete');
        // Nhân viên
        Gate::define('list-employee', 'App\Policies\EmployeePolicy@view');
        Gate::define('add-employee', 'App\Policies\EmployeePolicy@create');
        Gate::define('edit-employee', 'App\Policies\EmployeePolicy@update');
        Gate::define('delete-employee', 'App\Policies\EmployeePolicy@delete');
        // Người dùng
        Gate::define('list-user', 'App\Policies\UserPolicy@view');
        Gate::define('add-user', 'App\Policies\UserPolicy@create');
        Gate::define('edit-user', 'App\Policies\UserPolicy@update');
        Gate::define('delete-user', 'App\Policies\UserPolicy@delete');
        // Role
        Gate::define('list-role', 'App\Policies\RolePolicy@view');
        Gate::define('add-role', 'App\Policies\RolePolicy@create');
        Gate::define('edit-role', 'App\Policies\RolePolicy@update');
        Gate::define('delete-role', 'App\Policies\RolePolicy@delete');
        // Permission
        Gate::define('list-permission', 'App\Policies\PermissionPolicy@view');
        Gate::define('add-permission', 'App\Policies\PermissionPolicy@create');
        // Địa điểm
        Gate::define('list-city', 'App\Policies\DiadiemPolicy@view');
        Gate::define('add-city', 'App\Policies\DiadiemPolicy@create');
        Gate::define('edit-city', 'App\Policies\DiadiemPolicy@update');
        Gate::define('delete-city', 'App\Policies\DiadiemPolicy@delete');
        // Tuyến đường
        Gate::define('list-tuyenduong', 'App\Policies\TuyenduongPolicy@view');
        Gate::define('add-tuyenduong', 'App\Policies\TuyenduongPolicy@create');
        Gate::define('edit-tuyenduong', 'App\Policies\TuyenduongPolicy@update');
        Gate::define('delete-tuyenduong', 'App\Policies\TuyenduongPolicy@delete');
        // Điểm đón trả
        Gate::define('list-diemdontra', 'App\Policies\DiemdontraPolicy@view');
        Gate::define('add-diemdontra', 'App\Policies\DiemdontraPolicy@create');
        Gate::define('edit-diemdontra', 'App\Policies\DiemdontraPolicy@update');
        Gate::define('delete-diemdontra', 'App\Policies\DiemdontraPolicy@delete');
        // Lộ trình
        Gate::define('list-lotrinh', 'App\Policies\LotrinhPolicy@view');
        Gate::define('add-lotrinh', 'App\Policies\LotrinhPolicy@create');
        Gate::define('edit-lotrinh', 'App\Policies\LotrinhPolicy@update');
        Gate::define('delete-lotrinh', 'App\Policies\LotrinhPolicy@delete');
        // Loại xe
        Gate::define('list-loaixe', 'App\Policies\LoaixePolicy@view');
        Gate::define('add-loaixe', 'App\Policies\LoaixePolicy@create');
        Gate::define('edit-loaixe', 'App\Policies\LoaixePolicy@update');
        Gate::define('delete-loaixe', 'App\Policies\LoaixePolicy@delete');
        // Xe
        Gate::define('list-xe', 'App\Policies\XePolicy@view');
        Gate::define('add-xe', 'App\Policies\XePolicy@create');
        Gate::define('edit-xe', 'App\Policies\XePolicy@update');
        Gate::define('delete-xe', 'App\Policies\XePolicy@delete');
        // Chuyến xe
        Gate::define('list-chuyenxe', 'App\Policies\ChuyenxePolicy@view');
        Gate::define('add-chuyenxe', 'App\Policies\ChuyenxePolicy@create');
        Gate::define('edit-chuyenxe', 'App\Policies\ChuyenxePolicy@update');
        Gate::define('delete-chuyenxe', 'App\Policies\ChuyenxePolicy@delete');
        // Vé
        Gate::define('list-ve', 'App\Policies\VePolicy@view');
        Gate::define('add-ve', 'App\Policies\VePolicy@create');
        Gate::define('edit-ve', 'App\Policies\VePolicy@update');
        Gate::define('delete-ve', 'App\Policies\VePolicy@delete');
        // Đơn đặt vé
        Gate::define('list-dondatve', 'App\Policies\DondatvePolicy@view');
        Gate::define('add-dondatve', 'App\Policies\DondatvePolicy@create');
        Gate::define('edit-dondatve', 'App\Policies\DondatvePolicy@update');
        Gate::define('delete-dondatve', 'App\Policies\DondatvePolicy@delete');
        // Tin tức
        Gate::define('list-tintuc', 'App\Policies\TintucPolicy@view');
        Gate::define('add-tintuc', 'App\Policies\TintucPolicy@create');
        Gate::define('edit-tintuc', 'App\Policies\TintucPolicy@update');
        Gate::define('delete-tintuc', 'App\Policies\TintucPolicy@delete');
        // Slide
        Gate::define('list-slide', 'App\Policies\SlidePolicy@view');
        Gate::define('add-slide', 'App\Policies\SlidePolicy@create');
        Gate::define('edit-slide', 'App\Policies\SlidePolicy@update');
        Gate::define('delete-slide', 'App\Policies\SlidePolicy@delete');

    }
}
