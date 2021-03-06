import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderMain from './Desktop/HeaderMain';
import HeaderClean from './Clean/HeaderClean';
import HeaderMobile from './Mobile/HeaderMobile';

const HeaderComponent = (props) => {
    const { pathname } = props.location;      

    switch (pathname) {
        case '/signin': return <HeaderClean />
        case '/signup': return <HeaderClean />
        default: {
            if (props.mobile) {
                return <HeaderMobile />
            } else {
                return <HeaderMain />
            }
        }
    }
}

export default withRouter(HeaderComponent);