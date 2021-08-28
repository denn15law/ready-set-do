import { Typography } from '@material-ui/core'
import React, { useState } from 'react'


export default function CurrentTime() {

    let time = new Date().toLocaleTimeString()
    
    const [currentTime, setCurrentTime] = useState(time)
    const update = () => {
        time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(update, 1000)

    //const [currentTime = setCurrentTime] = useState()
    return (
        <Typography
            variant = 'h4'
            color = 'primary'
            >
                {time}
        </Typography>
   
    )
}
