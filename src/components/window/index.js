import React, {Component} from 'react';
import Terminal from "../terminal";
import FakeIcon from '../icon';
import terminalImage from '../../assets/img/terminal-icon.png';

import './style.scss';

class FakeWindow extends Component {
    render(){
        let windowIconSize = "24";
        return(
            <div className="window">
                <div className="header-bar">
                    <div className="window-icon">
                        <FakeIcon iconImg={terminalImage} imageSize={windowIconSize} />
                    </div>
                    <div className="header-info">
                       <p>~alberto@dsosa:~</p>
                    </div>
                    <div className="window-actionIcons">
                        <i className="window-minus-icon icon-minus"></i>
                        <i className="window-toggle-icon icon-checkbox-unchecked"></i>
                        <i className="window-close-icon icon-cross"></i>
                    </div>
                </div>
                <div className="window-content">
                    <Terminal />
                </div>
                <div className="info-bar">
                    <i className="icon-info"></i>
                </div> 
            </div>
        );
    }
}

export default FakeWindow;