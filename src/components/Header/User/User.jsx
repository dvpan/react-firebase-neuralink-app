import React, { useState } from 'react';
import Button from 'components/Button/Button';
import './User.css';

const User = (props) => {
    const [open, setOpen] = useState(false);

    const onClickProxy = (f) => {
        return () => {
            setOpen(false);
            if (f) f();
        }
    }
    
    const toggle = () => {
        setOpen(!open);
    }

    const openIcon = open ? 'icon-angle-up' : 'icon-angle-down';

    if (!props.profile.firstName) return <div />;

    return (
        <span className='nav-user-block'>
            <span className='item-hor'>Привет<b>, {props.profile.firstName}</b></span>

            {
                props.subMenu &&
                <span onClick={toggle} className='nav-user-circle item-hor'>
                    {`${props.profile.firstName.charAt(0)}${props.profile.lastName.charAt(0)}`}
                    {
                        <i onClick={toggle} className={`fa ${openIcon} nav-user-open-button`}></i>
                    }
                </span>                
            }

            <div variant={`${open}`} className='nav-user-info' >
                <Button onClick={onClickProxy(props.signOut)} variant='outlined'>
                    Выход
                </Button>
            </div>
        </span>
    );
}

export default User;

