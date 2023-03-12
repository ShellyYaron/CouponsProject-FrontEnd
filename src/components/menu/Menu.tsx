import './Menu.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../redux/app-state';
import {IoMdArrowDropdown} from 'react-icons/io';
import axios from "axios";
import {ActionType} from "../../redux/action-type";
import {useEffect, useState} from "react";
import {Dropdown} from "react-bootstrap";



function Menu() {

    const amountOfCoupons = useSelector((state: AppState) => state.coupons.length);
    let dispatch = useDispatch();
    let pageNumber = 0;
    let pageSize = 3;
    const [parameter, setParameter] = useState<string>("");

    async function getSortedCoupons(pageNumber: number, pageSize: number, parameterToSortBy: string) {
        axios.get(`http://localhost:8080/coupons/PageAndSort/${pageNumber}/${pageSize}?parameter=${parameterToSortBy}`)
            .then(response => {
                let serverResponse = response.data
                dispatch({type: ActionType.getSortedCoupons, payload: serverResponse})
            })


    }
let onSelect = (parameter:string) =>{
    console.log(parameter)
        getSortedCoupons(pageNumber,pageSize,parameter)
}
    useEffect(() => {

    }, [parameter])
    return (
        <div className="Menu">
            <div className="menu-header">Coupons ({amountOfCoupons})</div>
            <Dropdown onSelect={(eventKey:string) => {
                getSortedCoupons(pageNumber, pageSize, eventKey)
            }}>
                <Dropdown.Toggle className="btn btn-light dropdown-toggle" >
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey={'price'}>Price</Dropdown.Item>
                    <Dropdown.Item eventKey={'title'}>Title</Dropdown.Item>
                    <Dropdown.Item eventKey={'category'}>Category</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/*<select className="dropdown">*/}
            {/*    /!*<option>Sort by <IoMdArrowDropdown/></option>*!/*/}
            {/*    <option value={'price'} onClick={() => onSelect('price')}>Price</option>*/}
            {/*    <option value={'title'} onClick={() => onSelect('title')}>Title</option>*/}
            {/*    <option value={'category'} onClick={() => onSelect('category')}>Category</option>*/}
            {/*</select>*/}

        </div>
    )
}

export default Menu;