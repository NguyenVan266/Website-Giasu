@extends('layouts.app')
@section('content')
        <div >
            <div style="max-width:600px; margin: auto;">
            <div class="w3-center">
                <br>
                <br>
                <div style="font-weight: bold;">ĐĂNG KÝ</div>
            </div>
            <form class="w3-container" method="POST" action="{{ route('register') }}">
            @csrf
                <div class="w3-section">
                <label><b>Họ và tên</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập tên" name="name" required>
                <label><b>Địa chỉ Email</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập email" name="email" required>
                <label><b>Địa chỉ</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập địa chỉ" name="address" required>
                <label><b>Giới tính</b></label>
                <div class="modal-register-gender">
                <input class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="1" id="1" required> <label for="1">Nam</label>
                <input class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="2" id="2" required> <label for="2">Nữ</label>
                </div>
                <br>
                <label><b>Số điện thọai</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập điện thoại" name="phone" required>
                <label><b>Mật khẩu</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="password" placeholder="Nhập mật khẩu" name="password" required>
                <label><b>Nhập lại mật khẩu</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="password" placeholder="Nhập lại mật khẩu" name="password_confirmation" required>
                <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Đăng ký</button>
                </div>
            </form>
            </div>
        </div>
@endsection
