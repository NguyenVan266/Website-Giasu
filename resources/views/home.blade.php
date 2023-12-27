@extends('layouts.app')
@section('title')
Nền tảng vé xe khách kết nối xe khách với nhà xe
@endsection
@section('content')
@include('sweetalert::alert')
<link rel="stylesheet" href="{{asset('/fontend/css/home.css')}}">
<div class="search__ticket row">
    <div class="col container__search-form l-12 m-12 c-12">
        <form action="{{route('chuyenxe')}}" method="POST">
        @csrf
            <h3>Chuyên cung cấp vé xe chất lượng cao</h3>
            <div class="box_buses">
                <div class="box_top">
                    <div class="item_top box_trip">
                        <div class="title_item">
                            <span>Từ</span>
                        </div>
                        <div class="select_item">
                             <?php $location = App\Models\Diadiem::all(); ?>
                            <select name="searchdiemdi" class="select_form select_di search-form-input from" id="from">
                                <option class="from" disabled="true" selected>Chọn điểm đi</option>
                                @foreach ($location as $location)
                                <!-- <option class="from" value="{{$location->tendiadiem}}">{{$location->tendiadiem}}</option> -->
                                <option class="from" value="{{$location->id}}" >{{$location->tendiadiem}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="item_center">
                        <img src="/images/doi_vi_tri.svg" alt="Icon">
                    </div>
                    <div class="item_top box_return_trip">
                        <div class="title_item">
                            <span>Đến</span>
                        </div>
                        <div class="select_item">
                            <?php $location = App\Models\Diadiem::all(); 
                            ?>
                            <select name="searchdiemden" class="select_form select_ve search-form-input to" id="to">
                                <option class="to" disabled="true" selected>Chọn điểm đến</option>
                                @foreach ($location as $location)
                                <option class="to" value="{{$location->id}}">{{$location->tendiadiem}}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <div class="box_bottom">
                    <div class="bottom_item">
                        <div class="title_item">
                            Ngày khởi hành
                        </div>
                        <div class="item_content">
                            <div class="item_img">
                                <img src="/images/lich.svg" alt="Icon">
                            </div>
                            <div class="item_input">
                                <input type="text" name="searchdate" value="{{date('d-m-Y',strtotime($time))}}" id="datepicker" class="search-form-input">
                            </div>
                        </div>
                    </div>
                    <div class="bottom_item">
                        <div class="title_item">
                            Khứ hồi
                        </div>
                        <div class="item_content khu_hoi">
                            <div class="item_img">
                                <img src="/images/lich.svg" alt="Icon">
                            </div>
                            <div class="item_input">
                                <input type="text" name="searchdate" value="{{date('d-m-Y',strtotime($time))}}" id="datepicker" class="search-form-input">
                            </div>
                        </div>
                    </div>
                    <div class="bottom_item">
                        <div class="title_item">
                            Số ghế
                        </div>
                        <div class="item_content">
                            <div class="item_img">
                                <img src="/images/soghe.svg" alt="Icon">
                            </div>
                            <div class="item_input">
                                {{-- <input type="text" name="searchdate" value="{{date('d-m-Y',strtotime($time))}}" id="datepicker" class="search-form-input"> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box_btn">
                    <button type="submit" class="btn btn-search">Tìm chuyến</button>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="container__news-ticket">
    <h3>Tin tức nổi bật</h3>
    <div class="news__ticket row ">
        @foreach ($tintuc as $tt)
        <div class="col  news__ticket-list l-3 m-4 c-6">
            <div class="body__news-ticket">
                <img src="{{asset('uploads/tintuc/'. $tt->image)}}" alt="">
                <a href="{{route('viewtintuc',$tt->slugnews)}}" class="news__ticket-link">{{$tt->tieude}}</a>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection
@section('script')
<script src="{{ asset('fontend/js/home.js') }}"></script>
@endsection
