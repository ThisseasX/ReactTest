import React, { Component } from 'react';
import axios from 'axios';

class AjaxComponent extends Component {

    constructor() {
        super();
        this.state = {
            info: ""
        }
    }

    componentDidMount() {
        var _this = this;
        axios
            .get("https://api.github.com/users/ThisseasX")
            .then(function (response) {
                var x = [];
                Object.keys(response.data).forEach(function (key) {
                    x += key + ": " + response.data[key];
                    // console.log('Key : ' + key + ', Value : ' + response.data[key] + "\n")
                })
                _this.setState({ info: x })
                // _this.setState({
                //     info: response.data
                // })
            });
    }

    render() {
        return (this.state.info);
    }
}

export default AjaxComponent;