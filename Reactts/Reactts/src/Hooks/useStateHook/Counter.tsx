import  { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  

  return (
    <div style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"column", height:"100vh", fontFamily:"sans-serif" }}>
      {count}
      <br/>
      <br/>
      <button style={{color:"red", padding:"2px", textAlign:"center", justifyContent:"center", display:"flex"}} onClick={() => setCount(count+1)}>Increase Count</button>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <button style={{color:"red", display:"flex", padding:"2px"}} onClick={() => setCount(count-1)}>Decrease Count</button>
    </div>
  )
}

export default Counter
