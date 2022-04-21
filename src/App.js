import React from 'react';
import './App.css';
import Card from './card/Card';

function App() {
  const [data,setData] = React.useState({})
  const [userName,setUserName] = React.useState("")
  
  const getData=()=>{
    fetch(`https://api.github.com/users/${userName}`)
    .then((Response)=>Response.json())
    .then((Result=>{
        setData(Result)
    }))
  }
  console.log(data)

  let timeout =null ;

  const HandleChange = (event)=>{
    setUserName(event.target.value)
  }

  React.useEffect(()=>{
    clearTimeout(timeout);
    timeout= setTimeout(() => {
      console.log(`this is searchvalue ${userName}`)
      if(userName){
        getData();
      }
          }, 1000);
      return ()=>clearTimeout(timeout)
  },[userName])


  // React.useEffect(()=>{
  // getData();
  // },[userName])

  return (
    <div className="App">
      <h2>Git Profile Search</h2>
      <div>
      <input type="text" placeholder = "Enter username ..." className='input' onChange={HandleChange} value={userName}/>
      <button>Search</button>
      </div>
      <div>
        <Card data={data}/>
      </div>
    </div>
  );
}

export default App;
