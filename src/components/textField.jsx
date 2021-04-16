import React, { Component } from 'react';
import './textField.css';

class Field extends Component {


    render() { 
        return ( 
            <div className="field">

            <label>{this.props.label}</label><br></br>
            <input 
               className="input"
                type="email" 
                name={this.props.name} 
                id={this.props.id} 
                value={this.props.value}
                onChange={this.props.onChange}

                /> 

            </div>
         );
    }
}
 
export default Field;