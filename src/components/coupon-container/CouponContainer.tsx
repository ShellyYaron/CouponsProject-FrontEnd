import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICoupon } from '../../models/ICoupon';
import { ActionType } from '../../redux/action-type';
import { AppState } from '../../redux/app-state';
import CouponCard from "../coupon-card/CouponCard";
import './CouponContainer.css'

function CouponContainer() {
  const dispatch = useDispatch();
  const coupons: ICoupon[] = useSelector((state: AppState)=> state.coupons);
  console.log(coupons);

  useEffect(() => {
    getCoupons();
  }, []);

  async function getCoupons() {
  axios
    .get("http://localhost:8080/coupons")
    .then(response => {
    const serverResponse = response.data
    console.log(serverResponse)
    dispatch({type: ActionType.GetCoupons, payload: serverResponse})
  })
  .catch(error => alert(error.message));
}

  return (
      <div className="coupons-container">
        {coupons.map(
            coupon =>
                <CouponCard
                    key={coupon.id}
                    coupon={coupon}
                />
        )}
      </div>

  )
           }
export default CouponContainer