import React, { Component } from "react";



    class Form extends Component{
        render(){
        return(
            <div className="form">
                <form onSubmit = {this.props.getWeather}>
                    <input type='text' name='city' placeholder='city...'/><br/>
                    <input type='text' name='country' placeholder='country...'/><br/>
                    <button className='button' onClick = {this.getWeather}> Get Weather </button><br/>
                </form>
            </div>

        );
    }
    }

export default Form;