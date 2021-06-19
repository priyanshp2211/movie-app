import React from "react";
import { Navbar } from 'react-bootstrap';

const Header = (props) =>{

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">WOOKIE MOVIES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                    className='mr-sm-2'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder='Type to search...'>
                </input>
            </div>
        </Navbar>
    );
}

export default Header;