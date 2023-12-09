<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{asset('/fontend/css/w3.css')}}">
    <link rel="stylesheet" href="{{asset('/fontend/css/grid.css')}}">
    <link rel="stylesheet" href="{{asset('/fontend/css/base.css')}}">
    <link rel="stylesheet" href="{{asset('/fontend/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('/fontend/css/responsive.css')}}">
    <script src="{{asset('/fontend/js/jquery-3.5.1.min.js')}}"></script>
    <link rel="stylesheet" href="{{asset('/fontend/css/font-awesome/css/font-awesome.min.css')}}">
    <script src="https://unpkg.com/sweetalert2@7.18.0/dist/sweetalert2.all.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="{{asset('backend/select2/dist/css/select2.min.css')}}" rel="stylesheet" />
    <script src="{{asset('backend/select2/dist/js/select2.min.js')}}"></script>

    @yield('css')
</head>
<body>
    <div class="main">
        <div class="header">
            <div class="header__nav">
                <!-- nav-logo -->
                <div class="nav__logo">
                    <a href="{{route('index')}}" style="text-decoration: none;color: white;">Vexere<span>Online</span></a>
                </div>
                <!-- nav-menu -->
                <div class="nav__menu-pc hidden__nav-menu--pc">
                    <ul class="nav__menu-pc--list">
                        <li class="nav__menu-pc--item"><a href="{{route('index')}}" class="nav__menu-pc--link">Trang chủ</a></li>
                        <li class="nav__menu-pc--item"><a href="{{route('tintuc')}}" class="nav__menu-pc--link">Tin tức</a></li>
                        <li class="nav__menu-pc--item"><a href="{{route('gioithieu')}}" class="nav__menu-pc--link">Giới thiệu</a></li>
                        <li class="nav__menu-pc--item"><a href="{{route('lienhe')}}" class="nav__menu-pc--link">Liên hệ</a></li>
                        @guest
                        @if (Route::has('login'))
                            <li class="nav__menu-pc--item"><a href="javascript:void(0)" id="login"  class="nav__menu-pc--link login">Đăng nhập</a></li>
                        @endif
                        @if (Route::has('register'))
                            <li class="nav__menu-pc--item"><a href="javascript:void(0)" id="register" class="nav__menu-pc--link register">Đăng ký</a></li>
                        @endif
                        @else
                        <li class="nav__menu-pc--item">
                        <a href="#" class="nav__menu-pc--link" >{{ Auth::user()->name }}</a>
                            <ul class="sub__nav-pc">
                                <li>
                                    <a class="dropdown-link" href="{{route('profile')}}" >
                                        <i class="fa fa-user-o"></i>  {{ __('Thông tin tài khoản') }}
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-link" href="{{route('thongtinve')}}" >
                                        <i class="fa fa-ticket"></i>  {{ __('Thông tin vé') }}
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-link" href="#" onclick="document.getElementById('logoutModal').style.display='block'">
                                        <i class="fa fa-sign-out"></i>  {{ __('Đăng xuất') }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                         @endguest
                    </ul>
                </div>
                <!-- nav-bar -->
                <div id="nav__bar-btn" class="nav__bar-btn show__nav-bar">
                    <label for="nav__bar-btn"><i id="overhidden" class="fa fa-bars" style="line-height: 60px;"></i></label>
                </div>
                <!-- nav-overlay -->
                <input type="checkbox" hidden id="nav__bar-btn" class="hidden__nav-overlay">
                <label for="nav__bar-btn" class="nav__menu-mobile--overlay">
                </label>

                <!-- nav-menu-mobile -->
                <div class="nav__menu-mobile">
                    <div class="nav__menu-mobile--close">
                        <label  for="nav__bar-btn"><i class="fa fa-times"></i></label>
                    </div>
                    <ul class="nav__menu-mobile--list">
                        <li class="nav__menu-mobile--item">

                            <a href="{{route('index')}}" class="nav__menu-mobile--link">
                               Trang chủ
                            </a>
                        </li>
                        <li class="nav__menu-mobile--item">

                            <a href="{{route('tintuc')}}" class="nav__menu-mobile--link">
                                Tin tức
                            </a>
                        </li>
                        <li class="nav__menu-mobile--item">

                            <a href="{{route('gioithieu')}}" class="nav__menu-mobile--link">
                                Giới thiệu
                            <a>
                        </li>
                        <li class="nav__menu-mobile--item">

                            <a href="{{route('lienhe')}}" class="nav__menu-mobile--link">
                                Liên hệ
                            </a>
                        </li>
                        @guest
                        @if (Route::has('login'))
                            <li class="nav__menu-mobile--link login" id="loginmb" ><a href="javascript:void(0)" style="text-decoration: none;">Đăng nhập</a></li>
                        @endif
                        @if (Route::has('register'))
                            <li class="nav__menu-mobile--link register" id="registermb"><a href="javascript:void(0)" style="text-decoration: none;">Đăng ký</a></li>
                        @endif
                        @else
                        <li class="nav__menu-pc--item2">
                        <a href="#" class="nav__menu-mobile--link2" id="subnav-right" >{{ Auth::user()->name }} <i  class="fa fa-angle-right"    aria-hidden="true" style="float: right; padding-right: 0;"></i></a>
                            <ul class="sub__nav-mobile">
                                <li>
                                    <a class="dropdown-link" href="{{route('profile')}}" >
                                        <i class="fa fa-user-o"></i>  {{ __('Thông tin tài khoản') }}
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-link" href="{{route('thongtinve')}}" >
                                        <i class="fa fa-ticket"></i>  {{ __('Thông tin vé') }}
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-link" href="#" onclick="document.getElementById('logoutModal').style.display='block'">
                                        <i class="fa fa-sign-out"></i>  {{ __('Đăng xuất') }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                         @endguest
                    </ul>
                </div>
            </div>
        </div>
        <!-- Modal login -->
            <div id="loginModal" class="w3-modal">
                <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

                <div class="w3-center"><br>
                    <b style="font-size: 25px;">ĐĂNG NHẬP</b>
                    <span class="w3-button w3-xlarge w3-hover-red w3-display-topright close-modal" title="Close Modal" id="close1">&times;</span>
                </div>
                <form class="w3-container" method="POST" action="{{ route('user.login') }}">
                @csrf
                    <div class="w3-section">
                    <label><b>Địa chỉ Email</b></label>
                    <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập email" name="email" required <?php if(isset($rememberemail)) echo 'value = "' . $rememberemail . '"'?>/>
                    <label><b>Mật khẩu</b></label>
                    <div class="password-eye">
                        <input id="passwordd" class="w3-input w3-border" onkeyup="logPassword()" type="password" placeholder="Nhập mật khẩu" name="password" required <?php if(isset($rememberpassword)) echo 'value = "' . $rememberpassword . '"'?>/>
                        <div class="show-eye" id="show-eye" onclick="hiddenPassword()">
                            <i class="fa fa-eye" aria-hidden="true"></i>  
                        </div>
                        <div class="hidden-eye" id="hidden-eye" onclick="showPassword()">
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>  
                        </div>
                    </div>
                    <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Đăng nhập</button>
                    <input id="rememberlogin" class="w3-check w3-margin-top" type="checkbox" name="rememberlogin" 
                    <?php if(isset($rememberpassword)) echo 'checked'.'='."checked" ?>/> <label for="rememberlogin">Nhớ lần đăng nhập ?</label>
                    </div>
                </form>

                <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                    <button type="button" class="w3-button w3-red" id="close2">Hủy</button>
                   <!--  <span class="w3-right w3-padding w3-hide-small">Tìm lại <a href="#">mật khẩu?</a></span> -->
                </div>

                </div>
            </div>
        <!--  -->
        <!-- Modal register -->
        <div id="registerModal" class="w3-modal">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
            <div class="w3-center"><br>
                <b style="font-size: 25px;">ĐĂNG KÝ</b>
                <span onclick="document.getElementById('registerModal').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright close-modal" title="Close Modal">&times;</span>
            </div>

            <form id="registerForm" class="w3-container" method="POST" action="{{ route('user.register') }}">
            @csrf
                <div class="w3-section">
                <label><b>Họ và tên *</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập tên" name="name" required autocomplete="off">
                <label><b>Địa chỉ Email *</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập email" onfocusout="ValidateEmail()" id="email" name="email" required autocomplete="off">
                <p id="alertEmail" style="margin-top: -15px; color: red;"></p>
                <label><b>Địa chỉ</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập địa chỉ" name="address" required autocomplete="off">
                <label><b>Giới tính</b></label>
                <div class="modal-register-gender">
                <input class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="1" id="Nam" required> <label for="Nam">Nam</label>
                <input class="register-gender" type="radio" placeholder="Nhập giới tính" name="gender" value="2" id="Nữ" required> <label for="Nữ">Nữ</label>
                </div>
                <label><b>Số điện thoại *</b></label>
                <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Nhập điện thoại" onfocusout="phoneNumber()" id="phone" name="phone" required autocomplete="off">
                <p id="alertPhone" style="margin-top: -15px; color: red;"></p>
                <label><b>Mật khẩu</b></label>
                <input class="w3-input w3-border w3-margin-bottom safePassword" onkeyup="safePassword()" id="password" type="password" placeholder="Nhập mật khẩu"  name="password" required>
                <p style="margin-top: -5px; font-size: 15px; padding-left: 10px;" id="alertSafe"></p>
                <label><b>Nhập lại mật khẩu</b></label>
                <input class="w3-input w3-border w3-margin-bottom" onfocusout="requiredPassword()" id="repassword" type="password" placeholder="Nhập lại mật khẩu" name="password_confirmation" required>
                <p id="alertPassword" style="margin-top: -15px; color: red; display: none;">Nhập lại mật khẩu chưa đúng, xin vui lòng nhập lại !</p>
                <button class="w3-button w3-block w3-green w3-section w3-padding" id="submitRegister" type="submit" >Đăng ký</button>
                </div>
            </form>
            </div>
        </div>
        <!--  -->
        <!-- Modal logout -->
            <div id="logoutModal" class="w3-modal">
                <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
                <div class="w3-center"><br>
                    <span onclick="document.getElementById('logoutModal').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright close-modal" title="Close Modal">&times;</span>
                </div>
                <form class="w3-container" method="post" action="{{ route('logout') }}">
                @csrf
                    <div class="w3-section" style="text-align: center;">
                    <label><b>Bạn chắc chắn muốn đăng xuất</b></label>
                    <button class="w3-button w3-block w3-red w3-section w3-padding" type="submit">Đăng Xuất</button>
                    </div>
                </form>
                </div>
            </div>
        <!--  -->
        <div class="container grid wide">
            @yield('content')
        </div>
        <div class='space'></div>
         <div class="footer">
            @php
            $viewspage = DB::table('viewspage')->get();
            @endphp
            <a style="cursor: pointer; text-decoration: none;" href="https://dinhhuyhoang.xyz">ĐINH HUY HOÀNG</a>
            <div class="viewpage"><i class="fa fa-eye" aria-hidden="true"></i> @foreach($viewspage as $vw) {{$vw->viewpage}} @endforeach</div>
        </div>
    </div>
    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "730903737680843");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    <script type="text/javascript">
        $('#huyve').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget)
        var id = button.data('id')
        var modal = $(this)
        modal.find('.modal-title').text('Hủy vé');
        modal.find('.modal-body #id').val(id);
    });
        $(document).ready(function(){
          // $("#toggle-mobile").click(function(){
          //   $( "#mobile-right" ).toggleClass("fa-angle-down");
          //   $(".open-toggle-mobile").slideToggle();
          // });
          $("#subnav-right").click(function(){
            $( ".fa-angle-right" ).toggleClass("fa-angle-down");
            $(".sub__nav-mobile").slideToggle();
          });
          $('.container').css("min-height", $(window).height() - $(".footer").height() + "px");
    });
    </script>
    <script type="text/javascript">
       $(function($) {
          var url = window.location.href;
          $('.nav__menu-pc--link').each(function() {
            if (this.href === url) {
              $(this).closest('a').addClass('active-link');
            }
          });
        });
    </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $('.nav__menu-mobile--link').click(function(event){
                $('.nav__menu-mobile').removeClass('active__menu-mobile')
                $('.nav__menu-mobile--overlay').removeClass('active__overlay');
                document.querySelector('html').removeAttribute('class')
            })
            $('.dropdown-link').click(function(event){
                $('.nav__menu-mobile').removeClass('active__menu-mobile')
                $('.nav__menu-mobile--overlay').removeClass('active__overlay');
                document.querySelector('html').removeAttribute('class')

            })
            $('.nav__bar-btn').click(function(event){
                $('.nav__menu-mobile').addClass('active__menu-mobile');
                $('.nav__menu-mobile--overlay').addClass('active__overlay');
                $('.nav__menu-mobile--close').click(function(event){
                    $('.nav__menu-mobile').removeClass('active__menu-mobile');
                    $('.nav__menu-mobile--overlay').removeClass('active__overlay');
                    document.querySelector('html').removeAttribute('class')
                    
                });
                $('.nav__menu-mobile--overlay').click(function(event){
                    $('.nav__menu-mobile').removeClass('active__menu-mobile');
                    $('.nav__menu-mobile--overlay').removeClass('active__overlay');
                    document.querySelector('html').removeAttribute('class')
                });
            });
            $('.close-modal').click(function(event){
                $('.nav__menu-mobile').removeClass('active__menu-mobile');
            });
        })
    </script>
    <script type="text/javascript">
        const login = document.querySelectorAll('.login')
        login.forEach(function(value){
            value.addEventListener('click',function(e) {
                if(e.target.id === 'login'){
                    document.getElementById('loginModal').style.display='block'
                    document.getElementById('registerModal').style.display='none'
                }else{
                    document.getElementById('loginModal').style.display='block'
                    document.getElementById('registerModal').style.display='none'
                }
                
            })
        })
        const register = document.querySelectorAll('.register')
        register.forEach(function(value){
            value.addEventListener('click',function(e) {
                if(e.target.className === 'register'){
                    document.getElementById('registerModal').style.display='block'
                    document.getElementById('loginModal').style.display='none'
                }
                else{
                    document.getElementById('registerModal').style.display='block'
                    document.getElementById('loginModal').style.display='none'
                }
            })
        })
    </script>
    <script>
        document.getElementById('nav__bar-btn').addEventListener('click',function(e){
            if(e.target.id === 'overhidden'){
                document.querySelector('html').classList.add('noscroll')
            }
        })
    </script>
    <script type="text/javascript">
        //kiểm tra mật khẩu không khớp javascript
        function requiredPassword() {
            const password = document.getElementById('password')
            const rePassword = document.getElementById('repassword')
            const alertPassword = document.getElementById('alertPassword')
            const submitRegister = document.getElementById('submitRegister')
            if(password.value !== rePassword.value){
                alertPassword.style.display = 'block';
                submitRegister.disabled = true;
            } else {
                alertPassword.style.display = 'none';
                submitRegister.disabled = false;
            }
        }
    </script>
    <script type="text/javascript">
        //kiểm tra an toàn mật khẩu
        function safePassword() {
            const safePassword = document.getElementsByClassName('safePassword')
            const alertSafe = document.getElementById('alertSafe')
            // console.log(safePassword[0].value.length)
            if(safePassword[0].value.length < 1){
                alertSafe.innerHTML = ''
            } else if(safePassword[0].value.length < 5){
                alertSafe.style.color = '#a94442'
                alertSafe.style.background - '#f2dede'
                alertSafe.innerHTML = 'Mật khẩu quá yếu !!!'
            } else if(safePassword[0].value.length <= 8){
                alertSafe.style.color = '#8a6d3b'
                alertSafe.style.background = '#fcf8e3'
                alertSafe.innerHTML = 'Bình thường'
            }
            else {
                alertSafe.style.color = '#3c763d'
                alertSafe.style.background = '#dff0d8'
                alertSafe.innerHTML = 'Mật khẩu tốt'
            }
        }
        // An hien password
        let passwordd = document.getElementById('passwordd')
        function logPassword(){
            if(passwordd.value == ''){
            document.getElementById('show-eye').style.display = 'none'
            document.getElementById('hidden-eye').style.display = 'none'
            } else if(passwordd.value != '' && passwordd.type === 'text') {
                document.getElementById('show-eye').style.display = 'block'
                document.getElementById('hidden-eye').style.display = 'none'
            } else {
                document.getElementById('hidden-eye').style.display = 'block'
            }
        }
        logPassword()
        function showPassword(){
            if(passwordd.type === 'password'){
                passwordd.type = 'text'
                document.getElementById('hidden-eye').style.display = 'none'
                document.getElementById('show-eye').style.display = 'block'
            } 
        }
        function hiddenPassword(){
            if(passwordd.type === 'text'){
                passwordd.type = 'password'
                document.getElementById('show-eye').style.display = 'none'
                document.getElementById('hidden-eye').style.display = 'block'
            } 
        }
        document.getElementById('close1').onclick = function(){
            document.getElementById('loginModal').style.display='none'
            if(passwordd.type === 'text'){
                passwordd.type = 'password'
                document.getElementById('show-eye').style.display = 'none'
                document.getElementById('hidden-eye').style.display = 'block'
            } 
        }
        document.getElementById('close2').onclick = function(){
            document.getElementById('loginModal').style.display='none'
            if(passwordd.type === 'text'){
                passwordd.type = 'password'
                document.getElementById('show-eye').style.display = 'none'
                document.getElementById('hidden-eye').style.display = 'block'
            } 
        }
        /*Validate EMAIL*/
            function ValidateEmail(){
                const vldEmail = document.getElementById('email')
                const msgEmail = document.getElementById('alertEmail')
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(vldEmail.value.match(mailformat) || vldEmail.value === ''){
                    msgEmail.innerHTML = ''
                    submitRegister.disabled = false;
                }
                else
                {
                    msgEmail.innerHTML = 'Email không hợp lệ!!!'
                    submitRegister.disabled = true;

                }
            }
        /*End*/
        /*Validate PHONE*/
            function phoneNumber(){
              var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
              const msgPhone = document.getElementById('alertPhone')
              const vldPhone = document.getElementById('phone')
              if(vldPhone.value.match(phoneno) || vldPhone.value === '')
                 {
                    msgPhone.innerHTML = ''
                    submitRegister.disabled = false;
                 }
               else
                 {
                    msgPhone.innerHTML = 'Số điện thoại không hợp lệ!!!'
                    submitRegister.disabled = true;
                 }
            }
        /*End*/
    </script>
@yield('script')
</body>
</html>
