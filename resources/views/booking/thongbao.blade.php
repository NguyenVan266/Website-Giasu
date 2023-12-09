<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="fontend/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
@extends('layouts.app')
@section('title')
Hóa đơn đặt vé hình thức thanh toán bằng tiền mặt
@endsection
@section('content')
@include('sweetalert::alert')
  <div class="container-alert-payment">
    <div>
    <div class="alert-payment">ĐẶT ĐƠN HÀNG VỚI HÌNH THỨC THANH TOÁN TRỰC TIẾP THÀNH CÔNG !!!</div>
    <div class="alert-tab-payment">
        <table>
            <thead>
                <tr>
                    <td class="alert-payment-title">Mã đơn hàng</td>
                    <td>{{$dondatve['id']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Số vé</td>
                    <td>{{$data['sove']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Số lượng</td>
                    <td>{{$dondatve['soluongve']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Hãng xe</td>
                    <td>{{$data['hangxe']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Biển số</td>
                    <td>{{$data['bienso']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Tuyến đường</td>
                    <td>{{$data['diemdi']}} -> {{$data['diemden']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Điểm đón</td>
                    <td>{{$data['diemdon']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Điểm trả</td>
                    <td>{{$data['diemtra']}}</td>
                </tr>
                @if(isset($data['tramdung']))
                <tr>
                    <td class="alert-payment-title">Trạm dừng</td>
                    <td>{{$data['tramdung']}}</td>
                </tr>
                @endif
                <tr>
                    <td class="alert-payment-title">Loại xe</td>
                    <td>{{$data['loaixe']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Lái xe</td>
                    <td>{{$data['laixe']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Khởi hành</td>
                    <td>{{$data['khoihanh']}}</td>
                </tr>
                <tr>
                    <td class="alert-payment-title">Tổng tiền cần thanh toán khi nhận vé</td>
                    <td id="money"></td>
                </tr>
            </thead>
        </table>

    </div>
    <div style="text-align: center;">
    <a href="{{route('thongtinve')}}"><button class="btn-alert-payment">Chi tiết vé</button></a>
    <a href="{{route('index')}}"><button class="btn-alert-payment">Trang chủ</button></a>
    </div>
    </div>
  </div>
</section>
@endsection
@section('script')
<script type="text/javascript">
    var money = {{$data['tongtien']}};
    var money = money.toString();
    var format = money.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    document.getElementById('money').innerHTML = `${format} VNĐ`;
</script>
@endsection

