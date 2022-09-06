import React,{useState} from 'react';
import './App.css'
function PostForm(props) {
  const [data,setdata]=useState({
    name:"",
    age:"",
    gender:"",

  })
  const [list,setlist]=useState([])
  // const [error,seterror]=useState()
  const handle=(e)=> {
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setdata(newdata)
   console.log(newdata);
  }
  function submit(e){
    e.preventDefault()
    setlist((ls)=>[...ls,data])
    setdata("")
  // list?.forEach(e=>{if (e.name===list.name&&e.age===list.age&&e.gender===list.gender) {
   
  // }else{
  //   seterror('error')
  // }})
  }
  return(
    <div><div>
      <form onSubmit={submit}>
        <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="NAME" />
        <input onChange={(e)=>handle(e)} id="age" value={data.age} placeholder="AGE" />
        <input onChange={(e)=>handle(e)} id="gender" value={data.gender} placeholder="GENDER"/>
      <button>add</button>
      </form>
      </div>
      {
        list?.map((a,i)=><div key={i} className='display'><li>{a.name}</li>
        <li>{a.age}</li><li>{a.gender}</li></div>)
      }
    </div>
  )
}

export default PostForm;