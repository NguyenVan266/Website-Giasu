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
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách đơn đặt vé</h6>
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
                                            <th>Mã đơn</th>
                                            <th width="130px">KH</th>
                                            <th>Xe</th>
                                            <th width="130px">Chuyến</th>
                                            <th width="130px">Vị trí ghế</th>
                                            <th>Số vé</th>
                                            <th width="230px">Thông tin thanh toán</th>
                                            <th>Tổng tiền</th>
                                            <th>Trạng thái</th>
                                            <th>Xử lý hủy</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($orderticket as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td>{{$list->user->name}}</td>
                                            <td>{{$list->xe->tenxe}}</td>
                                            <td>{{$list->chuyenxe->lotrinh->tuyenduong->diemdi}} -> {{$list->chuyenxe->lotrinh->tuyenduong->diemden}}</td>
                                            <td>{{$list->vitri}}</td>
                                            <td align="center">{{$list->soluongve}}</td>
                                            <td>
                                                @if($list->payment)
                                                <ul>
                                                    <li>Ngân hàng: {{$list->payment->p_code_bank}}</li>
                                                    <li>Mã thanh toán: {{$list->payment->p_code_vnp}}</li>
                                                    <li>Tổng tiền: {{$list->payment->p_money}} VNĐ</li>
                                                    <li>Nội dung: {{$list->payment->p_note}}</li>
                                                    <li>Thời gian: {{ date('Y-m-d H:i',strtotime($list->payment->p_time))}}</li>
                                                </ul>
                                                @else
                                                Thanh toán khi nhận hàng
                                                @endif
                                            </td>
                                            <td>{{$list->tongtien}} VNĐ</td>
                                            <td>
                                                @if($list->trangthai==1)
                                                    <strong class=" alert-success">Đã thanh toán</strong>
                                                @elseif($list->trangthai==0)
                                                    <strong class="alert-warning">Chưa thanh toán</strong>
                                                @else
                                                    <strong class="btn-danger">Đã hủy</strong>
                                                @endif</td>
                                            <td>
                                                <ul class="list-inline m-0">

                                                    <li class="list-inline-item">
                                                        @if($list->destroy==0)
                                                        <div style="font-size:10px;font-weight: bold;text-align:center; "><strong class="alert-danger">Khách yêu cầu hủy</strong></div>
                                                        <div style="text-align:center;margin-top: 10px;">
                                                        <a href="{{route('xacnhanhuy',$list->id)}}" ><i class="fa fa-check" aria-hidden="true" style="color: green;"></i></a>&nbsp;&nbsp;<a href="{{route('tuchoihuy',$list->id)}}"><i class="fa fa-times" style="color: red; aria-hidden="true"></i></a>
                                                        </div>
                                                        @elseif($list->destroy==1)

                                                        @else
                                                            <button data-id="{{$list->id}}" data-target="#huyveModal" type="button" class="btn btn-danger" data-toggle="modal" data-placement="top" title="Delete" style="width: 77px;">Hủy vé</button>
                                                        @endif
                                                    </li>
                                                    {{-- <li class="list-inline-item">
                                                        <a href="javascrip:void(0)" onclick="edituser({{$list->id}})"  class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>

                                                    </li> --}}
                                                </ul>
                                            </td>
                                            <td>
                                            @if($list->trangthai==0)
                                            <button data-id="{{$list->id}}" data-trangthai="{{$list->trangthai}}" data-target="#updateOrderModal" type="button" class="btn btn-success" data-toggle="modal" data-placement="top" title="Delete" style="width: 95px;">
                                                Cập nhật
                                            </button>
                                            @endif
                                        </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{{-- modal add user --}}
<div class="modal" id="updateOrderModal">
    <form id="addform" method="POST" action="{{route('orderticket.update')}}">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 600px">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Cập nhật đơn vé</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body">
                <input type="hidden" id="id" name="id">
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Trạng thái</label>
                         <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected disabled>Chọn loại trạng thái</option>
                          <option value="0" name="trangthai">Chưa thanh toán</option>
                          <option value="1" name="trangthai">Đã thanh toán</option>
                        </select>
                    </div>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
          <button type="submit" class="btn btn-success">Cập nhật</button>
        </div>
      </div>
    </div>
    </form>
</div>
{{-- modal delete user --}}
<div id="huyveModal" class="modal fade">
    <form action="{{route('orderticket.huyve')}}" method="POST">
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
                <p>Bạn thực sự muốn hủy vé ?</p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                <button type="submit" class="btn btn-danger">Đồng ý</button>
            </div>
        </div>
    </div>
    </form>
</div>
</div>
@endsection
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
