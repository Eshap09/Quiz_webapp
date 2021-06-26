import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css'

const Questions = ({currques,setcurrques,questions,options,correct,setscore,score,setquestions}) => {

    const [selected,setselected]=useState();
    const [error,seterror]=useState(false);
    
    const handleselect=(option)=>{
        if(selected==option && selected===correct)
        {
            return "select";
        }
        else if(selected===option && selected!==correct)
        {  
            return "wrong";            
        }
        else if(option===correct)
        {
            return "select";
        }
    }
    
    const handlecheck=(option)=>{
        setselected(option)
        if(option===correct)
        {
            setscore(score+1);
          
        }
        seterror(false);
    }

    const history=useHistory();

    const handlenext=()=>{
        if(currques>8){
            history.push('/result')
        }
        else if(selected)
        {
            setcurrques(currques+1);
            setselected();
        }
        else
        {
            seterror("please select an option");
        }
    }

    const handlequit=()=>{
        history.push('/');
    }

    return (
        <div className="question">
           <h1>Question {currques+1}</h1>
           <div className="singleques">
             <h2>{questions[currques].question}</h2>
             {error && <ErrorMessage>Please select an option</ErrorMessage>}
             <div className="options">
             {
                 options && 
                 options.map((option)=>(
                     <button onClick={()=>handlecheck(option)}
                       className={`singleoption ${selected && handleselect(option)}`}
                       key={option}
                       disabled={selected}
                     >
                         {option}
                     </button>
                 ))
             }
             </div>
             <div className="controls">
                 <Button variant="contained" color="secondary" size="large" href="/" style={{width:185}}
                    onClick={handlequit}
                 >
                     Quit
                 </Button>
                 <Button variant="contained" color="primary" size="large" style={{width:185}}
                    onClick={handlenext}
                 >
                     {currques>8 ?  "Result":"Next Question" }
                 </Button>
             </div>
           </div>
        </div>
    )
}

export default Questions
