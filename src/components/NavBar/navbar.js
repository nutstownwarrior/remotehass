import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SignOut from '../SignOut/signout';

const NavBar = () => {
    return(
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Home Assistant
                    </Typography>
                    <SignOut />
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    )
}
export default NavBar;