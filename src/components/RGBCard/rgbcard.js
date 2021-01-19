import React, { Component } from 'react';
import { Card, CardContent, Typography, Slider } from '@material-ui/core';
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';
import CircularColor from 'react-circular-color';

class RGBCard extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleChange(event, newValue) {
        const device = this.props.name;
        const updates = {};
        updates[device + '/value'] = newValue;
        this.props.firebase.devices().update(updates);
    }

    handleColorChange(newColor) {
        const device = this.props.name;
        const updates = {};
        updates[device + '/color'] = newColor;
        this.props.firebase.devices().update(updates);
    }

    render() {
        return (
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant='h4' style={{ overflowWrap: 'break-word' }}>
                        {this.props.name}
                    </Typography>
                    <CircularColor
                        onChange={this.handleColorChange}
                        color={this.props.data.color}
                        centerRect='true'
                    />
                    <Slider value={this.props.data.value} onChange={this.handleChange} />
                </CardContent>
            </Card>
        );
    }
}

export default withFirebase(RGBCard);