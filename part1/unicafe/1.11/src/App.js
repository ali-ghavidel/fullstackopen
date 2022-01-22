import React, { useState } from "react";
// Button component
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
// StatisticLine componnt
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.symbol}
      </td>
    </tr>
  );
};
// Statistics component
const Statistics = ({ good, neutral, bad }) => {
  // avg function
  const avg = () => {
    return (good - bad) / (good + neutral + bad);
  };
  // positive function
  const positive = () => {
    return (good / (good + neutral + bad)) * 100;
  };
  if ((good || neutral || bad) === 0) {
    return (
      <div>
        <h2>statics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>statics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={avg()} />
          <StatisticLine text="positive" value={positive()} symbol="%" />
        </tbody>
      </table>
    </div>
  );
};
// App component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // goodHandler function
  const goodHandler = () => {
    setGood(good + 1);
  };
  // neutralHandler function
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  // badHandler function
  const badHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={goodHandler} text="good" />
      <Button onClick={neutralHandler} text="neutral" />
      <Button onClick={badHandler} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
export default App;
