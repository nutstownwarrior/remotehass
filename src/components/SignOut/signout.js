import { Button } from '@material-ui/core';
import React from 'react';
import { withFirebase } from '../Firebase';
import { LogoutVariant } from 'mdi-material-ui'

const SignOutButton = ({ firebase }) => (
    <Button
        variant="contained"
        color="secondary"
        onClick={firebase.doSignOut}
        style={{ marginLeft: 'auto' }}
        startIcon={<LogoutVariant/>}
    >Sign Out</Button>
);

export default withFirebase(SignOutButton);