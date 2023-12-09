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
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách thành viên</h6>
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
                        @can('add-user')
                        <div class="col-sm-6" style="margin-top: 10px;">
                            <a href="#addUserModal" class="btn btn-success" data-toggle="modal"><i class="material-icons"></i> <span>Thêm mới thành viên</span></a>
                        </div>
                        @endcan
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Họ và tên</th>
                                            <th style="width: 200px">Email</th>
                                            <th>Địa chỉ</th>
                                            <th>Số điện thoại</th>
                                            <th>Giới tính</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($users as $key =>  $list)

                                    @php
                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td>{{$list->name}}</td>
                                            <td>{{$list->email}}</td>
                                            <td>{{$list->address}}</td>
                                            <td>{{$list->phone}}</td>
                                            <td>@if($list->gender == 1)Nam @else Nữ @endif </td>
                                            <td>
                                                <ul class="list-inline m-0">
                                                    @can('edit-user')
                                                    <li class="list-inline-item">
                                                        <a href="{{route('user.edit',$list->id)}}" class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>
                                                    </li>
                                                    @endcan
                                                    @can('delete-user')
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#userDeleteModal" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
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
<div class="modal" id="addUserModal">
    <form method="POST" action="{{route('user.create')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Thêm thành viên</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">Họ và tên</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control" name="email" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="address" class="col-md-4 col-form-label text-md-right">Địa chỉ</label>
                            <div class="col-md-6">
                                <input id="address" type="text" class="form-control" name="address" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">Giới tính</label>
                            <div class="col-md-6">
                                <div style="margin-top:8px;">
                                    <input type="radio" id="male" name="gender" value="1">
                                    <label for="male">Nam</label>&nbsp;&nbsp;
                                    <input type="radio" id="female" name="gender" value="2">
                                    <label for="female">Nữ</label>
                                </div>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="phone" class="col-md-4 col-form-label text-md-right">Số điện thoại</label>
                            <div class="col-md-6">
                                <input id="phone" type="text" class="form-control" name="phone" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Mật khẩu</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Nhập lại mật khẩu</label>
                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" >
                            </div>
                    </div>
                    @can('add-role')
                    <div class="form-group row">
                        <label for="level" class="col-md-4 col-form-label text-md-right">Login hệ thống</label>
                            <div class="col-md-6">
                                <div style="margin-top:8px;">
                                    <input type="radio" id="yes" name="level" value="1">
                                    <label for="yes">Có</label>&nbsp;&nbsp;
                                    <input type="radio" id="no" name="level" value="0">
                                    <label for="no">Không</label>
                                </div>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="role" class="col-md-4 col-form-label text-md-right">Chọn vai trò</label>
                        <select name="role[]" class="form-control select2_init" multiple style="width: 250px;">
                            <option value="" ></option>
                            @foreach($roles as $role)
                                <option  value="{{ $role->id }}">{{$role->name}}</option>
                            @endforeach

                        </select>
                    </div>
                    @endcan
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
{{-- modal delete user --}}
<div id="userDeleteModal" class="modal fade">
    <form action="{{route('user.destroy')}}" method="POST">
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
@section('script')
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="{{ asset('backend/select2/dist/js/select2.min.js') }}"></script>
<script type="text/javascript">
    $('.select2_init').select2({
        'placeholder':'Chọn vai trò'
    });
</script>
@endsection

