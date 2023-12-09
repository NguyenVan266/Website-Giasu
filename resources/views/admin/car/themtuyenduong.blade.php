@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
<div class="container">
  <h2>Thêm mới địa điểm</h2>
  <form method="POST" action="{{route('tuyenduong.create')}}">
    @csrf
      <table class="table">
        <thead>
          <tr>
            <th>Tuyến Đường</th>
            <th><a href="javascript:;" class="btn btn-info addRow2">+</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div >
                <label for="diemdi" class="col-md-4 col-form-label text-md-right">Điểm đi</label>
                 <select name="diemdi[]" id="diemdi" class="form-control">
                  <option selected disabled>Chọn điểm đi</option>
                  @php
                  $diadiem = App\Models\Diadiem::all();
                  @endphp
                  @foreach ($diadiem as $diadiem)
                  <option value="{{$diadiem->tendiadiem}}">{{$diadiem->tendiadiem}}</option>
                  @endforeach
                </select>
              </div>
            </td>
            <td>
              <div >
                <label for="diemden" class="col-md-4 col-form-label text-md-right">Điểm đến</label>
                 <select name="diemden[]" id="diemden" class="form-control" >
                  <option selected disabled>Chọn điểm đến</option>
                  @php
                  $diadiem = App\Models\Diadiem::all();
                  @endphp
                  @foreach ($diadiem as $diadiem)
                  <option value="{{$diadiem->tendiadiem}}" >{{$diadiem->tendiadiem}}</option>
                  @endforeach
                </select>
              </div>
            </td>
            <td><a href="javascript:;" class="btn btn-danger deleteRow2">-</a></td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success" type="submit" style="text-align: center;">Thêm</button>
  </form>
</div>
@endsection



