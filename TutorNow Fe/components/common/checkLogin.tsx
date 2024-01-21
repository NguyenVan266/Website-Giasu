import React ,{useEffect} from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
export function logOut() {
    const isConfirmed = confirm('Bạn muốn đăng xuất?');
    if (isConfirmed) {
    Cookies.remove('token_base365');

    Cookies.remove('type');
  
    window.location.href =('/gia-su')
    } 
   
  }