import React, {useEffect, useState} from 'react'
import {ICoupon} from '../../models/ICoupon';
import "./CouponCard.css"
import {GiShoppingCart} from 'react-icons/gi';
import {TbCurrencyShekel} from 'react-icons/tb';
import {Button} from "react-bootstrap";
import CouponModal from "../modals/CouponModal";
import {useDispatch} from "react-redux";
import {ActionType} from "../../redux/action-type";
import axios from "axios";
import LoginModal from "../modals/LoginModal";

// import {priceConverter} from "../../convert/priceConverter";


export interface IProps {
    coupon: ICoupon;
}


function CouponCard(props: IProps) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


    const loginToggle = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const couponToggle = () => {
        setIsCouponModalOpen(!isCouponModalOpen);
    }

    let couponImage = props.coupon.image;
    return (
        <div className="coupon-card">
            {localStorage.getItem("administrator") ? <> <Button
                className="btn btn-light btn-circle btn-xl">Add</Button><Button
                className="btn btn-light btn-circle btn-xl">Edit</Button></> : null}
            <div><img className="coupon-card-image" src={couponImage} alt="coupon-image"/></div>


            <div className="title">{props.coupon.title} </div>
            <div className="description">{props.coupon.description}</div>


            <div className="coupon-footer-card">
                <div><TbCurrencyShekel/>{props.coupon.price}</div>
                <Button variant='secondary' className="more-details" onClick={couponToggle}>More Details</Button>
                {localStorage.getItem("token") ? <Button variant='success' className="add-to-cart-button">Buy<br/>
                        <GiShoppingCart/></Button>
                    : <div>
                        <Button className="btn btn-light" onClick={loginToggle}>Login</Button>
                       <LoginModal isOpen={isLoginModalOpen} toggle={loginToggle} isLoggedIn={false}/> </div>
                }

                <CouponModal isOpen={isCouponModalOpen} toggle={couponToggle} id={props.coupon.id}/>
            </div>
        </div>
    );
}

export default CouponCard;