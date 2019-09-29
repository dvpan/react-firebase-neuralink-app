import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarDesktop.css';

const SidebarDesktop = (props) => {
    const [hoverItem, setHoverItem] = useState(null);

    const onMouseEnter = (e, item) => {
        setHoverItem(item.to);
    };

    const onMouseLeave = (e, item) => {
        setHoverItem(null);
    };

    const { pathname, routes } = props;
    return (
        <div id='sidebar-content'>
            {
                routes.map(item => (
                    <Link onMouseEnter={(e) => onMouseEnter(e, item)} onMouseLeave={(e) => onMouseLeave(e, item)} className='sidebar-item' active={`${item.to === pathname}`} to={item.to} key={item.to}>
                        <div className={item.iconClassName} ></div>
                        {
                            item.to === pathname && item.to === hoverItem && <span className='sidebar-item-label'>{item.label}</span>
                        }
                    </Link>
                ))
            }
        </div>
    )
}

export default SidebarDesktop;