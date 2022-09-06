import React,{useState} from 'react';

const Callback= ({getdata}) =>{
 const [active,setactive]=useState();
 const handlechange=(e)=>{
    const {value}=e.target
    setactive(value)
    getdata(value)
 };
 return (
    <input id='input' onChange={handlechange} value={active}/>
 )
}

export default Callback;