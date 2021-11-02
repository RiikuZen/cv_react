import React from 'react';
import { NavLink } from 'react-router-dom';
import Pp from '../media/react-logo.png';

const Navigation = () => {
    return (
        <div className="sideBar">
            <div className="id">
                <div className="idContent">
                    <img src={Pp} alt="Profil-Pic"/>
                    <h3>Nicolas CAUET</h3>
                </div>
            </div>

            <div className="navigation"> 
                <ul>
                    <li>
                        <NavLink exact to="/cv_react" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/cv_react/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/cv_react/portfolio" activeClassName="navActive">
                            <i className="fas fa-image"></i> 
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/cv_react/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork"> 
                <ul>
                    <li>
                        <a href="http://google.com" target="_blank"
                        rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                    <a href="http://google.com" target="_blank"
                        rel="noopener noreferrer"> <i className="fab fa-github"></i></a>
                    </li>

                </ul>
            </div>

            <div className="signature">
                <p> Nicolas CAUET - 2021 </p>
            </div>
        </div>
    );
};

export default Navigation;