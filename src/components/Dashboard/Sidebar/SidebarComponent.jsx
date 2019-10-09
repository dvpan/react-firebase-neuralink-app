import React from 'react';
import { withRouter } from 'react-router-dom';
import SidebarDesktop from './Desktop/SidebarDesktop';
import SidebarMobile from './Mobile/SidebarMobile';

const SidebarComponent = (props) => {
    const routes = [
        {
            to: '/dashboard/health',
            iconClassName: 'icon-heartbeat',
            label: 'Здоровье'
        },
        {
            to: '/dashboard/usage',
            iconClassName: 'icon-microchip',
            label: 'Использование'
        },
        {
            to: '/dashboard/notifications',
            iconClassName: 'icon-bell',
            label: 'Уведомления'
        },
        {
            to: '/dashboard/settings',
            iconClassName: 'icon-cog',
            label: 'Настройки'
        },
        {
            to: '/dashboard/support',
            iconClassName: 'icon-question-circle',
            label: 'Справка'
        }
    ];

    const { pathname } = props.location;

    if (pathname.includes('dashboard')) {
        if (props.mobile) return <SidebarMobile routes={routes} pathname={pathname} />
        else return <SidebarDesktop routes={routes} pathname={pathname} />         
    }
    else {
        return null;
    }
}

export default withRouter(SidebarComponent);