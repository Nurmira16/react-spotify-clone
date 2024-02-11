import React, { useEffect, useState } from 'react'
import Login from './Login'
import { getTokeFromUrl } from './spotify'

function App() {
  //short term memory store
  const[token,setToken]=useState(null)


  //run code based on give conditions
  useEffect(()=>{
    const hash=getTokeFromUrl();
    window.location.hash='';
    const _token=hash.access_token;

    if(_token){
      setToken(_token)
    }

    console.log('I have a token ',token)

  })
  return (
    <div>
      {
        token?(<h1>hey</h1>):(<Login/>)
      }
    </div>
  )
}

export default App
