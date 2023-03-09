import {ChangeEvent} from "react";
import {useState} from "react";
import axios from "axios"
import Modal from "react-modal";
import {ICustomer} from "../../models/ICustomer";


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
}


function RegisterModal(props: IProps) {


    async function createCustomer(customer: ICustomer) {
        axios.post("http://localhost:8080/customers", customer)
            .then(response => {

            })
    }

    const [newUser, setNewUser] = useState({
        user: {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            userType: "CUSTOMER",
        },
        address: "",
        amountOfChildren: 0
    })

    const [userNameError, setUserNameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [firstNameError, setFirstNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");
    const [addressError, setAddressError] = useState<string>("");
    const [amountOfChildrenError, setAmountOfChildrenError] = useState<string>("");


    const onChanged = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.name === "username") {
            setUserNameError("");
        }
        if (event.target.name === "password") {
            setPasswordError("")
        }
        if (event.target.name === "firstName") {
            setFirstNameError("")
        }
        if (event.target.name === "lastName") {
            setLastNameError("")
        }
        if (event.target.name === "amountOfChildren") {
            setAmountOfChildrenError("")
        }
        if (event.target.name === "address") {
            setAddressError("")
        }
        setNewUser({
            ...newUser,
            user: {
                ...newUser.user,
                [event.target.name]: event.target.value
            },
            [event.target.name]: event.target.value
        })
    }

    const onRegisterClicked = () => {
        if (!newUser.user.username) {
            setUserNameError("Username is required")
        }
        if (!newUser.user.password) {
            setPasswordError("Password is required")
        }
        if (!newUser.user.firstName) {
            setFirstNameError("First name is required")
        }
        if (!newUser.user.lastName) {
            setLastNameError("Last name is required")
        }
        if (!newUser.address) {
            setAddressError("Address is required")
        }
        if (!newUser.amountOfChildren) {
            setAmountOfChildrenError("Amount of children is required")
        }
        createCustomer(newUser)
    }

    return (
        <div>
            <Modal isOpen={props.isOpen} style={customStyles} onRequestClose={props.toggle}>
                <label>User name</label>
                <input type="text" name="username" placeholder="Insert username" onChange={onChanged}/><br/>
                <span>{userNameError}</span><br/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Insert password" onChange={onChanged}/><br/>
                <span>{passwordError}</span><br/>
                <label>First name</label>
                <input type="text" name="firstName" placeholder="Insert first name" onChange={onChanged}/><br/>
                <span>{firstNameError}</span><br/>
                <label>Last name</label>
                <input type="text" name="lastName" placeholder="Insert last name" onChange={onChanged}/><br/>
                <span>{lastNameError}</span><br/>
                <label>Amount of children</label>
                <input type="text" name="amountOfChildren" placeholder="Insert amount of children"
                       onChange={onChanged}/><br/>
                <span>{amountOfChildrenError}</span><br/>
                <label>Address</label>
                <input type="text" name="address" placeholder="Insert address" onChange={onChanged}/><br/>
                <span>{addressError}</span><br/>
                <input type="button" value="Register" onClick={onRegisterClicked}/>
            </Modal>
        </div>
    )
}

export default RegisterModal;
