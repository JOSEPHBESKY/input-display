import React from 'react'
import Child from './Child';
import { useState } from 'react';

export default function Parent() {
  const [data, setData] = useState();
  
  const parentToChild = (e) => {
    const {value}=e.target
setData(value)  
}
  return (
    <div className="App">
     
      
      <div>
        <input  onChange={(e) => parentToChild(e)} id='name'/>
        <input  onChange={(e) => parentToChild(e)} id='age' />
        
 </div>
 <Child  parentToChild={data}/>
    </div>
  )
}
