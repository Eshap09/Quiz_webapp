import axios from 'axios';
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result'

function App() {
    const [name, setname] = useState("");
    const [questions,setquestions]=useState();
    const [score,setscore]=useState(0);

    const fetchQuestions = async (category ="", difficulty ="") => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
    
        setquestions(data.results);
      };
    return (
        
        <BrowserRouter>
        <div className="app" style={{ backgroundImage: 'url("https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png")' }}>
            <Header/>
      
        <Switch>
            
            <Route path="/" exact>
                <Home name={name} setname={setname} fetchQuestions={fetchQuestions}/>
            </Route> 

            <Route path="/quiz" exact>
                <Quiz 
                name={name} 
                questions={questions}
                score={score}
                setscore={setscore}
                setquestions={setquestions}
                />
            </Route> 

            <Route path="/result" exact>
                <Result name={name} score={score}/>
            </Route> 

        </Switch>

        </div>

        <Footer/>    

        </BrowserRouter>
    )
}

export default App
