
@extends('layouts.app')
@section('title')
Chọn chuyến xe cần đi, nhanh chóng và tiện lợi
@endsection
{{-- @section('css')
<link rel="stylesheet" href="{{asset('/fontend/css/style.css')}}">
@endsection --}}
@section('content')
@include('sweetalert::alert')
<div class="container__search-bar--buses row">
    <div class="search__bar-form--buses col l-12 m-12 c-12">
        <i  class="fa fa-angle-right"   id="show-searchbar" aria-hidden="true"> Click tìm chuyến nhanh</i>
        <div class="bar__form-format">
            <form action="{{route('chuyenxe')}}" method="POST">
            @csrf
            <div class="bar__form-format--input">
                <select name="searchdiemdi" id="from" class="bar__form-input--buses searchdiemdi">
                        <?php $list = App\Models\Diadiem::all(); ?>
                        <option selected  disabled>Điểm đi</option>
                        @foreach ($list as $list)
                        <option value="{{$list->tendiadiem}}">{{$list->tendiadiem}}</option>
                        @endforeach
                </select>
                <select name="searchdiemden" id="to" class="bar__form-input--buses searchdiemden">
                        <?php $list = App\Models\Diadiem::all(); ?>
                        <option selected disabled>Điểm đến</option>
                        @foreach ($list as $list)
                        <option  value="{{$list->tendiadiem}}">{{$list->tendiadiem}}</option>
                        @endforeach
                </select>
                <input type="text" class="bar__form-input--buses searchdate" id="datepicker" name="searchdate">
                <button class="btn btn-search-bar">Tìm chuyến</button>
            </div>
            </form>
        </div>
    </div>
