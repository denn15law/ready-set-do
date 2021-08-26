import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import { Add, Home, WorkOutline, Menu, ChevronLeft } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'
import clsx from 'clsx'


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
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        toolbar: theme.mixins.toolbar,
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',

        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
          contentShift: {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
    }
})

export default function Layout({children}) {
    
    const history = useHistory()
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }

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
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick= {handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.hide)}>
                        <Menu/>
                    </IconButton>
                    <Typography>
                        Today is {format(new Date(), 'MMMM do Y')}                     
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className = {classes.drawer}
                variant = 'persistent'
                anchor = 'left'
                classes = {{paper: classes.drawerPaper}}
                open = {open}>
                <div className = {classes.drawerHeader}>
                    <IconButton
                        onClick = {handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
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

            <div 
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className = {classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
