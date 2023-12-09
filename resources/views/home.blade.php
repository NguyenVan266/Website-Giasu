@extends('layouts.app')
@section('title')
Nền tảng vé xe khách kết nối xe khách với nhà xe
@endsection
@section('content')
@include('sweetalert::alert')
<div class="search__ticket row">
    <div class="col container__search-form l-12 m-12 c-12">
        <form action="{{route('chuyenxe')}}" method="POST">
        @csrf
            <h3>Chuyên cung cấp vé xe chất lượng cao</h3>
            <?php $location = App\Models\Diadiem::all(); ?>
            <select name="searchdiemdi" class="search-form-input from" id="from">
                <option class="from" disabled="true" selected>Chọn điểm đi</option>
                @foreach ($location as $location)
                <!-- <option class="from" value="{{$location->tendiadiem}}">{{$location->tendiadiem}}</option> -->
                <option class="from" >{{$location->tendiadiem}}</option>
                @endforeach
            </select>
            <?php $location = App\Models\Diadiem::all(); ?>
            <select name="searchdiemden" class="search-form-input to" id="to">
                <option class="to" disabled="true" selected>Chọn điểm đến</option>
                @foreach ($location as $location)
                <!-- <option class="to" value="{{$location->tendiadiem}}">{{$location->tendiadiem}}</option> -->
                <option class="to">{{$location->tendiadiem}}</option>
                @endforeach
            </select>
            <input type="text" name="searchdate" value="{{date('d-m-Y',strtotime($time))}}" id="datepicker" class="search-form-input">
            <button type="submit" class="btn btn-search">Tìm chuyến</button>
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
 <script>
  $( function() {
    $( "#datepicker" ).datepicker({
        prevText: "Tháng trước",
        nextText: "Tháng sau",
        dateFormat:"dd-mm-yy",
        monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
        "Tháng 5", "Tháng 6", "THáng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        dayNamesMin: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
        duration: "slow",
        minDate: new Date()
    });
  } );

  $(document).ready(function() {
    $('#from').select2();
    $('#to').select2();
    });
  // $(document).ready(function(){
  //   $('.from').val('Hà Nội');
  //   $('.to').val('Lào Cai');
  // })
  /*select điểm đi, điểm đến*/
  // const from = document.querySelectorAll(".from option")
  // for(const i of from){
  //   if(i.value === 'Hà Nội'){
  //       i.setAttribute('selected','')
  //   }
  // }
  // const to = document.querySelectorAll(".to option")
  // for(const i of to){
  //   if(i.value === 'Lào Cai'){
  //       i.setAttribute('selected','')
  //   }
  // }
  /*End*/
  // function join(t, a, s) {
  //   function format(m) {
  //       let f = new Intl.DateTimeFormat('vi', m);
  //       return f.format(t);
  //   }
  //   return a.map(format).join(s);
  //   }

  //   let a = [{day: 'numeric'}, {month: 'numeric'}, {year: 'numeric'}];
  //   let s = join(new Date, a, '/');
  //   console.log(s);
  </script>
@endsection
