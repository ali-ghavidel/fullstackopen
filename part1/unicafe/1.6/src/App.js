import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () =>{
    setGood(good+1);
  }
  const neutralHandler = () => {
    setNeutral(neutral+1);
  }
  const badHandler = () => {
    setBad(bad+1);
  }

return(
  <div>
    <h2>give feedback</h2>
    <Button onClick={goodHandler} text="good" />
    <Button onClick={neutralHandler} text="neutral" />
    <Button onClick={badHandler} text="bad" />
<h2>statics</h2>
<p>good {good}</p>
<p>neutral {neutral}</p>
<p>bad {bad}</p>
  </div>
)

}
export default App;
