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
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách xe</h6>
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
                        @can('add-xe')
                        <div class="col-sm-6" style="margin-top: 10px;">
                            <a href="{{route('car.themxe')}}" class="btn btn-success" ><i class="material-icons"></i> <span>Thêm mới xe</span></a>
                        </div>
                        @endcan
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th width="50px">Tên loại xe</th>
                                            <th>Tên xe</th>
                                            <th>Biển số</th>
                                            {{-- <th>Ảnh</th> --}}
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($car as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td> @if ($list->loaixe->tenloaixe==1) Ghế ngồi \ {{$list->loaixe->soluongghe}} chỗ @else Giường nằm \ {{$list->loaixe->soluongghe}} chỗ @endif</td>
                                            <td>{{$list->tenxe}}</td>
                                            <td>{{$list->bienso}}</td>
                                            {{-- <td><img src="{{asset('uploads/anhxe/'. $list->anhxe)}}" width="150px" height="90px"></td> --}}
                                            <td>
                                                @can('edit-xe')
                                                @if ($list->trangthai==1)
                                                    <a href="{{route('car.unactive',$list->id)}}" class="alert-success active" style="text-decoration: none;color: black;">
                                                         Hoạt động
                                                     </a>
                                                @else
                                                    <strong class="alert-danger">
                                                        <a href="{{route('car.active',$list->id)}}" class="alert-danger unactive" style="text-decoration: none;color: black;">
                                                            Không hoạt động
                                                        </a>
                                                    </strong>
                                                @endif
                                                @endcan
                                            </td>
                                            <td>
                                                <ul class="list-inline m-0">
                                                    @can('edit-xe')
                                                    <li class="list-inline-item">
                                                        <a  href="{{route('car.suaxe',$list->id)}}" class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>
                                                    </li>
                                                    @endcan
                                                    @can('delete-xe')
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#dlcarModal" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
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
{{-- modal delete user --}}
<div id="dlcarModal" class="modal fade">
    <form action="{{route('car.destroy')}}" method="POST">
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
