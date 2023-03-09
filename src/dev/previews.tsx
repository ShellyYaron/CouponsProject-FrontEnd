import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import CouponContainer from "../components/coupon-container/CouponContainer";
import Header from "../components/header/Header";
import LoginModal from "../components/modals/LoginModal";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CouponContainer">
                <CouponContainer/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;