<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{route('dashboard')}}">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin</div>
    </a>
    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="{{url('admin/dashboard')}}">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Thống kê</span></a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider">
    <!-- Heading -->
    <!-- Nav Item - Pages Collapse Menu -->
    @can('list-admin')
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsequantri"
            aria-expanded="true" aria-controls="collapsequantri">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>Quản trị</span>
        </a>
        <div id="collapsequantri" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                @can('list-admin')
                <a class="collapse-item" href="{{route('admin.list')}}">Danh sách quản trị</a>
                @endcan
                @can('list-role')
                <a class="collapse-item" href="{{route('roles.list')}}">Danh sách vai trò</a>
                @endcan
                @can('list-permission')
                <a class="collapse-item" href="{{route('permissions.thempermissions')}}">Tạo dữ liệu bảng Permissions</a>
                @endcan
            </div>
        </div>
    </li>
    @endcan
    @can('list-user')
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span>Người dùng</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                @can('list-user')
                <a class="collapse-item" href="{{route('user.list')}}">Thành viên</a>
                @endcan
            </div>
        </div>
    </li>
    @endcan
    <!-- Nav Item - Utilities Collapse Menu -->
    @can('list-chuyenxe')
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fa fa-bus" aria-hidden="true"></i>
            <span>Xe</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                @can('list-employee')
                <a class="collapse-item" href="{{route('employee.list')}}">Nhân viên lái xe</a>
                @endcan
                @can('list-city')
                <a class="collapse-item" href="{{route('location.list')}}">Tỉnh thành</a>
                @endcan
                @can('list-tuyenduong')
                <a class="collapse-item" href="{{route('tuyenduong.list')}}">Tuyến đường</a>
                @endcan
                @can('list-diemdontra')
                <a class="collapse-item" href="{{route('diemdontra.list')}}">Điếm đón trả</a>
                @endcan
                @can('list-lotrinh')
                <a class="collapse-item" href="{{route('route.list')}}">Lộ trình</a>
                @endcan
                @can('list-loaixe')
                <a class="collapse-item" href="{{route('typecar.list')}}">Loại xe</a>
                @endcan
                @can('list-xe')
                <a class="collapse-item" href="{{route('car.list')}}">Xe</a>
                @endcan
                @can('list-chuyenxe')
                <a class="collapse-item" href="{{route('buses.list')}}">Chuyến xe</a>
                @endcan
            </div>
        </div>
    </li>
    @endcan
    @can('list-ve')
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTicket"
            aria-expanded="true" aria-controls="collapseTicket">
            <i class="fa fa-ticket"></i>
            <span>Vé</span>
        </a>
        <div id="collapseTicket" class="collapse" aria-labelledby="headingTicket"
            data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                @can('list-ve')
                <a class="collapse-item" href="{{route('ticket.list')}}">Vé</a>
                @endcan
                @can('list-dondatve')
                <a class="collapse-item" href="{{route('orderticket.list')}}">Đơn đặt vé</a>
                @endcan
            </div>
        </div>
    </li>
    @endcan
    <!-- Nav Item - Pages Collapse Menu -->
    @can('list-tintuc')
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            <span>Tin tức</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                @can('list-tintuc')
                <a class="collapse-item" href="{{route('news.list')}}">Tin tức sự kiện</a>
                <a class="collapse-item" href="{{route('contact.list')}}">Liên hệ</a>
                @endcan
               {{--  @can('list-slide')
                <a class="collapse-item" href="{{route('slide.list')}}">Slide</a>
                @endcan --}}
          </div>
        </div>
    </li>
    @endcan
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
   <!--  <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div> -->
</ul>
