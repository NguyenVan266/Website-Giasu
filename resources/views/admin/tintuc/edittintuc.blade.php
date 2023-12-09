@extends('layouts.admin')
@section('content')
<div class="container" style="margin-top: 40px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" style="width:1000px;margin-left: -130px;">
                <div class="card-header">
                    <h6><a href="{{ route('news.list') }}" style="text-decoration: none; color: black;">Trở lại</a></h6>
                <div class="text-center" style="color: black">Sửa tin tức</div>
                </div>
                <div class="card-body" >
                    <form method="POST" action="{{route('news.update',$news->id)}}" enctype="multipart/form-data">
                        @csrf
                        @if(session('success'))
                        <div class="alert-success" role="alert">
                        {{session('success')}}
                        </div>
                        @endif
                        @if(session('error'))
                        <div class="alert-danger" role="alert">
                        {{session('error')}}
                        </div>
                        @endif
                        <br>
                    <div class="form-group row">
                        <label for="tieude" class="col-md-4 col-form-label text-md-right">Tiêu đề</label>
                            <div class="col-md-6">
                                <input id="slug" type="text" onkeyup="ChangeToSlug()" class="form-control" name="tieude" value="{{$news->tieude}}">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="slugnews" class="col-md-4 col-form-label text-md-right" >Slug</label>
                            <div class="col-md-6">
                                <input id="convert_slug" type="text" class="form-control" name="slugnews" value="{{$news->slugnews}}">
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="image" class="col-md-4 col-form-label text-md-right">Ảnh</label>
                            <div class="col-md-6">
                                <input  id="image" type="file" name="image" >
                            </div>
                    </div>
                    <input type="hidden" name="nguoisua" value="{{$user['id']}}">
                    <div class="form-group row">
                        <label for="mota" class="col-md-4 col-form-label text-md-right">Mô tả</label>
                            <div class="col-md-6">
                                <textarea name="mota" id="title_edit"   style="height:300px;width: 650px;">{{$news->mota}}
                                </textarea>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="address" class="col-md-4 col-form-label text-md-right">Nội dung</label>
                            <div class="col-md-6">
                                <textarea name="noidung" id="noidung_edit"   style="height:300px;width: 650px;">{{$news->noidung}}
                                </textarea>
                            </div>
                    </div>
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Kích hoạt</label>
                        <select name="active" id="active" class="form-control" style="width:255px; margin-left: 12px">
                          <option value="0" name="active">@if($news->active==0)Có @else Không @endif</option>
                          <option value="1" name="active">@if($news->active==1)Có @else Không @endif</option>
                        </select>
                    </div>
                        <br>
                        <div class="form-group row mb-0" style="margin-left: 130px;">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-success">
                                    {{ __('Cập nhật') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
