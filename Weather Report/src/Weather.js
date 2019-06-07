import React, {Component} from 'react';
import "./weather.css";
class Weather extends Component{
    render(){
        return(
            <div className="weather">
                {this.props.city && this.props.country && <p>Loction :   {this.props.city},
                {this.props.country} </p>}

                {this.props.temperature && <p> Temperature :  {this.props.temperature}</p>}

                {this.props.humidity && <p>humidity : {this.props.humidity}</p>}

                {this.props.description && <p> Description : {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            

            
                
                
                 
              
               


            </div>

        );
    }
}
export default Weather;