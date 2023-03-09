import Modal from "react-modal";
import {ImPriceTags} from "react-icons/im";
import {ICoupon} from "../../models/ICoupon";
import {TbCurrencyShekel} from "react-icons/tb";
import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {GiShoppingCart} from "react-icons/gi";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root');

export interface IProps {
    isOpen: boolean;
    toggle: any;
    id: number;
}


function CouponModal(props: IProps) {

   const [coupon, setCoupon] = useState<ICoupon | any>({})

    useEffect(() => {
        fetch(`http://localhost:8080/coupons/${props.id}`).then(data => data.json()).then(setCoupon)
    }, []);

    return (
        <div>
            <Modal isOpen={props.isOpen} style={customStyles} onRequestClose={props.toggle}>
                     {coupon &&
                 <>
                         <div><img className="coupon-card-image" src={coupon.image} alt="coupon-image"/></div>
                         <div className="title">{coupon.title} </div>
                         <div className="description">{coupon.description}</div>
                         Start date: {coupon.startDate} <br/>
                         Expire date: {coupon.endDate} <br/>
                         Category: {coupon.category} <br/>
                         Amount: {coupon.amount} <br/>

                         <div className="coupon-footer-card">
                         <div><ImPriceTags/>{coupon.price}<TbCurrencyShekel/></div>

                             {localStorage.getItem("token") ?<Button variant='success' className="add-to-cart-button">Buy<br/>
                                     <GiShoppingCart/></Button>
                                 : <Button>Login</Button>
                             }
                         </div>
                </>
                     }

            </Modal>
        </div>
    )
}

export default CouponModal;