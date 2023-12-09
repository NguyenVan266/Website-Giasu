

<link href="{{ asset('backend/select2/dist/css/select2.min.css') }}" rel="stylesheet"/>


<div class="container" style="margin-top: 40px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h6><a href="{{ route('admin.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Sửa quản trị</div>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{route('clone.updatequantri',$admin->id)}}" enctype="multipart/form-data">
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
                        <label for="name" class="col-md-4 col-form-label text-md-right">Họ và tên</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="{{$admin->name}}">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control" name="email" value="{{$admin->email}}">
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
                                    <input type="radio" id="level" name="level" value="1" @if($admin->level==1) checked @endif>
                                    <label for="level">Có</label>&nbsp;&nbsp;
                                    <input type="radio" id="level" name="level" value="0" @if($admin->level==0) checked @endif>
                                    <label for="level">Không</label>
                                </div>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-4 col-form-label text-md-right">Chọn vai trò</label>
                        <select name="role[]" class="form-control select2_init" multiple style="width: 450px;">
                                    <option value=""></option>

                                    @foreach($roles as $role)
                                        <option
                                            {{ $rolesOfUser->contains('id', $role->id) ? 'selected' : '' }}
                                            value="{{ $role->id }}">{{ $role->name }}</option>
                                    @endforeach

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


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="{{ asset('backend/select2/dist/js/select2.min.js') }}"></script>
<script type="text/javascript">
    $('.select2_init').select2({
        'placeholder':'Chọn vai trò'
    });
</script>

