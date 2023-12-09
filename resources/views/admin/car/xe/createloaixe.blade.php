@extends('layouts.admin')
@section('content')
<div class="container" style="margin-top: 100px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h6><a href="{{ route('car.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Tạo xe</div>
                </div>

                <div class="card-body">
                    {{-- <form method="POST" action="{{route('car.create')}}" enctype="multipart/form-data"> --}}
                    <form method="POST" action="{{route('car.create')}}">
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
                         <select name="id_loaixe" id="id_loaixe" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected>Chọn loại xe</option>
                          @php
                          $typecar = App\Models\Loaixe::all();
                          @endphp
                          @foreach ($typecar as $typecar)
                          <option value="{{$typecar->id}}" name="id_loaixe"> @if ($typecar->tenloaixe==1) Ghế ngồi \ {{$typecar->soluongghe}} Chỗ @else Giường nằm \ {{$typecar->soluongghe}} Chỗ @endif </option>
                          @endforeach
                        </select>
                    </div>
                    <div class="form-group row">
                        <label for="tenxe" class="col-md-4 col-form-label text-md-right">Tên xe</label>
                            <div class="col-md-6">
                                <input id="tenxe" type="text" class="form-control" name="tenxe">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="bienso" class="col-md-4 col-form-label text-md-right">Biển số</label>
                            <div class="col-md-6">
                                <input id="bienso" type="text" class="form-control" name="bienso">
                            </div>
                    </div>
                   {{--  <div class="form-group row">
                        <label for="anhxe" class="col-md-4 col-form-label text-md-right">Ảnh xe</label>
                            <div class="col-md-6">
                                <input id="anhxe" type="file" name="anhxe">
                            </div>
                    </div> --}}
                    <div class="form-group row">
                        <label for="trangthai" class="col-md-4 col-form-label text-md-right">Trạng thái</label>
                         <select name="trangthai" id="trangthai" class="form-control" style="width:255px; margin-left: 12px">
                          <option selected disabled>Chọn loại trạng thái</option>
                          <option value="1" name="trangthai">Hoạt động</option>
                          <option value="2" name="trangthai">Không hoạt động</option>
                        </select>
                    </div>
                        <div class="form-group row mb-0" style="margin-left: 130px;">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    {{ __('Tạo') }}
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
