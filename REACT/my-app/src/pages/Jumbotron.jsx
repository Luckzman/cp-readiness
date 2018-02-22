import React, {Component} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component{
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 pb-5"></h1>
                    <div className="pb-5"></div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;