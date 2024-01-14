import React from 'react'
import { Link, NavLink} from "react-router-dom";
import Home from "../images/home.png";
import menu from "../images/menu.png";
import Logout from "../images/logout.png";
import moon from "../images/moon.png";





const Navbar = () => {
   
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-darks" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item" >
                            <Link className="nav-link " aria-current="page" to="/">
                                <img src={Home} width={25} alt="" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">
                                <img src={menu} width={25} alt="" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">
                                <img src={Logout} width={25} alt="" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">
                                <img src={moon} width={25} alt="" />
                            </Link>
                        </li>
                     
 */}











                        <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        
                      >
                     <img className = "menu-active" src={Home} width={30} alt="" />
                      </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/menu"
                      >
                       <img className = "menu-active" src={menu} width={30} alt="" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/tasklist"
                      >
                      <img className = "menu-active" src={moon} width={30} alt="" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                        <div className='background'> 
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "menu-active" : ""
                        }
                        to="/contact"
                      >
                         <img className = "menu-active" src={Logout} width={30} alt="" style={{borderImage : "round"}} />
                      </NavLink>
                      </div>
                    </li>










                    </ul>
                    <form className="d-flex">
                    <Link className="btn btn-primary mx-1" to = "/login"  role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to = "/signup"  role="button">Sign Up</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar