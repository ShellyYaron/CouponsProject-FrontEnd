import {AppState} from "./app-state";
import {Action} from "./action";
import {ActionType} from "./action-type";
import {ICoupon} from "../models/ICoupon";

const appStateInitialValue = new AppState();

export function reduce(oldAppState: AppState = appStateInitialValue, action: Action): any {

    const newAppState = {...oldAppState};

    switch (action.type) {
        case ActionType.GetCoupons:
            newAppState.coupons = action.payload;
            console.log(newAppState.coupons);

            break;
        case ActionType.SelectCoupon:
            const selectedCoupon: ICoupon = newAppState.coupons
                .filter(coupon => coupon.id = action.payload) as unknown as ICoupon;
            newAppState.cart.push(selectedCoupon);
            newAppState.cart = [...newAppState.cart];
            break;
        case ActionType.SuccessfulLogin:
            newAppState.user = action.payload;
            break
        case ActionType.GetCouponById:
            newAppState.coupon = action.payload;
            break;

        case ActionType.getCouponId:
            newAppState.couponId = action.payload;
            break;
        case ActionType.getSortedCoupons:
            newAppState.coupons = action.payload;
            break;
        case ActionType.updateCoupon:
            newAppState.coupons = action.payload;
            break;
        case ActionType.addCoupon:
            newAppState.coupons = action.payload;
            break;
        case ActionType.deleteCoupon:
            newAppState.coupons = action.payload;
            break;

    }

    return newAppState;
}