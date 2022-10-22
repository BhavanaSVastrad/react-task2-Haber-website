import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/haber.jpg';
import '../Style/nav.css';


//class -> className
export default function NavBar() {
    return (

        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* PROPERTY BINDING */}
                        <img src={logo} style={{ height: 100, width: 250, padding: 10 }}></img>
                    </li>
                    <li className="nav-item">
                        <br />
                        <Link className="nav-link" to="" style={{ color: 'orange' }}>HOME</Link>
                    </li>

                    <li className="dropdown"  >
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                            ABOUT
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="dolls">SERVICES</Link></li>
                            <li><Link className="dropdown-item" to="vehicles">PROJECTS</Link></li>

                            <li><Link className="dropdown-item" to="games">NEWS</Link></li>


                        </ul>
                    </li>
                    <li className="nav-item">
                        <br />
                        <Link className="nav-link" to="about" style={{ color: 'white' }}>SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <br />
                        <Link className="nav-link" to="classcom" style={{ color: 'white' }}>PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                        <br />
                        <Link className="nav-link" to="classcom" style={{ color: 'white' }}>OUR BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <br />
                        <Link className="nav-link" to="classcom" style={{ color: 'white' }}>CONTACTS</Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: 400, marginTop: 10 }}>
                        <br />
                        <i class="fa fa-facebook-square fa-lg fa-fw" aria-hidden="true" ></i>



                    </li>
                    <li className="nav-item" style={{ marginLeft: 20, marginTop: 10 }}>
                        <br />
                
                     

                        <i class="fa fa-google-plus fa-lg fa-fw"></i>
                    </li>
                    <li className="nav-item" style={{ marginLeft: 20, marginTop: 10 }}>
                        <br />
                     <i class="fa fa-twitter-square  fa-lg fa-fw"></i>
                     

                    </li>
                    <li className="nav-item" style={{ marginLeft: 20, marginTop: 10 }}>
                        <br />
                        <i class="fa fa-pinterest fa-lg fa-fw"></i>
                     

                    </li>
                    <li className="nav-item" style={{ marginLeft: 20, marginTop: 10 }}>
                        <br />
                        <i class="fa fa-linkedin fa-lg fa-fw"></i>
                     

                    </li>
                   
                  
                </ul>

            </nav>


        </div>

    )
}