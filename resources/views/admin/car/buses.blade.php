<style>
body {
    font-family: 'Varela Round', sans-serif;
}
.modal-confirm {
    color: #636363;
    width: 400px;
}
.modal-confirm .modal-content {
    padding: 20px;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-size: 14px;
}
.modal-confirm .modal-header {
    border-bottom: none;
    position: relative;
}
.modal-confirm h4 {
    text-align: center;
    font-size: 26px;
    margin: 30px 0 -10px;
}
.modal-confirm .close {
    position: absolute;
    top: -5px;
    right: -2px;
}
.modal-confirm .modal-body {
    color: #999;
}
.modal-confirm .modal-footer {
    border: none;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    padding: 10px 15px 25px;
}
.modal-confirm .modal-footer a {
    color: #999;
}
.modal-confirm .icon-box {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    z-index: 9;
    text-align: center;
    border: 3px solid #f15e5e;
}
.modal-confirm .icon-box i {
    color: #f15e5e;
    font-size: 46px;
    display: inline-block;
    margin-top: 13px;
}
.modal-confirm .btn, .modal-confirm .btn:active {
    color: #fff;
    border-radius: 4px;
    background: #60c7c1;
    text-decoration: none;
    transition: all 0.4s;
    line-height: normal;
    min-width: 120px;
    border: none;
    min-height: 40px;
    border-radius: 3px;
    margin: 0 5px;
}
.modal-confirm .btn-secondary {
    background: #c1c1c1;
}
.modal-confirm .btn-secondary:hover, .modal-confirm .btn-secondary:focus {
    background: #a8a8a8;
}
.modal-confirm .btn-danger {
    background: #f15e5e;
}
.modal-confirm .btn-danger:hover, .modal-confirm .btn-danger:focus {
    background: #ee3535;
}
.trigger-btn {
    display: inline-block;
    margin: 100px auto;
}
</style>
@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
<div class="container-fluid">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách chuyến xe</h6>
                            <br>
                            @if(session('success'))
                            <div class="alert alert-success" role="alert">
                            {{session('success')}}
                            </div>
                            @endif
                            @if(session('error'))
                            <div class="alert alert-danger" role="alert">
                            {{session('error')}}
                            </div>
                            @endif
                        </div>
                        @can('add-chuyenxe')
                        <div class="col-sm-6" style="margin-top: 10px;">
                            <a href="#addbusesModal" class="btn btn-success" data-toggle="modal"><i class="material-icons"></i> <span>Thêm chuyến xe</span></a>
                        </div>
                        @endcan
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Lộ trình</th>
                                            <th>Lái xe</th>
                                            <th>Nhà xe</th>
                                            <th>Giá vé</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($buses as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>

                                            <td>{{$list->lotrinh->tuyenduong->diemdi}} -> {{$list->lotrinh->tuyenduong->diemden}}</td>
                                            <td>{{$list->nhanvien->tennv}}</td>
                                            <td>{{$list->xe->tenxe}}</td>
                                            <td>{{$list->giave}}</td>
                                            <td>
                                                @can('edit-chuyenxe')
                                                @if ($list->trangthai==1)
                                                    <a href="{{route('buses.unactive',$list->id)}}" class="alert-success active" style="text-decoration: none;color: black;">
                                                        Hoạt động
                                                    </a>
                                                @else
                                                    <strong class="alert-danger">
                                                        <a href="{{route('buses.active',$list->id)}}" class="alert-danger unactive" style="text-decoration: none;color: black;">
                                                            Không hoạt động
                                                        </a>
                                                    </strong>
                                                @endif
                                                @endcan
                                            </td>
                                            <td>
                                                <ul class="list-inline m-0">
                                                    @can('edit-chuyenxe')
                                                    <li class="list-inline-item">
                                                        <a  href="#" data-id="{{$list->id}}" data-id_lotrinh="{{$list->id_lotrinh}}" data-id_nhanvien="{{$list->id_nhanvien}}" data-id_xe="{{$list->id_xe}}" data-giave="{{$list->giave}}" data-trangthai="{{$list->trangthai}}"
                                                            data-target="#editbusesModal" data-toggle="modal" class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>
                                                    </li>
                                                    @endcan
                                                    {{-- <li class="list-inline-item">
                                                        <a href="javascrip:void(0)" onclick="edituser({{$list->id}})"  class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>

                                                    </li> --}}
                                                    @can('delete-chuyenxe')
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#dlbusesModal" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                                                    </li>
                                                    @endcan
                                                </ul>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{{-- modal add user --}}
<div class="modal" id="addbusesModal">
    <form id="addform" method="POST" action="{{route('buses.create')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Thêm chuyến xe</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                    <div class="form-group row">
                        <label for="id_lotrinh" class="col-md-4 col-form-label text-md-right">Lộ trình</label>
                         <select name="id_lotrinh" id="id_lotrinh" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn lộ trình</option>
                          @php
                          $route = App\Models\Lotrinh::with('tuyenduong')->get();
                          @endphp
                          @foreach ($route as $route)
                          <option value="{{$route->id}}" name="id_lotrinh"> {{$route->tuyenduong->diemdi}} -> {{$route->tuyenduong->diemden}} </option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="id_xe" class="col-md-4 col-form-label text-md-right">Xe</label>
                         <select name="id_xe" id="id_xe" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn xe</option>
                          @php
                            $car = App\Models\Xe::with('loaixe')->get();;
                          @endphp
                          @foreach ($car as $car)
                          <option value="{{$car->id}}" data-id= "{{$car->loaixe->soluongghe}}" name="id_xe">{{$car->tenxe}}</option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="id_nhanvien" class="col-md-4 col-form-label text-md-right">Nhân viên</label>
                         <select name="id_nhanvien" id="id_nhanvien" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn nhân viên</option>
                          @php
                          $employee = App\Models\Nhanvien::all();
                          @endphp
                          @foreach ($employee as $employee)
                          <option value="{{$employee->id}}" name="id_nhanvien">{{$employee->tennv}}</option>
                          @endforeach
                        </select>
                    </div>
                    <input type="hidden" id="soghe" name="soghe" value="">
                    <div class="form-group row">
                        <label for="giave" class="col-md-4 col-form-label text-md-right">Giá vé</label>
                            <div class="col-md-6">
                                <input id="giave" type="text" class="form-control" name="giave">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Trạng thái</label>
                         <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected disabled>Chọn loại trạng thái</option>
                          <option value="1" name="trangthai">Hoạt động</option>
                          <option value="2" name="trangthai">Không hoạt động</option>
                        </select>
                    </div>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
          <button type="submit" class="btn btn-success">Thêm</button>
        </div>
      </div>
    </div>
    </form>
</div>
{{-- modal edit user --}}
<div class="modal" id="editbusesModal">
    <form method="POST" action="{{route('buses.update')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Chỉnh sửa chuyến xe</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                <input type="hidden" name="id" id="id">
                    <div class="form-group row">
                        <label for="id_lotrinh" class="col-md-4 col-form-label text-md-right">Lộ trình</label>
                         <select name="id_lotrinh" id="id_lotrinh" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn lộ trình</option>
                          @php
                          $route = App\Models\Lotrinh::with('tuyenduong')->get();
                          @endphp
                          @foreach ($route as $route)
                          <option value="{{$route->id}}" name="id_lotrinh"> {{$route->tuyenduong->diemdi}} -> {{$route->tuyenduong->diemden}} </option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="id_nhanvien" class="col-md-4 col-form-label text-md-right">Nhân viên</label>
                         <select name="id_nhanvien" id="id_nhanvien" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn nhân viên</option>
                          @php
                          $employee = App\Models\Nhanvien::all();
                          @endphp
                          @foreach ($employee as $employee)
                          <option value="{{$employee->id}}" name="id_nhanvien">{{$employee->tennv}}</option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="id_xe" class="col-md-4 col-form-label text-md-right">Xe</label>
                         <select name="id_xe" id="id_xe" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn xe</option>
                          @php
                          $car = App\Models\Xe::all();
                          @endphp
                          @foreach ($car as $car)
                          <option value="{{$car->id}}" name="id_xe">{{$car->tenxe}}</option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="giave" class="col-md-4 col-form-label text-md-right">Giá vé</label>
                            <div class="col-md-6">
                                <input id="giave" type="text" class="form-control" name="giave">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Trạng thái</label>
                         <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected disabled>Chọn loại trạng thái</option>
                          <option value="1" name="trangthai">Hoạt động</option>
                          <option value="2" name="trangthai">Không hoạt động</option>
                        </select>
                    </div>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
          <button type="submit" class="btn btn-success">Sửa</button>
        </div>
      </div>
    </div>
    </form>
</div>
{{-- modal delete user --}}
<div id="dlbusesModal" class="modal fade">
    <form action="{{route('buses.destroy')}}" method="POST">
    @csrf
    <div class="modal-dialog modal-confirm">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xE5CD;</i>
                </div>
                <h4 class="modal-title w-100">Bạn có chắc không ?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="id" name="id">
                <p>Bạn có thực sự muốn xóa các bản ghi này không? Không thể hoàn tác quá trình này.</p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                <button type="submit" class="btn btn-danger">Xóa</button>
            </div>
        </div>
    </div>
    </form>
</div>
</div>
@endsection
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
{{-- <script>
    $(document).ready(function(){
        $('#addform').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "{{route('buses.create')}}",
                data: $('#addform').serialize(),
                success: function(response){
                    console.log(response)
                    $('#addbusesModal').modal('hide')

                    location.reload();
                },
                error: function(error){
                    console.log(error)

                }
            });
        });
    });
</script> --}}
@section('script')
<script type="text/javascript">

    $(document).ready(function(){
         $('#id_xe').change(function(){
          var soghe = $(this).find(':selected').attr('data-id')
           $('#soghe').val(soghe);
         });
    });
</script>

@endsection
