@extends('layouts.admin')
@section('content')
<div class="container" style="margin-top: 40px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="width:1000px;margin-left: -130px;">
                <div class="card-header">
                    <h6><a href="{{ route('slide.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Sửa slide</div>
                </div>
                <div class="card-body" >
                    <form method="POST" action="{{route('slide.update',$slide->id)}}" enctype="multipart/form-data">
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
                        <label for="slide" class="col-md-4 col-form-label text-md-right">Slide</label>
                            <div class="col-md-6">
                                <input  id="slide" type="file" name="slide" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Kích hoạt</label>
                        <select name="active" id="active" class="form-control" style="width:255px; margin-left: 12px">
                          <option value="0" name="active">@if($slide->active==0)Có @else Không @endif</option>
                          <option value="1" name="active">@if($slide->active==1)Có @else Không @endif</option>
                        </select>
                    </div>
                        <br>
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
