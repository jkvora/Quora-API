import React, { Component } from 'react';
import { render } from 'react-dom';



var header;

export default class App extends Component {




    constructor(props) {
        super(props);
        this.state = { head: null };
    }


    componentDidMount() {
        import(/* webpackChunkName: "header" */"./Header/header").then(localConfig => {
            //create a global config variable
            debugger;
            this.setState({ head: localConfig.default })
        })
    }



    render() {
        const { head: Component } = this.state;
        return <div>My name is Jalak
            {Component && <Component />}
        </div>
    }

}