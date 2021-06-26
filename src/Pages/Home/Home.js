import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Categories from '../../Data/Categories'
import './Home.css'

const Home = ({name,setname,fetchQuestions}) => {

    const [category, setcategory] = useState("");
    const [difficulty, setdifficulty] = useState("");
    const [error,seterror]=useState(false);

    const history=useHistory();
    
    const handlesubmit=()=>{
        if(!category || !difficulty)
        {
            seterror(true);
            return;
        }
        else{
            seterror(false)
            fetchQuestions(category,difficulty)
            history.push("/quiz")
        }
    
    }

    return (
        <div className="home__content">
            <div className="home__settings">
                <span className="home__heading">Quiz Setting</span>
                    <div className="home__settingselect">
                        {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                        <TextField className="textfield" label="Enter your name" variant="outlined"
                            onChange={(e)=>setname(e.target.value)}
                        />
                        <TextField select label="Select category" variant="outlined" className="textfield"
                            onChange={(e)=>setcategory(e.target.value)}
                            value={category}
                        >
                            {
                                Categories.map((cat)=>(
                                    <MenuItem key={cat.value} value={cat.value}>
                                    {cat.category}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField select label="Select Difficulty" className="textfield" variant="outlined"
                            onChange={(e)=>setdifficulty(e.target.value)}
                            value={difficulty}
                         >
                            <MenuItem key="Easy" value="easy">
                                Easy
                            </MenuItem>
                            <MenuItem key="Medium" value="medium">
                                Medium
                            </MenuItem>
                            <MenuItem key="Hard" value="hard">
                                Hard
                            </MenuItem>
                        </TextField>
                        <Button className="button" variant="contained" color="primary" size="large"
                            onClick={handlesubmit}
                        >
                            Start Quiz
                        </Button>
                    </div>
            </div>
            <img 
              src="https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/800cec3ad30b4669df73766564b8b85202f44f41/public/quiz.svg"
              className="home__banner"
              alt="quiz image"
            />
        </div>
    )
}

export default Home
