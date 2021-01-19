import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';
import DeviceCard from '../DeviceCard/devicecard';

class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
        }
    }

    componentDidMount() {
        this.props.firebase.devices().on('value', snapshot => {
            this.setState({
                devices: snapshot.val(),
            });
        });
    }

    render() {
        const devices = Object.keys(this.state.devices).map((device) => {
            return (
                <Grid item xl={2} md={4} xs={12} key={device}>
                    <DeviceCard name={device} data={this.state.devices[device]} />
                </Grid>
            );
        });


        return (
            <Grid container spacing={1}>
                {devices}
            </Grid>
        );
    }
}

export default withFirebase(DeviceList);