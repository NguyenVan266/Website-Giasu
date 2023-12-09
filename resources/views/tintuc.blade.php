@extends('layouts.app')
@section('title')
    Tin tức sự kiện
@endsection
@section('content')
    <div class="container__news">
        <h3>Tin tức sự kiện</h3>
            <div class="body__news row">
            @foreach ($tintuc as $tt)
            <div class="news__list col l-3 m-4 c-6">
                <div class="body__news-list">
                <img src="{{asset('uploads/tintuc/'. $tt->image)}}" alt="">
                    <a href="{{route('viewtintuc',$tt->slugnews)}}" class="news__list-link">{{$tt->tieude}}</a>
                </div>
            </div>
            @endforeach
        </div>
    </div>
        @if(count($tintuc) > 16)
        @section('css')
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        @endsection
        <div class="newsevent-pagination">
            <div>{{ $tintuc->links('pagination::bootstrap-4') }}</div>
        </div>
        @endif
    </div>
@endsection

