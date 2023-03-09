import axios from 'axios';
import React, {useState} from 'react';
import Modal from "react-modal";
import {ActionType} from "../../redux/action-type";
import {useDispatch} from "react-redux";
import './LoginModal.css';

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
    isLoggedIn: boolean;
}

function LoginModal(props: IProps) {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClicked = async () => {
        try {

            const response = await axios.post("http://localhost:8080/users/login", {username, password});
            const serverResponse = response.data;
            let token = 'Bearer ' + serverResponse.token;
            axios.defaults.headers.common['Authorization'] = token;
            localStorage.setItem('token', token);
            dispatch({type: ActionType.SuccessfulLogin, payload: serverResponse.user})
            props.toggle();
            props.isLoggedIn = true;

        } catch (error: any) {
            alert(error.message);
        }

    }
    return (
        <div className="login-modal">
            <Modal isOpen={props.isOpen} style={customStyles} onRequestClose={props.toggle}>
                <button onClick={props.toggle}>Close</button>
                <form>
                    <input type="text" placeholder='user name'
                           onChange={event => setUsername(event.target.value)}/><br/>
                    <input type="password" placeholder='password'
                           onChange={event => setPassword(event.target.value)}/><br/>
                    <input type="button" value="login" onClick={onLoginClicked}/>
                </form>
            </Modal>
        </div>
    );
}

export default LoginModal