@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
<div class="container">
  <h2>Thêm mới đón trả</h2>
  <form method="POST" action="{{route('diemdontra.create')}}">
    @csrf
      <table class="table">
        <thead>
          <tr>
            <th>Điểm đón trả</th>
            <th><a href="javascript:;" class="btn btn-info addRow3">+</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <label for="id_tuyenduong" class=" col-form-label text-md-right">Tuyến đường</label>
                 <select name="id_tuyenduong[]" id="id_tuyenduong" class="form-control" >
                  <option selected disabled>Chọn tuyến</option>
                  @php
                  $tuyenduong = App\Models\Tuyenduong::all();
                  @endphp
                  @foreach ($tuyenduong as $tuyenduong)
                  <option value="{{$tuyenduong->id}}" >{{$tuyenduong->diemdi}} - {{$tuyenduong->diemden}}</option>
                  @endforeach
                </select>
            </td>
            <td>
                <label for="diemdon" class=" col-form-label text-md-right">Điểm đón</label>
                 <input id="diemdon" type="text" class="form-control" name="diemdon[]">
            </td>
            <td>
              <label for="diemtra" class=" col-form-label text-md-right">Điểm trả</label>
               <input id="diemtra" type="text" class="form-control" name="diemtra[]" >
            </td>
            <td><a href="javascript:;" class="btn btn-danger deleteRow3">-</a></td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success" type="submit" style="text-align: center;">Thêm</button>
  </form>
</div>
@endsection



