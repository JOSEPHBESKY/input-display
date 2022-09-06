import React,{useState} from 'react';
// import Callback from './Callback'
function Callback() {
    const [state,setstate]=useState()

const getstate=(value)=>{
    setstate(value)
}
return(
    <div>
        <div>{state}</div>
        <div>
            <Callback getstate={getstate}/></div>
    </div>
)
}

export default Callback;