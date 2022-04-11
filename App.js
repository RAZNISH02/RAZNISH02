import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo';
//import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props)
  this.state = {
      items:[],
      text:"",
    }
  }
   // Set initial state with input data  	
  handle=(er)=>{
   this.setState({text: er.target.value})
}

handleAdd=(e)=>{
  if(this.state.text !==""){
    const item=[...this.state.items, this.state.text];
    this.setState({
      items:item, text:""
    })
  } else{
    console.log("dchn")}
}
  handleDelete=(id)=>{
    console.log("bfhgf",id)
    let oldItims=[...this.state.items]
    console.log(oldItims,id)
    const items=oldItims.filter((element,i )=>{
      return i!==id
    })
    this.setState({
      items:items})
    }
 render(){
  return (
    <><div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-2'>
          <h1 className='text-center'>This is my Todo List </h1>
          <div className='row'>
            <div className='col-9'>
              <input type ="text" className='form-control'
              placeholder='writer here' value={this.state.text} onChange={this.handle}/>
            </div>
            <div className='col-2'>
              <button className='btn btn-warning px-5 font-weight-bold'onClick={this.handleAdd}>add</button>
            </div></div>
          <div className='container-fluid'>
              <ul className='list-unstyled row m-5'>
              {console.log(this.state.items)}


               {this.state.items.map((value,i)=>{
                 return(
                 <Todo key ={i} id ={i} value={value}
                 send={this.handleDelete}/>
                 )
               })}
              
                </ul>
            </div></div>
      </div>
    </div>
    </>
  )};
}

export default App;
