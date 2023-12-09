<style>
body {
    font-family: 'Varela Round', sans-serif;
}
.modal-confirm {
    color: #636363;
    width: 400px;
}
.modal-confirm .modal-content {
    padding: 20px;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-size: 14px;
}
.modal-confirm .modal-header {
    border-bottom: none;
    position: relative;
}
.modal-confirm h4 {
    text-align: center;
    font-size: 26px;
    margin: 30px 0 -10px;
}
.modal-confirm .close {
    position: absolute;
    top: -5px;
    right: -2px;
}
.modal-confirm .modal-body {
    color: #999;
}
.modal-confirm .modal-footer {
    border: none;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    padding: 10px 15px 25px;
}
.modal-confirm .modal-footer a {
    color: #999;
}
.modal-confirm .icon-box {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    z-index: 9;
    text-align: center;
    border: 3px solid #f15e5e;
}
.modal-confirm .icon-box i {
    color: #f15e5e;
    font-size: 46px;
    display: inline-block;
    margin-top: 13px;
}
.modal-confirm .btn, .modal-confirm .btn:active {
    color: #fff;
    border-radius: 4px;
    background: #60c7c1;
    text-decoration: none;
    transition: all 0.4s;
    line-height: normal;
    min-width: 120px;
    border: none;
    min-height: 40px;
    border-radius: 3px;
    margin: 0 5px;
}
.modal-confirm .btn-secondary {
    background: #c1c1c1;
}
.modal-confirm .btn-secondary:hover, .modal-confirm .btn-secondary:focus {
    background: #a8a8a8;
}
.modal-confirm .btn-danger {
    background: #f15e5e;
}
.modal-confirm .btn-danger:hover, .modal-confirm .btn-danger:focus {
    background: #ee3535;
}
.trigger-btn {
    display: inline-block;
    margin: 100px auto;
}
</style>
@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
<div class="container-fluid">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Danh sách tin tức</h6>
                            <br>
                            @if(session('success'))
                            <div class="alert alert-success" role="alert">
                            {{session('success')}}
                            </div>
                            @endif
                            @if(session('error'))
                            <div class="alert alert-danger" role="alert">
                            {{session('error')}}
                            </div>
                            @endif
                        </div>
                        @can('add-tintuc')
                        <div class="col-sm-6" style="margin-top: 10px;">
                            <a href="#createnewsModal" class="btn btn-success" data-toggle="modal"><i class="material-icons"></i> <span>Thêm mới tin tức</span></a>
                        </div>
                        @endcan
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Tiêu đề</th>
                                            <th>slug tin tức</th>
                                            <th >Ảnh</th>
                                            <th>Mô tả</th>
                                            <!-- <th>ID đăng</th>
                                            <th>ID sửa</th> -->
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @php

                                    $i=0;
                                    @endphp
                                    @foreach ($news as $key =>  $list)
                                    @php


                                    $i++;
                                    @endphp
                                        <tr>
                                            <td>{{$i}}</td>
                                            <td>{{$list->id}}</td>
                                            <td>{{$list->tieude}}</td>
                                            <td>{{$list->slugnews}}</td>
                                            <td><img src="{{asset('uploads/tintuc/'. $list->image)}}" width="150px" height="90px"></td>
                                            <td>{!!$list->mota!!}</td>
                                            <!-- <td>{{$list->nguoidang}}</td>
                                            <td>{{$list->nguoisua}}</td> -->
                                            <td>
                                                @if ($list->active==0)
                                                    <strong class="btn btn-success">
                                                        <a href="{{route('news.unactive',$list->id)}}" style="color:white;text-decoration: none";>
                                                            Hiện
                                                        </a>
                                                    </strong>
                                                @else
                                                    <strong class="btn btn-danger">
                                                        <a href="{{route('news.active',$list->id)}}" style="color:white;text-decoration: none;">
                                                            Ẩn
                                                        </a>
                                                    </strong>
                                                @endif
                                            </td>
                                            <td>
                                                <ul class="list-inline m-0">
                                                    @can('edit-tintuc')
                                                    <li class="list-inline-item">
                                                        <a href="{{route('news.suatintuc',$list->id)}}"  class="btn btn-success btn-sm rounded-0"><i class="fa fa-edit"></i></a>
                                                    </li>
                                                    @endcan
                                                    @can('delete-tintuc')
                                                    <li class="list-inline-item">
                                                        <button data-id="{{$list->id}}" data-target="#deletenewsModal" class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button>
                                                    </li>
                                                    @endcan
                                                </ul>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{{-- modal add news --}}
