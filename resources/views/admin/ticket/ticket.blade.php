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
<div class="container-fluid">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Danh vé</h6>
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
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th width="50px">Khách hàng</th>
                                            <th>Số điện thoại</th>
                                            <th>Chuyến xe</th>
                                            <th>Giá vé</th>
                                            <th>Vị trí ghế</th>
                                            <th>Mã vé</th>
                                            <th>Trạng thái</th>
                                           {{--  <th>Thao tác</th> --}}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($ticket as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td>@if($list->id_user==!null){{$list->user->name}} @else  @endif</td>
                                            <td>@if($list->id_user==!null){{$list->user->phone}} @else  @endif</td>
                                            <td>{{$list->chuyenxe->lotrinh->tuyenduong->diemdi}} -> {{$list->chuyenxe->lotrinh->tuyenduong->diemden}}</td>
                                            <td>{{$list->chuyenxe->giave}}</td>
                                            <td>{{$list->vitrighe}}</td>
                                            <td width="50px">{{$list->mave}}</td>
                                            <td>@if ($list->trangthai==1)<strong class="alert-warning">Chờ xử lý</strong> @elseif ($list->trangthai==2) <strong class="alert-danger">Chưa thanh toán</strong> @else <strong class="alert-success">Đã thanh toán</strong>  @endif</td>
                                           {{--  <td style="text-align: center;">
                                                @if($list->id_user==null)
                                                <ul class="list-inline m-0">
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#diemdontraDeleteModal" class="btn btn-success btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="book">Đặt</button>
                                                    </li>
                                                </ul>
                                                @else
                                                @endif
                                            </td> --}}
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{{-- modal add user --}}
{{-- <div class="modal" id="addticketModal">
    <form id="addform" method="POST" action="{{route('ticket.create')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Thêm vé</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                    <div class="form-group row">
                        <label for="id_chuyenxe" class="col-md-4 col-form-label text-md-right">Chuyến xe</label>
                         <select name="id_chuyenxe" id="id_chuyenxe" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn chuyến</option>
                          @php
                          $buses = App\Models\Chuyenxe::with('lotrinh','xe')->get();
                          @endphp
                          @foreach ($buses as $buses)
                          <option value="{{$buses->id}}" name="id_chuyenxe">{{$buses->lotrinh->diemdi}} -> {{$buses->lotrinh->diemden}} ({{$buses->xe->loaixe->soluongghe}}  Chỗ)</option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="soluong " class="col-md-4 col-form-label text-md-right">Số lượng vé</label>
                            <div class="col-md-6">
                                <input id="soluong " type="number" class="form-control" name="soluong" placeholder="Nhập đúng với số chỗ">
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
</div> --}}
{{-- modal edit user --}}
<div class="modal" id="editticketModal">
    <form method="POST" action="{{route('ticket.update')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Chỉnh sửa vé</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                <input type="hidden"  name="id" id="id">
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Tình trạng</label>
                         <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected disabled>Chọn loại tình trạng</option>
                          <option value="1" name="trangthai">Chờ xử lý</option>
                          <option value="2" name="trangthai">Chưa thanh toán</option>
                          <option value="3" name="trangthai">Đã thanh toán</option>
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
<div id="dlticketModal" class="modal fade">
    <form action="{{route('ticket.destroy')}}" method="POST">
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
        // add user
        $('#addform').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "{{route('ticket.create')}}",
                data: $('#addform').serialize(),
                success: function(response){
                    console.log(response)
                    $('#addticketModal').modal('hide')
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
