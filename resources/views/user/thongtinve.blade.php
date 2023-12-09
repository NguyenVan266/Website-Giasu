@extends('layouts.app')
@section('title')
Thông tin vé đã đặt
@endsection
@section('content')
@include('sweetalert::alert')
    <div class="container__history-order row">
        <div class="order-ticket-text">Thông tin vé đã đặt</div>
        <div class="history__order-ticket col l-12 m-12 c-12">
            <table class="order-ticket-tab">
                <thead>
                    <tr>
                        <th class="order-tab-th">Mã đơn</th>
                        <th class="order-tab-th">Nhà xe</th>
                        <th class="order-tab-th">Tuyến đường</th>
                        <th class="order-tab-th">Biển số</th>
                        <th class="order-tab-th">Khởi hành</th>
                        <th class="order-tab-th">Loại xe</th>
                        <th class="order-tab-th">Vị trí</th>
                        <th class="order-tab-th">Trạng thái</th>
                        <th class="order-tab-th">Thao tác</th>
                    </tr>
                </thead>
                <body>
                    <?php use Carbon\Carbon; ?>
                    @foreach ($thongtinve as $tt)
                    <tr>
                        <td class="order-tab-td">{{$tt->id}}</td>
                        <td class="order-tab-td">{{$tt->tenxe}}</td>
                        <td class="order-tab-td">{{$tt->diemdi}} - {{$tt->diemden}}</td>
                        <td class="order-tab-td">{{$tt->bienso}}</td>
                        <td class="order-tab-td">{{date('d/m/Y',strtotime($tt->ngaydi))}} <br> {{date('H:i',strtotime($tt->thoigiandi))}}</td>
                        <td class="order-tab-td">@if ($tt->tenloaixe==1)Ghế ngồi <br> {{$tt->soluongghe}} Chỗ @else Giường nằm <br> {{$tt->soluongghe}} Chỗ @endif</td>
                        <td class="order-tab-td">{{$tt->vitri}}</td>
                        <?php $time = Carbon::now('Asia/Ho_Chi_Minh')->format('Y-m-d');  ?>
                        <td class="order-tab-td">
                            @if($tt->ngaydi<=$time)
                                <strong class="bnt btn-dark">Chuyến xe đã đi</strong>
                            @elseif($tt->trangthai ==1)
                                <strong class="succsess-payment">Đã thanh toán</strong>
                            @elseif($tt->trangthai ==0)
                                <strong class="waiting-payment">Chưa thanh toán</strong>
                            @else
                                <strong class="destroy-payment">Đã hủy</strong>
                            @endif
                        </td>
                        <td class="order-tab-td">
                            @if($tt->ngaydi<=$time)
                            @elseif ($tt->trangthai==1)

                            @elseif($tt->trangthai==0 && $tt->destroy==3)
                                    <button id="{{$tt->id}}" onclick="document.getElementById('destroyModal').style.display='block'" class="btn btn-destroy-ticket">Hủy</button>
                            @elseif($tt->trangthai==3)
                            @else
                            <div >Đã yêu cầu hủy</div>
                            @endif
                        </td>
                    </tr>
                    @endforeach
                 </body>
            </table>
        </div>
    </div>
    <!-- Modal destroyticket -->
        <div id="destroyModal" class="w3-modal">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
            <div class="w3-center"><br>
                <span onclick="document.getElementById('destroyModal').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
            </div>
            <form class="w3-container" method="post" action="{{route('huyve')}}">
            @csrf
                <input type="hidden" id="id-destroy" name="id">
                <div class="w3-section" style="text-align: center;">
                <label><b>Bạn chắc muốn hủy vé đã đặt</b></label>
                <button class="w3-button w3-block w3-red w3-section w3-padding" type="submit">Đồng ý</button>
                </div>
            </form>
            </div>
        </div>
    <!--  -->
<script type="text/javascript">
    $('.btn-destroy-ticket').click(function(){
       var id = $(this).attr('id');
       $('#id-destroy').val(id);
 });
</script>
@endsection
