import React from 'react'
 function Todo(props){
  return (
    <>
    <div>
    <li className='shadow p-2 my-2 col-sm-9'>{props.value}</li>
   
    <button type="button"className="btn btn-primary btn-sm offset-9" 
    onClick={()=>{props.send(props.id)}}>Delete</button>
  </div>
    </>
  )
}
export default Todo;
