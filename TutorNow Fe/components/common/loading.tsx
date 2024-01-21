import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingComponent = ({ type, color }: any) => (
    <>
        <ReactLoading type={type} color={color} height={667} width={375} />
        <div>Hệ thống đang xử lý vui lòng chờ trong giây lát</div>
    </>
);
 
export default LoadingComponent;