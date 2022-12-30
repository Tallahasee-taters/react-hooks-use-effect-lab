import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  // const Timer = ({ seconds }) => {
  //   useEffect(() => {
  //     if (!timeRemaining) return;
  
  //     const intervalId = setInterval(() => {
  //       setTimeRemaining(timeRemaining - 1);
  //     }, 1000);
  

  //     return () => clearInterval(intervalId);
  //   }, [timeRemaining]);
  
  //   return (
  //     <div>
  //       {Timer}
  //     </div>
  //   );
  // };



  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
//-----------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("this will run after 10 seconds")
    }, 1000)
    // return () => clearTimeout(timer);
    }, []);
//----------------------------
  // useEffect(() => {
  //   const interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
