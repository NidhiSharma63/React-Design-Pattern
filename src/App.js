import React from "react";
import SplitScreen from './SplitScreen'


const LeftHandComponent = () =>{
  return <h1 style={{backgroundColor:'orange',color:'white',paddingLeft:'13px'}}>Left</h1>
}

const RightHandComponent = () =>{
  return <h1 style={{backgroundColor:'green',color:'white',paddingLeft:'13px'}}>Right</h1>
}

function App() {
  return (
    <SplitScreen>
      <LeftHandComponent/>
      <RightHandComponent/>
    </SplitScreen>
  );
}

export default App;
