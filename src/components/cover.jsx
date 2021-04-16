import React, { Component } from 'react';
import Field from '../components/textField';

class Cover extends Component {
    
    state = {
        label: 'Email',
        email: "",
        id: 'email',
        name:"email",
        value: ''
                
       }
     
       handleChange = (event) => {
        this.setState({value: event.target.value});
      }





    render() { 
        return ( 
            <Field 
            label={this.state.label}
            id={this.state.id}
            value={this.state.value}
             onChange={this.handleChange}
            />
         );
    }
}
 
export default Cover;