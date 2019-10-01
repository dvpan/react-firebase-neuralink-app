import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button/Button';
import './User.css';

const User = (props) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const { firstName, lastName } = props;

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

    if (!firstName) return <div />;

    return (
        <span className='nav-user-block'>
            <span className='item-hor'>{t("Привет")}<b>, {firstName}</b></span>

            {
                props.subMenu &&
                <span onClick={toggle} className='nav-user-circle item-hor'>
                    {`${firstName.charAt(0)}${props.lastName.charAt(0)}`}
                    {
                        <i onClick={toggle} className={`fa ${openIcon} nav-user-open-button`}></i>
                    }
                </span>
            }

            <div variant={`${open}`} className='nav-user-popup' >
                <Button onClick={onClickProxy(props.signOut)} variant='outlined'>
                    Выход
                </Button>
            </div>
        </span>
    );
}

User.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}

export default User;

