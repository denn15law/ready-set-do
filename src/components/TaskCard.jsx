import { Card, CardActions, CardContent, CardHeader, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import {DeleteOutlined} from '@material-ui/icons'
import Timer from './Timer'

const useStyles = makeStyles({
    test:{
        backgroundColor: (note) =>{
            if (note.category === 'Everyday Task'){
                return '#ebe834'
            }
        },
        border: (note) =>{
            if (note.category === 'Today Specific Task'){
                return '1px solid red'
            }
        }
    },
    flex:{
        display: 'flex',
        justifyContent: 'space-between'

    }
})

export const TaskCard = ({note, handleDelete}) => {

    const classes = useStyles(note)
    
    const handleTaskStatus = () => {
       console.log('test')
    }

    return (
        <div>
            <Card elevation= {2}
                className = {classes.test}>
                <CardHeader
                    title = {note.title}
                    subheader = {note.category}
                />
                <div className = {classes.flex}>

                    <CardContent>
                        <Timer note = {note} handleTaskStatus = {handleTaskStatus}/>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick = {() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    </CardActions>
                </div>
                
            </Card>
        </div>
    )
}
