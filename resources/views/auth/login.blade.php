 <link href="{{ asset('css/app.css') }}" rel="stylesheet">
@extends('layouts.app')

@section('content')
@include('sweetalert::alert')
 <div>
        <div style="max-width:600px;margin: auto;">

        <div class="w3-center">

        <br>
        <br>
        <div style="font-weight: bold;">ĐĂNG NHẬP</div>
        </div>
        <form class="w3-container" method="POST" action="{{ route('user.login2') }}">
        @csrf
            <div class="w3-section">
            <label><b>Địa chỉ Email</b></label>
            <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập email" name="email" required>
            <label><b>Mật khẩu</b></label>
            <input class="w3-input w3-border" type="password" placeholder="Nhập mật khẩu" name="password" required>
            <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Đăng nhập</button>
            <input class="w3-check w3-margin-top" type="checkbox"> Nhớ lần đăng nhập
            </div>
        </form>

        <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <!-- <span class="w3-right w3-padding w3-hide-small">Tìm lại <a href="#">mật khẩu?</a></span> -->
        </div>

        </div>
</div>
@endsection
