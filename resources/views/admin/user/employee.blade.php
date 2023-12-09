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
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách nhân viên</h6>
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
                        @can('add-employee')
                        <div class="col-sm-6" style="margin-top: 10px;">
                            <a href="#addemployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons"></i> <span>Thêm mới nhân viên</span></a>
                        </div>
                        @endcan
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Tên nhân viên</th>
                                            <th>Chứng minh thư</th>
                                            <th>Bằng lái</th>
                                            <th>Giới tính</th>
                                            <th>Ngày sinh</th>
                                            <th>Địa chỉ</th>
                                            <th>Điện thoại</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($employee as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td>{{$list->tennv}}</td>
                                            <td>{{$list->cmnd}}</td>
                                            <td>{{$list->banglai}}</td>
                                            <td>@if($list->gioitinh == 1)Nam @else Nữ @endif </td>
                                            <td>{{date('d/m/Y',strtotime($list->ngaysinh))}}</td>
                                            <td>{{$list->diachi}}</td>
                                            <td>{{$list->dienthoai}}</td>
                                            <td>
                                                <ul class="list-inline m-0">
                                                    @can('edit-employee')
                                                    <li class="list-inline-item">
                                                        <a  href="#" data-id="{{$list->id}}"  data-tennv="{{$list->tennv}}" data-cmnd="{{$list->cmnd}}" data-banglai="{{$list->banglai}}" data-ngaysinh="{{$list->ngaysinh}}" data-diachi="{{$list->diachi}}" data-dienthoai="{{$list->dienthoai}}" data-gioitinh="{{$list->gioitinh}}"
                                                            data-target="#editemployeeModal" data-toggle="modal" class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>
                                                    </li>
                                                    @endcan
                                                    {{-- <li class="list-inline-item">
                                                        <a href="javascrip:void(0)" onclick="edituser({{$list->id}})"  class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>

                                                    </li> --}}
                                                    @can('delete-employee')
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#dlemployee" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
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
<div class="modal" id="addemployeeModal">
    <form id="addform" method="post" action="{{route('employee.create')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Thêm nhân viên</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                    <div class="form-group row">
                        <label for="tennv" class="col-md-4 col-form-label text-md-right">Họ và tên</label>
                            <div class="col-md-6">
                                <input id="tennv" type="text" class="form-control" name="tennv" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="cmnd" class="col-md-4 col-form-label text-md-right">Chứng minh nhân dân</label>
                            <div class="col-md-6">
                                <input id="cmnd" type="text" class="form-control" name="cmnd" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="banglai" class="col-md-4 col-form-label text-md-right">Bằng lái xe</label>
                            <div class="col-md-6">
                                <input id="banglai" type="text" class="form-control" name="banglai" >
                            </div>
                    </div>
                     <div class="form-group row">
                        <label for="ngaysinh" class="col-md-4 col-form-label text-md-right">Ngày sinh</label>
                            <div class="col-md-6">
                                <input id="ngaysinh" type="date" class="form-control" name="ngaysinh" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="gioitinh" class="col-md-4 col-form-label text-md-right">Giới tính</label>
                            <div class="col-md-6">
                                <div style="margin-top:8px;">
                                    <input type="radio" id="male" name="gioitinh" value="1">
                                    <label for="male">Nam</label>&nbsp;&nbsp;
                                    <input type="radio" id="female" name="gioitinh" value="2">
                                    <label for="female">Nữ</label>
                                </div>
                            </div>
                    </div>
                     <div class="form-group row">
                        <label for="diachi" class="col-md-4 col-form-label text-md-right">Địa chỉ</label>
                            <div class="col-md-6">
                                <input id="diachi" type="text" class="form-control" name="diachi" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="dienthoai" class="col-md-4 col-form-label text-md-right">Số điện thoại</label>
                            <div class="col-md-6">
                                <input id="dienthoai" type="text" class="form-control" name="dienthoai" >
                            </div>
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
<div class="modal" id="editemployeeModal">
    <form method="POST" action="{{route('employee.update')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Chỉnh sửa thành viên</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                    <input type="hidden" name="id" id="id">
                    <div class="form-group row">
                        <label for="tennv" class="col-md-4 col-form-label text-md-right">Họ và tên</label>
                            <div class="col-md-6">
                                <input id="tennv" type="text" class="form-control" name="tennv" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="cmnd" class="col-md-4 col-form-label text-md-right">Chứng minh nhân dân</label>
                            <div class="col-md-6">
                                <input id="cmnd" type="text" class="form-control" name="cmnd" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="banglai" class="col-md-4 col-form-label text-md-right">Bằng lái xe</label>
                            <div class="col-md-6">
                                <input id="banglai" type="text" class="form-control" name="banglai" >
                            </div>
                    </div>
                     <div class="form-group row">
                        <label for="ngaysinh" class="col-md-4 col-form-label text-md-right">Ngày sinh</label>
                            <div class="col-md-6">
                                <input id="ngaysinh" type="date" class="form-control" name="ngaysinh" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="gioitinh" class="col-md-4 col-form-label text-md-right">Giới tính</label>
                            <div class="col-md-6">
                                <div style="margin-top:8px;">
                                    <input type="radio" id="male" name="gioitinh" value="1">
                                    <label for="male">Nam</label>&nbsp;&nbsp;
                                    <input type="radio" id="female" name="gioitinh" value="2">
                                    <label for="female">Nữ</label>
                                </div>
                            </div>
                    </div>
                     <div class="form-group row">
                        <label for="diachi" class="col-md-4 col-form-label text-md-right">Địa chỉ</label>
                            <div class="col-md-6">
                                <input id="diachi" type="text" class="form-control" name="diachi" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="dienthoai" class="col-md-4 col-form-label text-md-right">Số điện thoại</label>
                            <div class="col-md-6">
                                <input id="dienthoai" type="text" class="form-control" name="dienthoai" >
                            </div>
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
<div id="dlemployee" class="modal fade">
    <form action="{{route('employee.destroy')}}" method="POST">
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
{{-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> --}}
{{-- <script>
    $(document).ready(function(){
        // add user
        $('#addform').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "{{route('employee.create')}}",
                data: $('#addform').serialize(),
                success: function(response){
                    console.log(response)
                    $('#addemployeeModal').modal('hide')
                    alert("Thêm mới thành công");
                    location.reload();
                },
                error: function(error){
                    console.log(error)
                    alert("Thêm mới thất bại");
                }
            });
        });
    });
</script> --}}
