import React from 'react'
import { useSelector } from 'react-redux'
import { ICoupon } from '../../models/ICoupon'
import { AppState } from '../../redux/app-state'
import CouponCard from '../coupon-card/CouponCard';

function Cart() {

    const cart: ICoupon[] = useSelector((state: AppState) => state.cart);

    return (
        <div>
            {cart.map(
                coupon =>
                    <CouponCard
                        key={coupon.id}
                        coupon={coupon}
                    />
            )}
        </div>
    )
}

export default Cart