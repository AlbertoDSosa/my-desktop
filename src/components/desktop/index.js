import React, {Component} from 'react';
import Dockbar from '../dock-bar';
import FakeWindow from '../window';
import FakeIcon from '../icon';
import terminalImage from '../../assets/img/terminal-icon.png';
import trashEmtyImage from '../../assets/img/trash-emty.png'
import './style.scss';


class Desktop extends Component {
    render(){
        let desktopImageSize = "64"

        return(
            <div className="desktop">
                <div className="trash-icon">
                    <FakeIcon iconImg={trashEmtyImage} imageSize={desktopImageSize} />
                </div>

                <div className="terminal-icon">
                    <FakeIcon iconImg={terminalImage} imageSize={desktopImageSize} />
                </div>
                <FakeWindow />
                <Dockbar />
            </div>
        );
    }
}

export default Desktop;