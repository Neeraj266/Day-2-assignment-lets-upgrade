import React, { useState } from "react";
import './style.css'

const App = () => {
  
  let [score, setScore] = useState(0)
  return (
    <div>
    <h1>This Counter Application </h1>
      <p> Play with value by the help of Button</p>
      <h2>{ score}</h2>

    <button className="btn-inc" onClick={()=>(score!=25)?setScore(score+1):""}>Increment</button>
    <button className="btn-dec" onClick={()=>(score>0)?setScore(score-1):""}>Decrement</button>
    <button className="btn-re" onClick={()=>{setScore(0)}}>Reset</button>
      </div>
  );
}

export default App;
