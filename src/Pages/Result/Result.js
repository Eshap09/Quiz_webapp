import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Result.css';

const Result = ({name,score}) => {

    const history=useHistory();

    useEffect(() => {
        if(!name)
        {
            history.push("/");
        }
    }, [name,history])
    return (
        <div className="result">
            <span className="title">Final score: {score}</span>
            <Button className="button"variant="contained" size="large" style={{margin:10}} color="Secondary" href="/">
                Go to homepage
            </Button>
        </div>
    )
}

export default Result
