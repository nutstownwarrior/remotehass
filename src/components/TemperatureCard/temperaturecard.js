import React, { Component } from 'react';
import { Card, CardContent, Typography, Slider } from '@material-ui/core';
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';

class TemperatureCard extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        const device = this.props.name;
        const updates = {};
        updates[device + '/target'] = newValue;
        this.props.firebase.devices().update(updates);
    }

    render() {
        return (
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant='h4' style={{ overflowWrap: 'break-word' }}>
                        {this.props.name}
                    </Typography>
                    <Typography variant='h3' style={{ overflowWrap: 'break-word' }}>
                        {this.props.data.current}
                    </Typography>
                    <Typography variant='h3' style={{ overflowWrap: 'break-word' }}>
                        {this.props.data.target}
                    </Typography>
                    <Slider
                        value={this.props.data.target}
                        onChange={this.handleChange}
                        min={5}
                        max={30}
                        step={0.5}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withFirebase(TemperatureCard);