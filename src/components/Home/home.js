import React from 'react';
import 'fontsource-roboto';
import NavBar from '../NavBar/navbar';
import DeviceList from '../DeviceList/devicelist';

function HomePage(props) {
    return (
        <div>
            <NavBar />
            <DeviceList />
        </div>
    );
}

export default HomePage;