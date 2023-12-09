@extends('layouts.app')
@section('title')
Đặt vé online số 1 Việt Nam
@endsection
@section('content')
  <!-- Chi tiết tin tức -->
    <div class="container__views-news row no-gutters l-12 m-12 c-12">
        @foreach($tintuc as $tt)
            <div class="view-news-title">
                {{$tt->tieude}}
            </div>

            <div class="view-news-date">
                <i class="fa fa-calendar" aria-hidden="true">
                        {{date('d-m-Y H:i:s',strtotime($tt->created_at))}}
                </i>
            </div>

            <div class="view-news-describe">
                {!!$tt->mota!!}
            </div>

            <div class="view-news-content">
                {!! $tt->noidung !!}
            </div>
        @endforeach
    </div>
          <!-- Tin tức khác -->
        <div class="other__news row l-12 m-12 c-12">Tin tức khác</div>
        <div class="body__other-news row">
            @foreach ($tintuckhac as $tt)
            <div class="other__news-list col l-3 m-3 c-6">
                <div class="body__other-news--list">
                <img src="{{asset('uploads/tintuc/'. $tt->image)}}" alt="">
                    <a href="{{route('viewtintuc',$tt->slugnews)}}" class="news__list-link">{{$tt->tieude}}</a>
                </div>
            </div>
            @endforeach
        </div>

@endsection
