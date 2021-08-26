import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

import { Container } from '@material-ui/core'
import { TaskCard } from './TaskCard'
import CurrentTime from './CurrentTime'



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
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

const TaskList = () => {

    const classes = useStyles()
    const [notes, setNotes] = useState([])

    useEffect(() =>{
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) =>{
        await fetch('http://localhost:8000/notes/'+id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }
    
    return (
        <Container>
            <div className = {classes.heading} >
                <Typography variant = 'h4' color = 'primary' className = {classes.my}>
                    Today's Tasks
                </Typography>
                <CurrentTime/>
            </div>
            <Grid container spacing = {3}>
            {notes.map(note => (
                <Grid item key = {note.id} xs={12}>
                    <TaskCard note = {note} handleDelete = {handleDelete}/>
                </Grid> 
            ))}
            </Grid>
            
        </Container>
    )
}

export default TaskList
