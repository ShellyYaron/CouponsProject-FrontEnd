import {IUser} from "./IUser";

export interface ICustomer {
    user: {
        id?: number;
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        userType: string;
    }
    id?: number;
    address: string;
    amountOfChildren: number;
    userId?: number;

}