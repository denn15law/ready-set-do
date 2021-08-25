import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Add, Home, WorkOutline } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'


const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(2)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        toolbar: theme.mixins.toolbar
    }
})

export default function Layout({children}) {
    
    const history = useHistory()
    const classes = useStyles()
    const menuItems = [
        {
            text: "Today's Tasks",
            icon: <Home/>,
            path: '/'
        },
        {
            text: 'Add Task',
            icon: <Add/>,
            path: '/addTask'
        },
        {
            text: 'Add Work',
            icon: <WorkOutline/>,
            path: '/addWork'
        }
    ]
    
    return (
        <div className = {classes.root}>

            <AppBar
                position = 'fixed'
                className ={classes.appbar}>
                <Toolbar>
                    <Typography>
                        Today is {format(new Date(), 'MMMM do Y')}                     
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className = {classes.drawer}
                variant = 'permanent'
                anchor = 'left'
                classes = {{paper: classes.drawerPaper}}>
                <div>
                    <Typography
                        variant = 'h5'
                        align = 'center'
                        className = {classes.title}>
                            Ready Set Do
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item =>(
                        <ListItem 
                            key = {item.text}
                            button
                            onClick = {() => history.push(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary= {item.text}/>
                        </ListItem>  
                    ))}
                </List>
            </Drawer>

            <div className = {classes.page}>
                <div className = {classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
