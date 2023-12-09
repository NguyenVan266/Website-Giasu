@extends('layouts.admin')
@section('content')
@include('sweetalert::alert')
<div class="container">
  <h2>Thêm mới địa điểm</h2>
  <form method="POST" action="{{route('location.create')}}">
    @csrf
      <table class="table">
        <thead>
          <tr>
            <th>Tên địa điểm</th>
            <th><a href="javascript:;" class="btn btn-info addRow">+</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" name="tendiadiem[]" id="tendiadiem"  class="form-control"></td>
            <td><a href="javascript:;" class="btn btn-danger deleteRow">-</a></td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success" type="submit" style="text-align: center;">Thêm</button>
  </form>
</div>
@endsection

