import React from 'react';
import './Header.css'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../../images/logo.png';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user,handleSignOut}=useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
            <Container>
            <Navbar.Brand href="#home">
                <img className="nav-logo" height="70px" src={navLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end nav-route">

            <Link className="text-decoration-none me-4  fw-bold  " to="/home">Home</Link>
            <Link className="text-decoration-none me-4  fw-bold " to="/services">Services</Link>
            <Link className="text-decoration-none me-4  fw-bold " to="/doctors">Doctors</Link>
            <Link className="text-decoration-none me-4  fw-bold " to="/about">About Us</Link>


            {user.email? <button style={{backgroundColor:'#0bb288'}} onClick={handleSignOut} className=" me-4 fs-6 border-0 px-3 py-1 rounded text-light singout-btn ">Sing Out</button>:
                <Link className="text-decoration-none me-4 fw-bold  " to="/login">Login</Link>}


            {user?.email&&<p className="mt-3 fs-5 fw-bold text-secondary profile-name"><i className="far fa-user-circle fs-5 fw-bold"></i> {user?.email}</p>}


            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

    );
};

export default Header;