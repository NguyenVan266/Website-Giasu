@extends('layouts.admin')
@section('css')
<link href="{{ asset('backend/select2/dist/css/select2.min.css') }}" rel="stylesheet"/>
@endsection
@section('content')
<div class="container" style="margin-top: 100px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h6><a href="{{ route('admin.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Tạo quản trị</div>
                </div>

                <div class="card-body">
                    <form method="POST" action="{{route('admin.create')}}">
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
                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control" name="email">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password">
                            </div>
                    </div>
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
                        <select name="role[]" class="form-control select2_init" multiple style="width: 450px;">
                            <option value="" ></option>
                            @foreach($roles as $role)
                                <option  value="{{ $role->id }}">{{$role->name}}</option>
                            @endforeach

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
@section('script')
<script src="{{ asset('backend/select2/dist/js/select2.min.js') }}"></script>
<script type="text/javascript">
    $('.select2_init').select2({
        'placeholder':'Chọn vai trò'
    });
</script>
@endsection
