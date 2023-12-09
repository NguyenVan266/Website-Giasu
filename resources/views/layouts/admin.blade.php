<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Dashboard</title>
    {{-- delete icon --}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="{{asset('backend/select2/dist/css/select2.min.css')}}" rel="stylesheet" />
    <script src="{{asset('backend/select2/dist/js/select2.min.js')}}"></script>

    <!-- Custom fonts for this template-->
    <link href="{{asset('backend/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    {{-- <script src="{{asset('/fontend/js/jquery-3.5.1.min.js')}}"></script> --}}
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="{{asset('backend/css/sb-admin-2.min.css')}}" rel="stylesheet">
    <link href="{{asset('backend/vendor/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('/fontend/css/font-awesome/css/font-awesome.min.css')}}">
    {{--  --}}
    @yield('css')
</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
             @include('admin.leftadmin')
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                 @include('admin.topadmin')
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    @yield('content')
                </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Đăng xuất ?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Bạn có muốn đăng xuất ngay không ?</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Hủy</button>
                    <form method="POST" action="{{route('dangxuat')}}">
                    @csrf
                    <button type="submit" class="btn btn-primary">Đăng xuất</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="{{asset('backend/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('backend/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{asset('backend/vendor/jquery-easing/jquery.easing.min.js')}}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{asset('backend/js/sb-admin-2.min.js')}}"></script>

    <!-- Page level plugins -->
    <script src="{{asset('backend/vendor/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('backend/ckeditor/ckeditor.js')}}"></script>

    <!-- Page level custom scripts -->
    <script src="{{asset('backend/js/demo/chart-area-demo.js')}}"></script>
    <script src="{{asset('backend/js/demo/chart-pie-demo.js')}}"></script>

    <script src="{{asset('backend/vendor/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('backend/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>

    <!-- Page level custom scripts -->
    <script src="{{asset('backend/js/demo/datatables-demo.js')}}"></script>

    <script>
    //     $('#userEditModal').on('show.bs.modal', function (event) {
    //         console.log('Modal Opened');
    //         var button = $(event.relatedTarget);
    //         var name = button.data('name') ;
    //         var email = button.data('email') ;
    //         var address = button.data('address');
    //         var gender = button.data('gender');
    //         var phone = button.data('phone');
    //         var modal = $(this);

    //         modal.find('.modal-body #name').val(name);
    //         modal.find('.modal-body #email').val(email);
    //         modal.find('.modal-body #address').val(address);
    //         modal.find('.modal-body #gender').val(gender);
    //         modal.find('.modal-body #phone').val(phone);
    //   })
    /*user*/
    $('#userEditModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var name = button.data('name')
        var email = button.data('email')
        var address = button.data('address')
        var gender = button.data('gender')
        var phone = button.data('phone')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa thông tin thành viên');
        modal.find('.modal-body #name').val(name);
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #email').val(email);
        modal.find('.modal-body #address').val(address);
        modal.find('.modal-body #gender').val(gender);
        modal.find('.modal-body #phone').val(phone);
    });
    /*END*/

     /*Employee*/
    $('#editemployeeModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var tennv = button.data('tennv')
        var cmnd  = button.data('cmnd')
        var banglai  = button.data('banglai')
        var ngaysinh = button.data('ngaysinh')
        var gioitinh = button.data('gioitinh')
        var diachi = button.data('diachi')
        var dienthoai  = button.data('dienthoai')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa thông tin tài xế');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #tennv').val(tennv);
        modal.find('.modal-body #cmnd').val(cmnd);
        modal.find('.modal-body #banglai').val(banglai);
        modal.find('.modal-body #ngaysinh').val(ngaysinh);
        modal.find('.modal-body #diachi').val(diachi);
        modal.find('.modal-body #dienthoai').val(dienthoai);
        if(gioitinh == 1){
        modal.find('.modal-body #male').attr('checked', true);
        } else {
        modal.find('.modal-body #female').attr('checked', true);
        }
    });
    /*END*/
    /*city*/
     $('#cityEditModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var tendiadiem = button.data('tendiadiem')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa tỉnh thành');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #tendiadiem').val(tendiadiem);
    });
    /*end*/
    /*tuyenduong*/
     $('#tuyenduongEditModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var diemdi = button.data('diemdi')
        var diemden = button.data('diemden')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa tỉnh thành');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #diemdi').val(diemdi);
        modal.find('.modal-body #diemden').val(diemden);
    });
    /*end*/
    /*Diemdontra*/
     $('#diemdontraEditModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var id_tuyenduong = button.data('id_tuyenduong')
        var diemdon = button.data('diemdon')
        var diemtra = button.data('diemtra')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa tỉnh thành');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #id_tuyenduong').val(id_tuyenduong);
        modal.find('.modal-body #diemdon').val(diemdon);
        modal.find('.modal-body #diemtra').val(diemtra);
    });
    /*END*/
    /*Route*/
     $('#editrouteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var id_tuyenduong  = button.data('id_tuyenduong')
        var diemdon = button.data('diemdon')
        var diemtra = button.data('diemtra')
        var tramdung  = button.data('tramdung')
        var thoigiandi  = button.data('thoigiandi')
        var thoigianden  = button.data('thoigianden')
        var ngaydi  = button.data('ngaydi')
        var ngayden  = button.data('ngayden')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa lộ trình');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #id_tuyenduong').val(id_tuyenduong);
        modal.find('.modal-body #diemdon').val(diemdon);
        modal.find('.modal-body #diemtra    ').val(diemtra);
        modal.find('.modal-body #tramdung').val(tramdung);
        modal.find('.modal-body #thoigiandi').val(thoigiandi);
        modal.find('.modal-body #thoigianden').val(thoigianden);
        modal.find('.modal-body #ngaydi').val(ngaydi);
        modal.find('.modal-body #ngayden').val(ngayden);
    });
    /*End*/
    /*Typecar*/
     $('#edittypecarModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var tenloaixe  = button.data('tenloaixe')
        var soluongghe = button.data('soluongghe')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa loại xe');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #tenloaixe').val(tenloaixe);
        modal.find('.modal-body #soluongghe').val(soluongghe);
    });
    /*End*/
    /*Car*/
     $('#editcarModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var id_loaixe  = button.data('id_loaixe')
        var tenxe = button.data('tenxe')
        var bienso = button.data('bienso')

        var trangthai  = button.data('trangthai')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa xe');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #id_loaixe').val(id_loaixe);
        modal.find('.modal-body #tenxe').val(tenxe);
        modal.find('.modal-body #bienso').val(bienso);

        modal.find('.modal-body #trangthai').val(trangthai);
    });
    /*End*/
    /*Buses*/
     $('#editbusesModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var id_lotrinh  = button.data('id_lotrinh')
        var id_nhanvien  = button.data('id_nhanvien')
        var id_xe  = button.data('id_xe')
        var giave  = button.data('giave')
        var trangthai  = button.data('trangthai')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa vé');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #id_lotrinh').val(id_lotrinh);
        modal.find('.modal-body #id_nhanvien').val(id_nhanvien);
        modal.find('.modal-body #id_xe').val(id_xe);
        modal.find('.modal-body #giave').val(giave);
        modal.find('.modal-body #trangthai').val(trangthai);
    });
    /*End*/
    /*Ticket*/
     $('#editticketModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var trangthai  = button.data('trangthai')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa vé');
        modal.find('.modal-body #id').val(id)
        modal.find('.modal-body #trangthai').val(trangthai);
    });
    /*End*/
    /*NEWS*/
    $('#editnewsModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var tieude  = button.data('tieude')
        var image  = button.data('image')
        var mota  = button.data('mota')
        var noidung  = button.data('noidung')
        var slide  = button.data('slide')
        var active  = button.data('active')
        var modal = $(this)
        modal.find('.modal-title').text('Chỉnh sửa vé');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #tieude').val(tieude);
        modal.find('.modal-body #image').val(image);
        modal.find('.modal-body #mota').val(mota);
        modal.find('.modal-body .noidung').val(noidung);
        modal.find('.modal-body #slide').val(slide);
        modal.find('.modal-body #active').val(active);
    });
    /*END*/
    /*OrderTicket*/
    $('#updateOrderModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id  = button.data('id')
        var trangthai  = button.data('trangthai')
        var modal = $(this)
        modal.find('.modal-title').text('Cập nhật đơn vé');
        modal.find('.modal-body #id').val(id);
        modal.find('.modal-body #trangthai').val(trangthai);
    });
    /*END*/
                        /*-------------------------------------------DELETE-------------------------------------------------*/
    /*USER*/
    $('#userDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá thông tin thành viên');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*ADMIN*/
    $('#adminDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá thông tin quản trị');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*Employee*/
    $('#dlemployee').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá thông tin nhân viên');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*city*/
     $('#cityDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá tỉnh thành');
        modal.find('.modal-body #id').val(id);
    });
    /*end*/
    /*tuyenduong*/
     $('#tuyenduongDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá tuyến');
        modal.find('.modal-body #id').val(id);
    });
    /*end*/
      /*Dontra*/
     $('#diemdontraDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá đón trả');
        modal.find('.modal-body #id').val(id);
    });
    /*end*/
    /*Typecar*/
     $('#dltypecarModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá loại xe');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*Car*/
     $('#dlcarModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá xe');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*route*/
     $('#dlrouteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá ghế');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
     /*Buses*/
     $('#dlbusesModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá chuyến xe');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*Ticket*/
     $('#dlticketModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá vé');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/ /*Ticket*/
     $('#huyveModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Hủy vé');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*News*/
     $('#deletenewsModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá tin tức');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    /*Slide*/
    $('#deleteslideModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá slide');
        modal.find('.modal-body #id').val(id);
    });
    /*END*/
    $('#contactDeleteModal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Xoá liên hệ');
        modal.find('.modal-body #id').val(id);
    });
    </script>
    <script>
        CKEDITOR.replace('noidung_add');
        CKEDITOR.replace('noidung_edit');
        CKEDITOR.replace('title_add');
        CKEDITOR.replace('title_edit');
    </script>
    <script type="text/javascript">
    $('thead').on('click','.addRow',function(){
        var tr = '<tr>'+
        '<td><input type="text" name="tendiadiem[]" id="tendiadiem"  class="form-control"></td>'+
        '<td><a href="javascript:;" class="btn btn-danger deleteRow">-</a></td>'+
      '</tr>';
      $('tbody').append(tr);
    });
    $('tbody').on('click','.deleteRow',function(){
        $(this).parent().parent().remove();
    });
    $('thead').on('click','.addRow2',function(){
        var tr = '<tr>'+
        '<td>'+
        '<div>'
            +'<label for="tuyenduong" class="col-md-4 col-form-label text-md-right">Điểm đi</label>'+
             '<select name="diemdi[]" id="diemdi" class="form-control">'+
              '<option selected disabled>Chọn điểm đi</option>'+
              '@php
              $diadiem = App\Models\Diadiem::all();
              @endphp'+
              '@foreach ($diadiem as $diadiem)'+
              '<option value="{{$diadiem->tendiadiem}}" >{{$diadiem->tendiadiem}}</option>'+
              '@endforeach'+
            '</select>'+
        '</div>'+
        '</td>'+
        '<td>'+
        '<div>'
            +'<label for="tuyenduong" class="col-md-4 col-form-label text-md-right">Điểm đến</label>'+
             '<select name="diemden[]" id="diemden" class="form-control">'+
              '<option selected disabled>Chọn điểm đi</option>'+
              '@php
              $diadiem = App\Models\Diadiem::all();
              @endphp'+
              '@foreach ($diadiem as $diadiem)'+
              '<option value="{{$diadiem->tendiadiem}}">{{$diadiem->tendiadiem}}</option>'+
              '@endforeach'+
            '</select>'+
        '</div>'+
        '</td>'+
        '<td><a href="javascript:;" class="btn btn-danger deleteRow">-</a></td>'+
      '</tr>';
      $('tbody').append(tr);
    });
    $('tbody').on('click','.deleteRow2',function(){
        $(this).parent().parent().remove();

    });
    $('thead').on('click','.addRow3',function(){
        var tr = '<tr>'+
        '<td>'+
            '<label for="id_tuyenduong" class="col-form-label text-md-right">Tuyến đường</label>'+
             '<select name="id_tuyenduong[]" id="id_tuyenduong" class="form-control">'+
              '<option selected disabled>Chọn điểm đi</option>'+
              '@php
              $tuyenduong = App\Models\Tuyenduong::all();
              @endphp'+
              '@foreach ($tuyenduong as $tuyenduong)'+
              '<option value="{{$tuyenduong->id}}" >{{$tuyenduong->diemdi}} - {{$tuyenduong->diemden}}</option>'+
              '@endforeach'+
            '</select>'+
        '</td>'+
        '<td>'+
            '<label for="diemdon" class=" col-form-label text-md-right">Điểm đón</label>'+
             '<input id="diemdon" type="text" class="form-control" name="diemdon[]">'+
        '</td>'+
        '<td>'+
          '<label for="diemtra" class=" col-form-label text-md-right">Điểm trả</label>'+
           '<input id="diemtra" type="text" class="form-control" name="diemtra[]" >'+
        '</td>'+
        '<td><a href="javascript:;" class="btn btn-danger deleteRow">-</a></td>'+
      '</tr>';
      $('tbody').append(tr);
    });
    $('tbody').on('click','.deleteRow3',function(){
        $(this).parent().parent().remove();

    });

    </script>
    @yield('script')
</body>
</html>