</div>
<div class="container__body-buses row">
    @if(count($chuyenxe)==0)
    <div class="search-list-alert">
    Xin Lỗi! Không Tìm Thấy Chuyến Xe Nào Theo Yêu Cầu Của Bạn, Vui Lòng Tìm Chuyến Xe Khác. <br>Xin cảm ơn!
    </div>
    @else
    <div class="filter__buses col l-3 m-12 c-12">
        <div style="border: 1px solid #ccc;">
        <p id="show-filter" class="show-toggle-filter">Bộ lọc tìm kiếm<i  class="fa fa-angle-right "   id="filter-right" aria-hidden="true" style="float: right;"></i></p>
        <p  class="hidden-toggle-filter">Bộ lọc tìm kiếm</p>
            <div id="show__filter-buses">
                <form action="{{route('chuyenxe')}}" method="POST">
                @csrf
                <input type="hidden" name="diemdi" value="{{$search['diemdi']}}">
                <input type="hidden" name="diemden" value="{{$search['diemden']}}">
                <input type="hidden" name="date" value="{{$search['date']}}">
                    <label for="">Nhà xe</label>
                    <ul>
                        @foreach ($filterxe as $nhaxe)
                        <li>
                            <input type="checkbox" name="nhaxe" value="{{$nhaxe->tenxe}}" id="{{$nhaxe->tenxe}}"><label for="{{$nhaxe->tenxe}}" style="display: inline;">{{$nhaxe->tenxe}}</label>
                        </li>
                        @endforeach
                    </ul>
                    <label for="">Trạm dừng</label>
                    <ul>
                        @foreach ($filtertramdung as $tramdung)
                        @if($tramdung->tramdung === null)

                        @else
                        <li>
                            <input type="checkbox" name="tramdung" value="{{$tramdung->tramdung}}" id="{{$tramdung->tramdung}}"><label for="{{$tramdung->tramdung}}" style="display: inline;">{{$tramdung->tramdung}}</label>
                        </li>
                        @endif
                        @endforeach
                    </ul>
                    <label for="">Loại ghế</label>
                    <ul>
                        <li>
                            <input type="checkbox" name="loaicho" value="1" id="Ghế ngồi"><label for="Ghế ngồi" style="display: inline;">Ghế ngồi</label>
                        </li>
                        <li>
                            <input type="checkbox" name="loaicho" value="2" id="Giường nằm"><label for="Giường nằm" style="display: inline;">Giường nằm</label>
                        </li>
                    </ul>
                    <button type="submit" class="btn btn-filter">Tìm kiếm</button>
                </form>
            </div>
        </div>
    </div>
    <div class="list__buses col l-9 m-12 c-12">
        <p>Kết quả tìm kiếm</p>
        <table>
            <thead>
                <tr>
                    <th class="list__buses-th hide__list-buses">STT</th>
                    <th class="list__buses-th">Nhà xe</th>
                    <th class="list__buses-th hide__list-buses">Tuyến đường</th>
                    <th class="list__buses-th hide__list-buses">Trạm dừng</th>
                    <th class="list__buses-th">Khởi hành</th>
                    <th class="list__buses-th">Loại xe</th>
                    <th class="list__buses-th hide__list-buses">Biển số</th>
                    <th class="list__buses-th">Giá vé</th>
                    <th class="list__buses-th">Chỗ trống</th>
                    <th class="list__buses-th">Thao tác</th>
                </tr>
            </thead>
            @php
            $i = 0;
            @endphp
            <tbody>
                @foreach($chuyenxe as $chuyenxe)
                @php
                $i++;
                @endphp
                <tr>
                    <td class="list__buses-td hide__list-buses">{{$i}}</td>
                    <td class="list__buses-td">{{$chuyenxe->tenxe}}</td>
                    <td class="list__buses-td hide__list-buses">{{$chuyenxe->diemdi}} -> {{$chuyenxe->diemden}}</td>
                    <td class="list__buses-td hide__list-buses">{{$chuyenxe->tramdung}}</td>
                    <td class="list__buses-td">{{date('d-m-Y',strtotime($chuyenxe->ngaydi))}} <br> {{$chuyenxe->thoigiandi}}</td>
                    <td class="list__buses-td">@if ($chuyenxe->tenloaixe==1)Ghế ngồi <br> {{$chuyenxe->soluongghe}} Chỗ @else Giường nằm <br> {{$chuyenxe->soluongghe}} Chỗ @endif</td>
                    <td class="list__buses-td hide__list-buses">{{$chuyenxe->bienso}}</td>
                    <td class="list__buses-td">{{$chuyenxe->giave/1000}}.000 VNĐ</td>
                    <?php $sove = DB::table('ve')->where('id_chuyenxe',$chuyenxe->id)->count('id_chuyenxe'); ?>
                    <?php $chotrong =  DB::table('ve')->where('id_user',Null)->where('id_chuyenxe',$chuyenxe->id)->count(); ?>
                    <td class="list__buses-td">{{$chotrong}}/{{$sove}}</td>
                    <?php $hetve =  DB::table('ve')->where('id_user',Null)->where('id_chuyenxe',$chuyenxe->id)->first()  ?>
                    @if ($hetve)
                    <td class="list__buses-td"><a href="{{route('chonve',$chuyenxe->id)}}"><button class="btn">Chọn</button></a></td>
                    @else
                        <td class="list__buses-td"><button class="btn" disable>Hết vé</button></a></td>
                    @endif
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    </div>
</div>
@endsection
@section('script')
<script type="text/javascript">
   $(document).ready(function () {
    $('.searchdiemdi').val('{{$search['diemdi']}}');
    $('.searchdiemden').val('{{$search['diemden']}}');
    $('.searchdate').val('{{date('d-m-Y',strtotime($search['date']))}}');
    });
   $(document).ready(function(){
      $("#show-searchbar").click(function(){
            $( "#show-searchbar" ).toggleClass("fa-angle-down");
            $(".bar__form-format").slideToggle();
        });
        $("#show-filter").click(function(){
            $( "#filter-right" ).toggleClass("fa-angle-down");
            $("#show__filter-buses").slideToggle();
        });
    });
</script>
 <script>
  $( function() {
    $( "#datepicker" ).datepicker({
        prevText: "Tháng trước",
        nextText: "Tháng sau",
        dateFormat:"dd-mm-yy",
        dayNamesMin: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
        duration: "slow",
        minDate: new Date(),
        monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
        "Tháng 5", "Tháng 6", "THáng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    });
  } );
  </script>
@endsection
