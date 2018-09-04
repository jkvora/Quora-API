import React, { Component } from 'react';
import { render } from 'react-dom';

import AppBar from './AppBar/appBar';
import ProfileInput from './ProfileInput/profileInput';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { head: null };
    }


    render() {
        return (
            <div>
               <AppBar/>
               <ProfileInput/>
            </div>
        )
    }

}
