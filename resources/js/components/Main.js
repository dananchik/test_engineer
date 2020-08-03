import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from './Router.js';

import {
    BrowserRouter
  } from "react-router-dom";
/* An example React component */
class Main extends Component {
    render() {
        return (
            <BrowserRouter><Router/></BrowserRouter>


        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
