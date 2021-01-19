import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import 'fontsource-roboto';

import ToggleCard from '../ToggleCard/togglecard';
import SliderCard from '../SliderCard/slidercard';
import RGBCard from '../RGBCard/rgbcard';
import TemperatureCard from '../TemperatureCard/temperaturecard';
import ShutterCard from '../ShutterCard/shuttercard';

class DeviceCard extends Component {
    render() {
        const type = this.props.data.type;
        const content = () => {
            switch (type) {
                case 'toggle':
                    return (<ToggleCard name={this.props.name} data={this.props.data} />);
                    break;
                case 'slider':
                    return (<SliderCard name={this.props.name} data={this.props.data} />);
                    break;
                case 'rgb':
                    return (<RGBCard name={this.props.name} data={this.props.data} />);
                    break;
                case 'heater':
                    return (<TemperatureCard name={this.props.name} data={this.props.data} />);
                    break;
                case 'shutter':
                    return (<ShutterCard name={this.props.name} data={this.props.data} />);
                    break;
                default:
                    return (<h1>Device config invalid</h1>);
                    break;
            }
        }

        return (content());
    }
}

export default withFirebase(DeviceCard);