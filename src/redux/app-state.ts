import {ICoupon} from "../models/ICoupon";
import {IUser} from "../models/IUser";

export class AppState {
    public coupons: ICoupon[] = [];
    public user: IUser | null = null;
    public cart: ICoupon[] = [];
    public coupon: ICoupon;
    public couponId: number;

}
