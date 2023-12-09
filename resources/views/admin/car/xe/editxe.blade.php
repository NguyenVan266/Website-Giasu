@extends('layouts.admin')
@section('content')
<div class="container" style="margin-top: 40px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h6><a href="{{ route('car.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Sửa thông tin xe</div>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{route('car.update',$car->id)}}">
                    {{-- <form method="POST" action="{{route('car.update',$car->id)}}" enctype="multipart/form-data"> --}}
                        @csrf
                        @if(session('success'))
                        <div class="alert-success" role="alert">
                        {{session('success')}}
                        </div>
                        @endif
                        @if(session('error'))
                        <div class="alert-danger" role="alert">
                        {{session('error')}}
                        </div>
                        @endif
                        <br>
                        <div class="form-group row">
                        <label for="id_loaixe" class="col-md-4 col-form-label text-md-right">Loại xe</label>
                         <select name="id_loaixe" id="id_loaixe"  class="form-control" style="width:255px; margin-left: 12px">
                          @php
                          $typecar = App\Models\Loaixe::all();
                          @endphp
                          <option selected disabled>Chọn xe</option>
                          @foreach ($typecar as $typecar)
                          <option value="{{$typecar->id}}" name="id_loaixe" @if($car->id_loaixe == $typecar->id) selected @else @endif> @if ($typecar->tenloaixe==1) Ghế ngồi \ {{$typecar->soluongghe}} Chỗ @else Giường nằm \ {{$typecar->soluongghe}} Chỗ @endif </option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="tenxe" class="col-md-4 col-form-label text-md-right">Tên xe</label>
                            <div class="col-md-6">
                                <input id="tenxe" type="text" class="form-control" name="tenxe" value="{{$car->tenxe}}">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="bienso" class="col-md-4 col-form-label text-md-right">Biển số</label>
                            <div class="col-md-6">
                                <input id="bienso" type="text" class="form-control" name="bienso" value="{{$car->bienso}}">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Trạng thái</label>
                        <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                            <option  disabled>Chọn loại trạng thái</option>
                            <option value="1" name="trangthai">@if($car->trangthai==1)Hoạt Động @else Không hoạt động @endif</option>
                            <option value="2" name="trangthai">@if($car->trangthai==2)Hoạt Động @else Không hoạt động @endif</option>
                        </select>
                    </div>
                    {{-- <div class="form-group row">
                        <label for="anhxe" class="col-md-4 col-form-label text-md-right">Ảnh xe</label>
                            <div class="col-md-6">
                                <input id="anhxe" type="file" name="anhxe"/>
                            </div>
                    </div>
                        <div style="margin-left: 150px;">
                        <img src="{{asset('uploads/anhxe/'. $car->anhxe)}}" width="390px" height="150px">
                        </div>
                        <br> --}}
                        <div class="form-group row mb-0" style="margin-left: 130px;">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    {{ __('Cập nhật') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
