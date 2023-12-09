@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
@can('list-dondatve')
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Thống kê</h1>
</div>
<div class="col-md-2 mb-4">
    <form action="{{route('dashboardfilter')}}" method="POST">
        @csrf
        <select class="dashboard-filter form-control" name="filter" onchange="change()">
            <option disabled="">>--Chọn--<</option>
            <option value="7ngayqua" @if($filter=='7 Ngày qua')selected @endif  >7 Ngày qua</option>
            <option value="thangtruoc" @if($filter=='Tháng trước')selected @endif>Tháng trước</option>
            <option value="thangnay" @if($filter=='Tháng này')selected @endif>Tháng này</option>
            <option value="365ngayqua" @if($filter=='1 Năm qua')selected @endif>1 Năm qua</option>
            <option value="tong" @if($filter=='Tổng')selected @endif>Tổng</option>
        </select>
    </form>
</div>
<div class="row">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Người dùng {{$filter}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">Người dùng: {{$users}}</div>
                        {{-- <div class="h5 mb-0 font-weight-bold text-gray-800">Nhân viên: {{$employee}}</div> --}}
                    </div>
                    {{-- <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Nhà xe {{$filter}}</div>

                        <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{$xe}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Chuyến xe {{$filter}}
                        </div>
                        <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">Số chuyến: {{$chuyenxe}}</div>
                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">Đã đi: {{$chuyenxedadi}} </div>
                            </div>
                        </div>
                    </div>
                    {{-- <div class="col-auto">
                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div> --}}
                </div>
            </div>
        </div>
    </div>

    <!-- Pending Requests Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Số vé {{$filter}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">Số vé: {{$ve}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">Đã bán: {{$vedaban}}</div>
                        @if($veconlai)
                        <div class="h5 mb-0 font-weight-bold text-gray-800">Tồn: {{$veconlai}}</div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                            Tổng thu nhập {{$filter}}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800" id="money"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <!-- Footer -->
    <footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright &copy; Đinh Huy Hoàng</span>
            </div>
        </div>
    </footer>
    <!-- End of Footer -->

</div>
@endcan
@endsection
@section('script')
    <script>

        // function change(){
        //     var dashboardfilter = document.querySelector('.dashboard-filter').value;
        //     alert(dashboardfilter)
        // }


        $(document).ready(function(){
            $('.dashboard-filter').change(function(){
                $(this).closest('form').submit();
                // var dashboardfilter = $(this).val();
                // var _token = $('input[name="_token"]').val();
                // alert(dashboardfilter);
            });
        })
    </script>
    <script type="text/javascript">
    var money = {{$thunhap}};
    var money = money.toString();
    var format = money.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    document.getElementById('money').innerHTML = `${format} VNĐ`;
</script>
@endsection
