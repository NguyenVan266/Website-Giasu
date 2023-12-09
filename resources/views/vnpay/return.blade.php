<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Thông tin thanh toán</title>
        <!-- Bootstrap core CSS -->
         <link href="{{asset('/vnpay/bootstrap.min.css')}}" rel="stylesheet"/>
        <!-- Custom styles for this template -->
        <link href="{{asset('/vnpay/jumbotron-narrow.css')}}" rel="stylesheet">
        <script src="{{asset('/vnpay/assets/jquery-1.11.3.min.js')}}"></script>
    </head>
    <body>
        <div class="container">
            @include('sweetalert::alert')
            <div class="header clearfix">
                <h3 class="text-muted">Thông tin đơn hàng</h3>
            </div>
            <div class="table-responsive">
                <div class="form-group">
                    <label >Mã đơn hàng:</label>

                    <label>{{$vnpaydata['vnp_TxnRef']}}</label>
                </div>
                <div class="form-group">

                    <label >Số tiền:</label>
                    <label>{{number_format($vnpaydata['vnp_Amount']/100,0,',','.')}} VNĐ</label>
                </div>
                <div class="form-group">
                    <label >Nội dung thanh toán:</label>
                    <label>{{$vnpaydata['vnp_OrderInfo']}}</label>
                </div>
                <div class="form-group">
                    <label >Mã phản hồi (vnp_ResponseCode):</label>
                    <label>{{$vnpaydata['vnp_ResponseCode']}}</label>
                </div>
                <div class="form-group">
                    <label >Mã GD Tại VNPAY:</label>
                    <label>{{$vnpaydata['vnp_TransactionNo']}}</label>
                </div>
                <div class="form-group">
                    <label >Mã Ngân hàng:</label>
                    <label>{{$vnpaydata['vnp_BankCode']}}</label>
                </div>
                <div class="form-group">
                    <label >Thời gian thanh toán:</label>
                    <label>{{date('Y-m-d H:i',strtotime($vnpaydata['vnp_PayDate']))}}</label>
                </div>
                <div class="form-group">
                    <label >Kết quả: GD thanh cong</label>
                    <br>
                    <a href="{{route('index')}}">
                        <button>Trang chủ</button>
                    </a>
                    <a href="{{route('thongtinve')}}">
                        <button>Chi tiết vé</button>
                    </a>
                </div>
            </div>
            <p>
                &nbsp;
            </p>
            <footer class="footer">
                <p>&copy; Cổng thanh toán VNPAY</p>
            </footer>
        </div>
    </body>
</html>
