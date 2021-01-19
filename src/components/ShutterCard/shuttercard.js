import React, { Component } from 'react';
import { Card, CardContent, Typography, IconButton, Slider, withTheme } from '@material-ui/core';
import { ArrowUp, ArrowDown } from 'mdi-material-ui'
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';

class ShutterCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        const device = this.props.name;
        var id = event.target.parentElement.parentElement.id;
        const updates = {};
        switch (id) {
            case 'up':
                updates[device + '/direction'] = 'up';
                break;
            case 'down':
                updates[device + '/direction'] = 'down';
                break;
            default:
                return;
                break;
        }
        this.props.firebase.devices().update(updates);
    }

    handleChange(event, newValue) {
        const device = this.props.name;
        const updates = {};
        updates[device + '/value'] = newValue;
        this.props.firebase.devices().update(updates);
    }

    render() {
        var upColor;
        var downColor;
        switch (this.props.data.direction) {
            case 'up':
                upColor = 'yellow';
                downColor = this.props.theme.palette.text.primary;
                break;
            case 'down':
                upColor = this.props.theme.palette.text.primary;
                downColor = 'yellow';
                break;
            default:
                upColor = this.props.theme.palette.text.primary;
                downColor = this.props.theme.palette.text.primary;
                break;
        }
        return (
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant='h4' style={{ overflowWrap: 'break-word' }}>
                        {this.props.name}
                    </Typography>
                    <IconButton onClick={this.handleClick} id='up'>
                        <ArrowUp style={{ fontSize: 90, color: upColor }} />
                    </IconButton>
                    <IconButton onClick={this.handleClick} id='down'>
                        <ArrowDown style={{ fontSize: 90, color: downColor }} />
                    </IconButton>
                    <Slider value={this.props.data.value} onChange={this.handleChange} />
                </CardContent>
            </Card>
        );
    }
}

export default withTheme(withFirebase(ShutterCard));