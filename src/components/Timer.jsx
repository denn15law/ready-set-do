import { Button, ButtonGroup, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'


const useStyles = makeStyles({
    bg: {
        backgroundColor: '#53eb34'
    },
    timer:{
        display: 'flex',
        justifyContent: 'center'
    }
})
export default function Timer() {
    
    const classes = useStyles()

    const [time, setTime] = useState({
        s: 0,
        m: 0,
        h: 0
    })
    
    const [runTime, setRunTime] = useState(false)
    
    return (
        <>
        <Paper 
            variant= 'outlined'
            elevation = {2}
            className = {classes.bg}>
                <div className = {classes.timer}>
                    <Typography
                        variant = 'h5'
                        >
                        {time.h}:{time.m}:{time.s}
                    </Typography>
                    
                </div>
        </Paper>
        <ButtonGroup>
            <Button
            variant = 'contained'
            onClick = {() => setRunTime(true)}>
                Start
            </Button>
            <Button
            variant = 'contained'
            onClick = {() => setRunTime(false)}>
                Task Complete
            </Button>

        </ButtonGroup>
        </>
    )
}