<div class="modal" id="createnewsModal">
    <form id="addform" method="POST" action="{{route('news.create')}}" enctype="multipart/form-data">
    @csrf
    <div class="modal-dialog">
      <div class="modal-content" style="width: 1000px;margin-left: -220px;">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Thêm tin tức</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="modal-body" style="margin-left: -200px;">
                    <div class="form-group row">
                        <label for="tieude" class="col-md-4 col-form-label text-md-right">Tiêu đề</label>
                            <div class="col-md-6">
                                <input id="slug" type="text" onkeyup="ChangeToSlug()" class="form-control" name="tieude">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="slugnews" class="col-md-4 col-form-label text-md-right">Slug</label>
                            <div class="col-md-6">
                                <input id="convert_slug" type="text" class="form-control" name="slugnews">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="image" class="col-md-4 col-form-label text-md-right">Ảnh</label>
                            <div class="col-md-6">
                                <input  id="image" type="file" name="image" >
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="mota" class="col-md-4 col-form-label text-md-right">Mô tả</label>
                            <div class="col-md-6">
                                {{-- <input id="mota" type="text" class="form-control" name="mota" > --}}
                                <textarea name="mota" id="title_add" class="form-control" style="height:300px;width: 650px;">

                                </textarea>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="noidung" class="col-md-4 col-form-label text-md-right">Nội dung</label>
                            <div class="col-md-6">
                                <textarea name="noidung" id="noidung_add" class="form-control" style="height:300px;width: 650px;">

                                </textarea>
                            </div>
                    </div>
                    <input type="hidden" name="nguoidang" value="{{ $user['id'] }}">
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Kích hoạt</label>
                        <select name="active" id="active" class="form-control" style="width:255px; margin-left: 12px">
                          <option value="0"  name="active">Có</option>
                          <option value="1"  name="active">Không</option>
                        </select>
                    </div>
            </div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
          <button type="submit" class="btn btn-success">Thêm</button>
        </div>
      </div>
    </div>
    </form>
</div>
{{-- modal delete news --}}
<div id="deletenewsModal" class="modal fade">
    <form action="{{route('news.destroy')}}" method="POST">
    @csrf
    <div class="modal-dialog modal-confirm">
        <div class="modal-content" >
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xE5CD;</i>
                </div>
                <h4 class="modal-title w-100">Bạn có chắc không ?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="id" name="id">
                <p>Bạn có thực sự muốn xóa các bản ghi này không? Không thể hoàn tác quá trình này.</p>
            </div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                <button type="submit" class="btn btn-danger">Xóa</button>
            </div>
        </div>
    </div>
    </form>
</div>
</div>
@endsection
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
    function ChangeToSlug()
        {
            var slug;

            //Lấy text từ thẻ input title
            slug = document.getElementById("slug").value;
            slug = slug.toLowerCase();
            //Đổi ký tự có dấu thành không dấu
                slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
                slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
                slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
                slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
                slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
                slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
                slug = slug.replace(/đ/gi, 'd');
                //Xóa các ký tự đặt biệt
                slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
                //Đổi khoảng trắng thành ký tự gạch ngang
                slug = slug.replace(/ /gi, "-");
                //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
                //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
                slug = slug.replace(/\-\-\-\-\-/gi, '-');
                slug = slug.replace(/\-\-\-\-/gi, '-');
                slug = slug.replace(/\-\-\-/gi, '-');
                slug = slug.replace(/\-\-/gi, '-');
                //Xóa các ký tự gạch ngang ở đầu và cuối
                slug = '@' + slug + '@';
                slug = slug.replace(/\@\-|\-\@|\@/gi, '');
                //In slug ra textbox có id “slug”
            document.getElementById('convert_slug').value = slug;
        }
</script>
{{-- <script>
    $(document).ready(function(){
        // add news
        $('#addform').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "{{route('news.create')}}",
                data: $('#addform').serialize(),
                success: function(response){
                    console.log(response)
                    $('#createnewsModal').modal('hide')
                    alert("Thêm mới thành công");
                    location.reload();
                },
                error: function(error){
                    console.log(error)
                    alert("Thêm mới thất bại");
                }
            });
        });
    });

</script> --}}

