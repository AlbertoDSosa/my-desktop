import React, {Component} from 'react';
import './style.scss';

class FakeIcon extends Component {
    
    render(){
        return(
            <div className="icon">
               <img src={this.props.iconImg} width={this.props.imageSize}/>
            </div>
        );
    }
}

export default FakeIcon;