import React, {useEffect, useState} from "react";
import "./Header.css";
import RegisterModal from "../modals/RegisterModal";
import LoginModal from "../modals/LoginModal";
import {Button} from "react-bootstrap";

function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("token") ? true : false);
    }, []);



    const loginToggle = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };
    const registerToggle = () => {
        setIsRegisterModalOpen(!isRegisterModalOpen);
    };
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        setIsLoggedIn(false);
    }

    return (
        <div className="header">
            <span className="leftHeader">
            <a className="logo-image"><img alt="" src="/images/Coupon.png" width="40" height="40"/></a>

        </span>
            {localStorage.getItem("token") ?
                <Button variant='success' className="add-to-cart-button" onClick={handleLogout}>Logout<br/>
                </Button>
                : <div className="d-flex justify-content-md-center">
                    <Button className="btn btn-light" onClick={loginToggle}>Login</Button>
                    <LoginModal isOpen={isLoginModalOpen} toggle={loginToggle} isLoggedIn={false} />
                    <span className="space"></span>
                    <Button className="btn btn-light" onClick={registerToggle}>Register</Button>
                    <RegisterModal isOpen={isRegisterModalOpen} toggle={registerToggle}/>
                </div>
            }
        </div>
    )
}

export default Header;