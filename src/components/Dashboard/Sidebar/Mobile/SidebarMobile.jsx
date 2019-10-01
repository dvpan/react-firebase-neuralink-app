import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarMobile.css';

const SidebarMobile = (props) => {
    const { pathname, routes } = props;
    return (
        <div id='sidebar-content-container-mobile'>
            <div id='sidebar-content-mobile'>
                {
                    routes.map(item => (
                        <Link
                            active={`${item.to === pathname}`}
                            to={item.to} key={item.to}
                            className='sidebar-mobile-item' >
                            <div className={item.iconClassName} ></div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SidebarMobile;