<style>
    .activePayment {
        display: block !important;
    }
    .activeDirect {
        display: block !important;
    }
    .centerghe {
        margin-top: 15px;
    }
    .centerghechk {
        margin-top: 15px;
    }
</style>
@extends('layouts.app')
@section('title')
Chọn loại ghế phù hợp
@endsection
@section('content')
@include('sweetalert::alert')
<div class="row" style="display: block;">
    <p class="information__schedule-text col l-12">
        Chọn vé cho chuyến đi của bạn<i class="fa fa-arrow-down"></i>
    </p>
    @if(session('thongbao'))
    <div class="container-alert">
        <div class="alert" role="alert">
        {{session('thongbao')}}
    </div>
    </div>
    @endif
</div>

<div class="information__schedule-body row">
    <div class="infomation__schedule-list col l-4 m-12 c-12">
        <p class="schedelu__list-text">Thông tin lịch trình</p>
        <div class="body__schedule-list">
            <form id="send" method="POST" action="{{route('datve')}}">
            @csrf
                @foreach($chonve as $chonve)
                @endforeach
                <input type="hidden" name="id_xe" value="{{$chonve->id_xe}}">
                <input type="hidden" name="id_chuyenxe" value="{{$chonve->id}}">
                <input type="hidden" name="hangxe" value="{{$chonve->tenxe}}">
                <input type="hidden" name="diemdi" value="{{$chonve->diemdi}}" >
                <input type="hidden" name="diemden" value="{{$chonve->diemden}}" >
                <input type="hidden" name="tramdung" value="{{$chonve->tramdung}}" >
                <input type="text" name="sum" value="{{$chonve->giave}}" hidden="">
                <input type="hidden" name="loaixe" value="@if ($chonve->tenloaixe==1) Ghế ngồi @else Giường nằm @endif" >
                <input type="hidden" name="laixe" value="{{$chonve->tennv}}">
                <input type="hidden" name="khoihanh" value="{{date('d/m/Y',strtotime($chonve->ngaydi))}} {{date('H:i',strtotime($chonve->thoigiandi))}}">
                <input type="hidden" id="selectedtext1"  name="soghe" value="">
                <input type="hidden" id="money1"  name="tongtien" value="">
                <input type="hidden" name="bienso" value="{{$chonve->bienso}}">
                <div class="schedule__format-list">
                    <label for="">Hãng xe</label>
                    <div>{{$chonve->tenxe}}</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Tuyến đường</label>
                    <div>{{$chonve->diemdi}} - {{$chonve->diemden}}</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Điểm đón</label>
                    <div>
                        <select name="diemdon" class="selectpoint" id="diemdon">
                            @php
                                $diemdon = App\Models\Diemdontra::where('id_tuyenduong', $chonve->id_tuyenduong)->get();
                            @endphp
                            <option selected disabled>Chọn điểm đón</option>
                            @foreach ($diemdon as $diemdon)
                            <option value="{{$diemdon->diemdon}}" name="diemdon">{{$diemdon->diemdon}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Điểm trả</label>
                    <div>
                        <select name="diemtra" class="selectpoint" id="diemtra">
                            @php
                            $diemtra = App\Models\Diemdontra::where('id_tuyenduong', $chonve->id_tuyenduong)->get();
                            @endphp
                            <option selected disabled>Chọn điểm trả</option>
                            @foreach ($diemtra as $diemtra)
                            <option value="{{$diemtra->diemtra}}" name="diemtra">{{$diemtra->diemtra}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                @if($chonve->tramdung === null)
                @else
                <div class="schedule__format-list">
                    <label for="">Trạm dừng</label>
                    <div>{{$chonve->tramdung}}</div>
                </div>
                @endif
                <div class="schedule__format-list">
                    <label for="">Giá vé</label>
                    <div>{{$chonve->giave/1000}}.000 VNĐ</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Loại xe</label>
                    <div>@if ($chonve->tenloaixe==1) Ghế ngồi @else Giường nằm @endif</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Lái xe</label>
                    <div>{{$chonve->tennv}}</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Khởi hành</label>
                    <div>{{date('d-m-Y',strtotime($chonve->ngaydi))}} <br> {{$chonve->thoigiandi}}</div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Vé trọn</label>
                    <div id="selectedtext" style="display: inline;"></div>
                </div>
                <div class="schedule__format-list">
                    <label for="">Tổng tiền</label>
                    <div id="money"></div>
                </div>
        </div>
        <div class="btn btn-book-ticket" id="open-modal">Đặt vé</div>
    </div>

    <div class="information__schedule-diagram col l-8 m-12 c-12">
        <p class="schedule__diagram-text">Sơ đồ ghế</p>
        <div class="body__schedule-diagram row">
            <div class="schedule__diagram-lv1 col l-12 m-12 c-12">
                <div class="schedule__diagram-select">
                @if($chonve->tenloaixe == 2)
                <?php  $sd = $chonve->sodo; $sohang=$chonve->sohang/2; $sohangvip=$chonve->sohang; $socot= $chonve->socot;   $dem=0; ?>
                        <table style="margin: auto">
                            <div>
                                <td><div class="diagram-selected">TX</div></td>
                            </div>
                                @for($i=0;$i<$sohang;$i++)
                                <tr>
                                    @for($j=0;$j<$socot;$j++)
                                      @if($sd[$i * $socot + $j]==2 && ($i * $socot + $j)==0)
                                      @elseif($sd[$i * $socot + $j] == 1)
                                          @if($ve[$dem]->trangthai == 2)
                                            <div>
                                              <td><div class="diagram-selected"><input type="checkbox"  checked="" disabled="" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</div>
                                              </td>
                                            </div>
                                          @elseif($ve[$dem]->trangthai == 1)
                                            <div>
                                              <td>
                                                <label for="{{$ve[$dem]->mave}}">
                                                <div class="diagram-empty">
                                                    <input type="checkbox" data-mave = "{{$ve[$dem]->mave}}" data-id = "{{$ve[$dem]->vitrighe}}" id="{{$ve[$dem]->mave}}"  value="{{$ve[$dem]->id}}" class="centerghe" name="datve[]" >
                                                    <br>
                                                    {{$ve[$dem]->vitrighe}}
                                                </div>
                                                </label>
                                            </td>
                                            </div>
                                            @elseif($ve[$dem]->trangthai == 3)
                                            <div>
                                              <td><div class="diagram-selected"><input type="checkbox" checked="" disabled="datve" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</td>
                                            </div>
                                          @endif
                                          <?php $dem++; ?>
                                      @else
                                          <td class="ghetrong"></td>
                                      @endif
                                    @endfor
                                </tr>
                                @endfor
                        </table>
                    <div class="lv-text">Tầng 1 giường nằm</div>
                </div>

            </div>
            <div class="schedule__diagram-lv2 col l-12 m-12 c-12">
                <div class="schedule__diagram-select">
                     <table style="margin: auto;">
                    @for($i=$sohang;$i<$sohangvip;$i++)
                      <tr>
                          @for($j=0;$j<$socot;$j++)
                              @if($sd[$i * $socot + $j]==2 && ($i * $socot + $j)==0)
                              @elseif($sd[$i * $socot + $j] == 1)
                                  @if($ve[$dem]->trangthai == 2)
                                    <div>
                                          <td><div class="diagram-selected"><input type="checkbox"  checked="" disabled="" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</div>
                                          </td>
                                    </div>
                                  @elseif($ve[$dem]->trangthai == 1)
                                    <div>
                                      <td>
                                        <label for="{{$ve[$dem]->mave}}">
                                        <div class="diagram-empty">
                                            <input type="checkbox" data-mave = "{{$ve[$dem]->mave}}" data-id = "{{$ve[$dem]->vitrighe}}" id="{{$ve[$dem]->mave}}"  value="{{$ve[$dem]->id}}" class="centerghe" name="datve[]">
                                            <br>
                                            {{$ve[$dem]->vitrighe}}
                                        </div>
                                        </label>
                                    </td>
                                    </div>
                                    @elseif($ve[$dem]->trangthai == 3)
                                        <div>
                                          <td><div class="diagram-selected"><input type="checkbox" checked="" disabled="datve" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</td>
                                        </div>
                                  @endif
                                  <?php $dem++; ?>
                              @else
                                  <td class="ghetrong"></td>
                              @endif
                          @endfor
                      </tr>
                      @endfor
                    </table>
                    <div class="lv-text">Tầng 2 giường nằm</div>
                     @else
                    <table style="margin: auto;">
                        <?php  $sd = $chonve->sodo; $socot = $chonve->socot; $sohang = $chonve->sohang; $dem=0; ?>
                        <div>
                            <td><div class="diagram-selected">TX</div></td>
                        </div>
                        @for($i=0;$i<$sohang;$i++)
                        <tr>
                        @for($j=0;$j<$socot;$j++)
                              @if($sd[$i * $socot + $j]==2 && ($i * $socot + $j)==0)
                              @elseif($sd[$i * $socot + $j] == 1)
                                  @if($ve[$dem]->trangthai == 2)
                                    <div>
                                      <td><div class="diagram-selected"><input type="checkbox"  checked="" disabled="" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</div>
                                      </td>
                                    </div>
                                  @elseif($ve[$dem]->trangthai == 1)
                                    <div>
                                      <td>
                                        <label for="{{$ve[$dem]->mave}}">
                                        <div class="diagram-empty">
                                            <input type="checkbox" data-mave = "{{$ve[$dem]->mave}}" data-id = "{{$ve[$dem]->vitrighe}}" id="{{$ve[$dem]->mave}}"  value="{{$ve[$dem]->id}}" class="centerghe" name="datve[]">
                                            <br>
                                            {{$ve[$dem]->vitrighe}}
                                        </div>
                                        </label>
                                    </td>
                                    </div>
                                    @elseif($ve[$dem]->trangthai == 3)
                                        <div>
                                          <td><div class="diagram-selected"><input type="checkbox" checked="" disabled="datve" class="centerghechk" name="datve[]"><br>{{$ve[$dem]->vitrighe}}</td>
                                        </div>
                                  @endif
                                  <?php $dem++; ?>
                              @else
                                  <td class="ghetrong"></td>
                              @endif
                        @endfor
                        </tr>
                         @endfor
                    </table>
                    <div class="lv-text">Ghế ngồi</div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    {{-- modal payment --}}
        <div class="modal-payment" id="modalBuyTicket">
            <div class="container-payment">
                <div class="close-payment" id="close-modal">
                    <i class="fa fa-close"></i>
                </div>
                <header class="header-payment">
                    <p>Chọn hình thức thanh toán</p>
                </header>

                <div class="body-payment">
                    <label class="label-payment" id="payment">
                        <i class="payment-icon fa fa-paypal"></i>
                        Thanh toán ATM / Chuyển khoản
                        <div class="modal-toggle-down">
                            <i class="fa fa-angle-right" id="rightpayment">

                            </i>
                        </div>
                    </label>
                    <div class="input-payment toggle-payment" id="toggle-payment">
                    <input name="payment" type="radio" value="2" id="selectpayment"> <label for="selectpayment" id="buyOnline">Thanh toán online</label>
                    <input type="hidden" class="buyonline" id="buyOnlineValue">
                    </div>
                    <label class="label-payment" id="direct">
                        <i class="money-icon fa fa-money"></i>
                        Thanh toán bằng tiền mặt khi nhận vé
                        <div class="modal-toggle-down">
                            <i class="fa fa-angle-right" id="rightdirect">
                            </i>
                        </div>
                    </label>
                    <div class="input-payment toggle-direct" id="toggle-direct">
                    <input name="payment" type="radio" id="selectdirect" value="1"> <label for="selectdirect"  id="buyOffline">Nhân viên giao nhận sẽ liên hệ với Quý khách để hẹn lịch giao vé. Trong trường hợp Quý khách đi vắng, vui lòng uỷ thác cho người khác nhận vé và thanh toán tiền.</label>
                    <span class="modal-text"><b>CHÚNG TÔI KHÔNG NHẬN ĐẶT VÉ LÊN XE TRẢ TIỀN!</b></span>
                    <span class="modal-text">(Phương thức THANH TOÁN TIỀN MẶT chỉ áp dụng cho nội thành Hà Nội)</span>
                    <input type="hidden" class="buyoffline" id="buyOfflineValue">
                    </div>
                </div>

                <footer class="footer-payment">
                    <button class="btn-submit-payment" id="thanhtoan">
                        Thanh toán
                    </button>
                </footer>
            </div>
        </div>
    </form>
</div>

@endsection
@section('script')
<script type="text/javascript">
    $(document).ready(function(){
        $('.centerghe').click(function(){
            var text = "";
            $('.centerghe:checked').each(function(){
                text+=$(this).data('id')+ ' ,';
            });
            text=text.substring(0,text.length-1);
            $('#selectedtext').text(text);
        });
    });
    $(function(){
        $('.centerghe').click(function(){
                var sum = {{$chonve->giave}};
                var count = $('.centerghe:checked').length;
                var tongtien = count * parseInt(sum);
                var tongtien = tongtien.toString()
                var format = tongtien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                if(count){
                    $("#money").text(`${format} VNĐ`);
                } else {
                    $("#money").text('');
                }
        });
    });
    const diemdon = document.getElementById('diemdon');
    const diemtra = document.getElementById('diemtra');
    const selectedText = document.getElementById('selectedtext');
    const modalBuys = document.getElementById('open-modal');
    const confirmBuysModal = document.getElementById('modalBuyTicket');
        modalBuys.addEventListener('click',function(){
        if(diemdon.value === 'Chọn điểm đón'){
            alert('vui lòng chọn điểm đón !');
        } else if(diemtra.value === 'Chọn điểm trả'){
            alert('vui lòng chọn điểm trả !');
        } else if(selectedText.innerHTML === '') {
            alert('Bạn chưa chọn vé !');
        } else {
            const openModal = document.getElementById('modalBuyTicket');
            const closeModal = document.getElementById('close-modal');
            const payment = document.getElementById('payment');
            const direct = document.getElementById('direct');
            const togglePayment = document.getElementById('toggle-payment');
            const toggleDirect = document.getElementById('toggle-direct');
            openModal.classList.add('open-modal')
            closeModal.addEventListener('click',function(){
                openModal.classList.remove('open-modal')})
                togglePayment.style.display = 'none'
                toggleDirect.style.display = 'none'
                document.getElementById('rightdirect').classList.remove('fa-angle-down');
                document.getElementById('rightpayment').classList.remove('fa-angle-down');
            //     toggleDirect.classList.remove('activeDirect');
            //     togglePayment.classList.remove('activePayment');
            //     document.getElementById('rightdirect').classList.remove('fa-angle-down');
            //     document.getElementById('rightpayment').classList.remove('fa-angle-down');
            // })
            // payment.addEventListener('click',function(){
            //     togglePayment.classList.toggle('activePayment');
            //     document.getElementById('rightpayment').classList.toggle('fa-angle-down');
            //     toggleDirect.classList.remove('activeDirect');
            //     document.getElementById('rightdirect').classList.remove('fa-angle-down');
            // })
            // direct.addEventListener('click',function(){
            //     toggleDirect.classList.toggle('activeDirect');
            //     document.getElementById('rightdirect').classList.toggle('fa-angle-down');
            //     togglePayment.classList.remove('activePayment');
            //     document.getElementById('rightpayment').classList.remove('fa-angle-down');
            // })
        }
    });
    $(document).ready(function(){
        $("#payment").click(function(){
            $( "#rightpayment" ).toggleClass("fa-angle-down");
            $(".toggle-direct").css({'display':'none'});
            $(".toggle-payment").slideToggle();
        });
        $("#direct").click(function(){
            $( "#right-direct" ).toggleClass("fa-angle-down");
            $(".toggle-payment").css({'display':'none'});
            $(".toggle-direct").slideToggle();
        });
        
    });  

    document.getElementById('buyOnline').addEventListener('click',function(){
        document.getElementById('buyOnlineValue').value = 2
        thanhtoan.disabled = false
    })
    document.getElementById('buyOffline').addEventListener('click',function(){
        document.getElementById('buyOfflineValue').value = 1
        thanhtoan.disabled = false
    })
    const thanhtoan = document.getElementById('thanhtoan')
    thanhtoan.addEventListener('click',function(){
        if(document.getElementsByClassName('buyonline')[0].value == 2 || document.getElementsByClassName('buyoffline')[0].value == 1) {
            
        } else {
            alert('Vui lòng chọn phương thức thanh toán !')
            thanhtoan.disabled = true
        }
    }) 

    
        
</script>
<script type="text/javascript">
    $(document).ready(function(){
        $('.centerghe').click(function(){
            var text = "";
            $('.centerghe:checked').each(function(){
                text+=$(this).data('id')+ ',';
            });
            text=text.substring(0,text.length-1);
            $('#selectedtext1').val(text);
        });

    });
    $(function(){
        $('.centerghe').click(function(){
                var sum = {{$chonve->giave/1000}};
                var count = $('.centerghe:checked').length;
                var tongtien = count * parseInt(sum);
                // $("#sum:checked").each(function(){
                //     if($(this).val() !== "")
                //       sum += +$(this).val();
                // });
                $("#money1").val(tongtien+"000");
        });
    });
</script>
{{-- <script type="text/javascript">
    $(document).ready(function(){
        $('.centerghe').click(function(){
            var text = "";
            $('.centerghe:checked').each(function(){
                text+=$(this).data('mave')+ ',';
            });
            text=text.substring(0,text.length-1);
            $('#mave').val(text);
        });
    });
</script> --}}
@endsection
