import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export const Header = () => {
    return (
        <AppBar position="static" color='primary'>
            <Toolbar>
                <IconButton edge="start" color="inherit" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6"
                    align= 'center'>
                    Ready-Set-Do
                </Typography>
            </Toolbar>
      </AppBar>
    )
}
