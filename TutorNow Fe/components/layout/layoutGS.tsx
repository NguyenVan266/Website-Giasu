import React from "react";
import HeaderGs from "../common/header_gs";
import Footer from "../common/footer";

export default function LayoutGS (childern:any) {
    return <>
    <HeaderGs/>
{
    childern
}
<Footer/>
    </>
}