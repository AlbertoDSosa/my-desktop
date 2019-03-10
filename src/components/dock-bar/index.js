import React, {Component} from 'react';
import './style.scss';

class DockBar extends Component {
    render(){
        return(
            <div className="dockbar-cover">
                <div className="dockbar">
                    <a href="https://github.com/AlbertoDSosa" target="_blank">
                        <i className="icon-github"></i>
                    </a>
                    <a className="" href="" target="_blank">
                        <i className="icon-linkedin"></i>
                    </a>
                    <a className="" href="" target="_blank">
                        <i className="icon-twitter"></i>
                    </a>
                    <a className="" href="" target="_blank">
                        <i className="icon-mail3"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default DockBar;