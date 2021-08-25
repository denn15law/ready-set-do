import React, { useState } from 'react'

import { Typography, Button, Container, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet'
    },
    my: {
        marginTop: 20,
        marginBottom: 20
    },
    block: {
        display: 'block',
        marginTop: 10
    }
})


export const AddTasks = () => {

    const classes=useStyles()
    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState(false)

    const [category , setCategory] = useState('daily')
    const [timerCategory, setTimerCategory] = useState('auto')

    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTitleError(false)

        if (title === ''){
            setTitleError(true)
        }
        if (title){
            fetch('http://localhost:8000/notes' ,{
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, category, timerCategory})
            }).then(() => history.push('/'))
        }

    }


    return (
        <Container>
            <Typography
                variant='h4'
                color= 'primary'
                className= {classes.my}
            >
                Add Task
            </Typography>

            <form noValidate autoComplete='off' onSubmit = {handleSubmit}>
                <TextField 
                    onChange = {(e) => setTitle(e.target.value)}
                    label = 'What Do You Have to Do?'
                    variant = 'outlined'
                    color= 'secondary'
                    fullWidth
                    error = {titleError}
                />

                <FormControl className = {classes.block}>
                
                    <FormLabel>Repeat Task</FormLabel>

                    <RadioGroup value = {category} onChange = {(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='daily' control = {<Radio/>} label = 'Daily'/>
                        <FormControlLabel value='once' control = {<Radio/>} label = 'No Repeat'/>
                    </RadioGroup>

                    <FormLabel>Timer Settings</FormLabel>

                    <RadioGroup value = {timerCategory} onChange = {(e) => setTimerCategory(e.target.value)}>
        
                        <FormControlLabel value = 'auto' control = {<Radio/>} label = 'Auto-Start Timer'/>
                        <FormControlLabel value = 'manual' control = {<Radio/>} label = 'Manually Timer'/>
                    </RadioGroup>
                </FormControl>                    


                <Button
                variant = 'outlined'
                type= 'submit'
                color= 'primary'
                endIcon= {<KeyboardArrowRightIcon/>}
                className = {classes.my}
            >
                Add
                </Button>
            </form>

            <Button
                variant = 'contained'
                color = 'primary'
                onClick = {() => history.push('/')}>
                Return to Home
            </Button>
           
        </Container>
    )
}

