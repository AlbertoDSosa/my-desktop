import React, {Component} from 'react';
import alberto from './alberto.txt'
import './style.scss';


// The path can be either a local path or an url


class Terminal extends Component {
    
    render() {
        return(
            <div className="terminal">
                <nav className="terminal-menu">
                    <ul className="terminal-menuList">
                        <li className="terminal-menuItem">Archivo</li>
                        <li className="terminal-menuItem">Editar</li>
                        <li className="terminal-menuItem">Ver</li>
                        <li className="terminal-menuItem">Buscar</li>
                        <li className="terminal-menuItem">Terminal</li>
                        <li className="terminal-menuItem">Ayuda</li>
                    </ul>
                </nav>
                <div className="terminal-content">
                    <div className="terminal-output">
                        <pre className="alberto-ascii">{alberto}</pre>
                        <h2>Bienvenido a mi Portafolio</h2> 
                        <p>Inserta el comando help</p>
                    </div>
                    {/* <form className="terminal-input" action="">
                        <input type="text" name="" value="alberto@dsosa:~$ " />
                    </form> */}
                </div>
            </div>
        );
    }
}

export default Terminal;