@extends('layouts.app')
@section('title')
    Giới thiệu
@endsection
@section('content')
@include('sweetalert::alert')
    <div class="container__news">
        <h3>Liên hệ với chúng tôi</h3>
        <p class="notecontact">Cảm ơn bạn đã ghé thăm website của chúng tôi. Nếu bạn muốn nhận được thông tin từ chúng tôi dễ dàng, hãy điền vào form dưới đây.</p><br>
        <div class="body__news row">
        <div class="news__list col l-6 m-12 c-12">
            <form action="{{route('contact.create')}}" method="post">
                @csrf
                <div class="contact">
                <label for="name">Họ và tên *</label><br>
                <input type="text" id="name" name="name" placeholder="Nhập họ tên" class="inputcontact" required>
                </div>
                <div class="contact">
                <label for="phone">Số điện thoại *</label><br>
                <input type="text" id="phone" name="phone" placeholder="Nhập số điện thoại" class="inputcontact" required>
                </div>
                <div class="contact">
                <label for="email">Email *</label><br>
                <input type="text" id="email" name="email" placeholder="Nhập email" class="inputcontact" required>
                </div>
                <div class="contact">
                <label for="title">Tiêu đề *</label><br>
                <input type="text" id="title" name="title" placeholder="Nhập tiêu đề" class="inputcontact" required>
                </div>
                <div class="contact">
                <label for="content">Nội dung *</label><br>
                <textarea name="content" id="content" placeholder="Nhập nội dung" rows="5" class="inputcontact" required></textarea>
                </div>
                <div>
                    <button type="submit" class="btn-contact" >Gửi</button>
                </div>
            </form>
        </div>
        <div class="news__list col l-6 m-12 c-12">
            <div id="map" style="width:50px;height:50px; display: inline;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.016523875695!2d105.88805446503096!3d21.15174068894423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313506daf9430c31%3A0x927979bc2923153a!2zTOG7lyBLaMOqLCBMacOqbiBIw6AsIMSQw7RuZyBBbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1636532869370!5m2!1svi!2s" class="map-contact" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <div class="contact-cty">
                        <h4 style="text-transform: uppercase; color: #ef5222;">Công ty cổ phần xe khách Huy Hoàng</h4>
                        <p>Địa chỉ: Lỗ khê - Liên Hà - Đông Anh - Hà Nội</p>
                        <p>Điện thoại: <span style="color: #ef5222;">0973956805</span></p>
                        <p>Email: <span style="color: #ef5222;">dhuyhoang3107@gmail.com</span> | Website: <a href="https://huyhoangblog.xyz" style="color: #ef5222; text-decoration: none;">huyhoangblog.xyz</a></p>
                    </div>
            </div>
        </div>
        </div>
    </div>
@endsection

