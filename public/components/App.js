import React, { Component } from 'react';
import { render } from 'react-dom';




export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { head: null };
    }


    render() {
        return (
            <div>
                Hi my name is shail
            </div>
        )
    }

}
