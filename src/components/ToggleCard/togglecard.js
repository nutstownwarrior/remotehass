import React, { Component } from 'react';
import { Card, CardContent, Typography, SvgIcon, IconButton, withTheme } from '@material-ui/core';
import { LightbulbOn, DesktopClassic, FloorLamp, Lamps, ScriptText } from 'mdi-material-ui'
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';

class ToggleCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const device = this.props.name;
        const state = this.props.data.state;
        const updates = {};
        updates[device + '/state'] = !state;
        this.props.firebase.devices().update(updates);
    }

    render() {
        const iconColor = (this.props.data.state) ? 'yellow' : this.props.theme.palette.text.primary;
        var icon;
        switch (this.props.data.icon) {
            case 'bulb':
                icon = LightbulbOn;
                break;
            case 'pc':
                icon = DesktopClassic;
                break;
            case 'lamp':
                icon = FloorLamp;
                break;
            case 'lamps':
                icon = Lamps;
                break;
            case 'script':
                icon = ScriptText;
                break;
            default:
                icon = '';
                break;
        }
        return (
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant='h4' style={{ overflowWrap: 'break-word' }}>
                        {this.props.name}

                    </Typography>
                    <IconButton onClick={this.handleClick}>
                        <SvgIcon
                            style={{ fontSize: 90, color: iconColor }}
                            component={icon}
                        />
                    </IconButton>
                </CardContent>
            </Card>
        );
    }
}

export default withTheme(withFirebase(ToggleCard));