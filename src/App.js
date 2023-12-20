import './App.css'
import React from 'react';
import ColorCard from './Components/ColorCard';
import Data from './Components/Data.json';




const App = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center", height:"100vh",width:"100vw",overFlow:"hidden",boxSizing:"border"}}>
    {Data.map((e)=>{
      return<ColorCard code={e.colorCode} name={e.name}
      />
    })}
      
    </div>
  )
}

export default App

