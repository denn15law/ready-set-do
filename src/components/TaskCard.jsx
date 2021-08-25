import { Card, CardHeader, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import {DeleteOutlined} from '@material-ui/icons'

const useStyles = makeStyles({
    test:{
        backgroundColor: (note) =>{
            if (note.category == 'daily'){
                return '#34eb52'
            }
        }
    }
})

export const TaskCard = ({note, handleDelete}) => {

    const classes = useStyles(note)

    return (
        <div>
            <Card elevation= {2}
                className = {classes.test}>
                <CardHeader
                    action = {
                        <IconButton onClick = {() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title = {note.title}
                />
                
            </Card>
        </div>
    )
}
