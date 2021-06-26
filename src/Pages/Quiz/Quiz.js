import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Questions from '../../components/Question/Questions';
import './Quiz.css';


const Quiz = ({name,score,setscore,questions,setquestions}) => {
    
  const [options,setoptions]=useState();
  const [currques,setcurrques]=useState(0);


  useEffect(() => {
    // console.log(questions);
    // storing the options and sending to shuffle it
    setoptions(questions && handleshuffle([questions[currques]?.correct_answer,...questions[currques]?.incorrect_answers,]))
  }, [questions,currques])
  
  // shuffles the options
  const handleshuffle=(optionss)=>{
      return optionss.sort(()=>Math.random()-0.5);
  }
  
  
  return (
        <div className="quiz">
          <span className="quiz__subtitle">Welcome, {name}</span>
          {
            questions?(
              <>
                <div className="quiz__info">
                  <span>{questions[currques].category}</span>
                  <span>Score: {score}</span>
                </div>
               
                <Questions
                  currques={currques}
                  setcurrques={setcurrques}
                  questions={questions}
                  // options of the current question
                  options={options}
                  correct={questions[currques].correct_answer}
                  score={score}
                  setscore={setscore}
                  setquestions={setquestions}
                />
              </>
            ):(
              <CircularProgress 
                className="loader"
                color="inherit"
                size={150}
                thickness={1}
              />
            )
          }
        </div>
    )
}

export default Quiz
