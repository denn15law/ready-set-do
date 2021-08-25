import { Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {DeleteOutlined, Edit} from '@material-ui/icons'

const useStyles = makeStyles({
    test:{
        backgroundColor: (note) =>{
            if (note.category == 'daily'){
                return '#ebe834'
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

    return (
        <div>
            <Card elevation= {2}
                className = {classes.test}>
                <CardHeader
                    action = {
                        <IconButton>
                            <Edit/>
                        </IconButton>
                    }
                    title = {note.title}
                    subheader = {note.category}
                />
                <div className = {classes.flex}>

                    <CardContent>
                        <Typography>
                            Timer
                        </Typography>
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
