<link href="{{ asset('css/app.css') }}" rel="stylesheet">
@extends('layouts.app')
@section('title')
Thông tin tài khoản
@endsection
@section('content')
    <div class="container-profile-user">
        <div class="profile-text">
            THÔNG TIN TÀI KHOẢN
        </div>
        @include('sweetalert::alert')
            @if(session('success'))
            <div class="alert-profile">
                <div class="alert-success-profile">
                {{session('success')}}
                </div>
            </div>
            @endif
            @if(session('error'))
            <div class="alert-profile">
                <div class="alert-error-profile">
                {{session('error')}}
                </div>
            </div>
            @endif
        <div class="conatainer-profile">
            <div class="profile-image">
                <img src="{{asset('uploads/image/'. auth::user()->image)}}">
                <div>{{auth::user()->name}}</div>
                <form method="POST" action="{{route('images',auth::user()->id)}}" enctype="multipart/form-data">
                    @csrf
                    <label class="format-input-file">
                    <input name="image" clas="input-profile-file" type="file">Chọn ảnh
                    </label>
                    <br>
                    <button type="submit" class="btn-upload-image">Cập nhật ảnh</button>
                </form>
            </div>

            <div class="profile-list">
                <div>
                    <div class="container__profile-user">
                    <label for="" class="profile-list-label">
                        Họ và tên
                    </label>
                    <input disabled="" type="text" class="profile-list-input" value="{{Auth::user()->name}}">
                    </div>
                    <div class="container__profile-user">
                    <label for="" class="profile-list-label">
                        Email
                    </label>
                    <input disabled="" type="text" class="profile-list-input" value="{{Auth::user()->email}}">
                    </div>
                    <div class="container__profile-user">
                     <label for="" class="profile-list-label">
                        Đia chỉ
                    </label>
                    <input disabled="" type="text" class="profile-list-input" value="{{Auth::user()->address}}">
                    </div>
                    <div class="container__profile-user">
                    <label for="" class="profile-list-label">
                        Số điện thoại
                    </label>
                    <input disabled="" type="text" class="profile-list-input" value="{{Auth::user()->phone}}">
                    </div>
                    <div class="container__profile-user">
                    <label for="" class="profile-list-label">
                        Giới tính
                    </label>
                    <input disabled="" type="text" class="profile-list-input" value="@if (Auth::user()->gender ==1) Nam @else Nữ @endif">
                    </div>
                </div>
            </div>

        </div>

        <div class="profile-btn">
            <button class="btn-edit-profile" onclick="document.getElementById('editprofileModal').style.display='block'">
                Chỉnh sửa
            </button>

            <button class="btn-change-password" onclick="document.getElementById('changeprofileModal').style.display='block'">
                Đổi mật khẩu
            </button>

        </div>
    </div>
    {{-- modal edit --}}
        <div id="editprofileModal" class="w3-modal">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
            <div class="w3-center"><br>
                <b>Chỉnh sửa</b>
                <span onclick="document.getElementById('editprofileModal').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
            </div>

            <form class="w3-container" method="POST" action="{{route('update')}}">
            @csrf
                <div class="w3-section">
                <label><b>Họ và tên</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập tên" name="name" required value="{{Auth::user()->name}}">
                <label><b>Địa chỉ Email</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập email" name="email" value="{{Auth::user()->email}}" disabled required>
                <label><b>Địa chỉ</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập địa chỉ" name="address" value="{{Auth::user()->address}}" required>
                <label><b>Giới tính</b></label>
                <div class="modal-register-gender">
                <input id="nam" class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="1" @if(old('gender',auth::user()->gender)=="1") checked @endif required > <label for="nam">Nam</label>
                <input id="nu" class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="2" @if(old('gender',auth::user()->gender)=="2") checked @endif required> <label for="nu">Nữ</label>
                </div>
                <label><b>Số điện thọai</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập điện thoại" name="phone" value="{{Auth::user()->phone}}" required>
                <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Xác nhận</button>
                </div>
            </form>
            </div>
        </div>
    {{--  --}}

    {{-- modal change --}}
        <div id="changeprofileModal" class="w3-modal">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
            <div class="w3-center"><br>
                <b>Đổi mật khẩu</b>
                <span onclick="document.getElementById('changeprofileModal').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
            </div>

            <form class="w3-container" method="POST" action="{{ route('password')}}">
            @csrf
                <div class="w3-section">
                <label><b>Mật khẩu hiện tại</b></label>
                <input id="present" class="w3-input w3-border w3-margin-bottom" type="password"  name="oldPassword" required autocomplete="new-password">
                <label><b>Nhập mật khẩu mới</b></label>
                <input id="newPassword" class="w3-input w3-border w3-margin-bottom newPassword" type="password"  name="password" autocomplete="new-password">
                <p style="margin-top: -5px; font-size: 15px; padding-left: 10px;" id="alertnewPassword"></p>
                <label><b>Nhập lại mật khẩu mới</b></label>
                <input id="rePassword" onfocusout="confirmPassword()" class="w3-input w3-border w3-margin-bottom" type="password"  name="password_confirmation" autocomplete="new-password">
                <p id="alertConfirmPassword" style=" color: red;"></p>
                <button   id="changePassword" class="w3-button w3-block w3-green w3-section w3-padding"  type="submit">Xác nhận</button>
                </div>
            </form>
            </div>
        </div>
    {{--  --}}
@endsection
@section('script')
<script type="text/javascript">
    const newPassword = document.getElementById('newPassword')
    const alertnewPassword = document.getElementById('alertnewPassword')
    newPassword.addEventListener('keyup',function(){
    if(newPassword.value.length < 1){
        alertnewPassword.innerHTML = ''
    } else if(newPassword.value.length < 5){
        alertnewPassword.style.color = '#a94442'
        alertnewPassword.style.background - '#f2dede'
        alertnewPassword.innerHTML = 'Mật khẩu quá yếu !!!'
    } else if(newPassword.value.length <= 8){
        alertnewPassword.style.color = '#8a6d3b'
        alertnewPassword.style.background = '#fcf8e3'
        alertnewPassword.innerHTML = 'Bình thường'
    }
    else {
        alertnewPassword.style.color = '#3c763d'
        alertnewPassword.style.background = '#dff0d8'
        alertnewPassword.innerHTML = 'Mật khẩu tốt'
    }
   })

//kiểm tra mật khẩu không khớp javascript
    function confirmPassword() {
        const present = document.getElementById('present')
        const password = document.getElementsByClassName('newPassword')
        const rePassword = document.getElementById('rePassword')
        const alertPassword = document.getElementById('alertConfirmPassword')
        const changePassword = document.getElementById('changePassword')
        if (present.value === rePassword.value){
            alertPassword.innerHTML = 'Mật khẩu mới không được trùng mật khẩu cũ!'
            changePassword.disabled = true;
        } else if(password[0].value === rePassword.value){
            alertPassword.innerHTML = ''; 
            changePassword.disabled = false;
        }
        else {
            alertPassword.innerHTML = 'Nhập lại mật khẩu chưa đúng, xin vui lòng nhập lại !';
            changePassword.disabled = true; 
        }
    }
</script>
@endsection
