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

    const [interv, setInterv] = useState()
    
    const start = () =>{
        run()
        setInterv(setInterval(run, 1000))
    }
    const stop = () => {
        clearInterval(interv)
    }

    var updatedS = time.s, updatedM = time.m, updatedH = time.h

    const run = () =>{
        if (updatedM === 60){
            updatedH++
            updatedM = 0
        }
        if (updatedS === 60){
            updatedM++
            updatedS = 0
        }
        updatedS++
        return setTime({
            s: updatedS,
            m: updatedM,
            h: updatedH
        })
    }
    
    return (
        <>
        <Paper 
            variant= 'outlined'
            elevation = {2}
            className = {classes.bg}>
                <div className = {classes.timer}>
                    <Typography
                        variant = 'h5'>
                        <span>{(time.h >= 10) ? time.h : "0"+time.h}:</span>
                        <span>{(time.m >= 10) ? time.m : "0"+time.m}:</span>
                        <span>{(time.s >= 10) ? time.s : "0"+time.s}</span>
                    </Typography>
                    
                </div>
        </Paper>
        <ButtonGroup>
            <Button
            variant = 'contained'
            onClick = {() => start()}>
                Start
            </Button>
            <Button
            variant = 'contained'
            onClick = {() => stop()
            }>
                Task Complete
            </Button>

        </ButtonGroup>
        </>
    )
}
