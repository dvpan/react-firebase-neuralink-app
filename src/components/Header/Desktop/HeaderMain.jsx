import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

import Button from '../../Button/Button';
import User from '../User/User';

import { routes } from './headerRoutes.js';

import './HeaderMain.css';
import { Trans, withTranslation } from 'react-i18next';
import { compose } from 'C:/Users/danpa/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import LangPicker from '../LangPicker/LangPicker';
import headerLangConfig from '../headerLangConfig';

class HeaderMain extends React.Component {
    render() {
        const { auth } = this.props;
        let { pathname } = this.props.location;
        if (pathname.includes('dashboard')) pathname = '/dashboard';

        return (
            <nav id='nav-main'>
                <span>
                    <Link to='/'>
                        <div id='header-logo-main' />
                    </Link>

                    <LangPicker lang={headerLangConfig} />
                </span>

                <span>
                    {
                        routes.map(item => {
                            if (!auth.uid && item.isAuthNeeded) return null;

                            return (
                                <Link className='item-hor' to={item.to} key={item.to}>
                                    <button className='nav-button' active={`${pathname === (item.to)}`}>
                                        <Trans>{item.label}</Trans>
                                    </button>
                                    <div className='nav-button-border' active={`${pathname === (item.to)}`}></div>
                                </Link>
                            )
                        }
                        )
                    }
                </span>

                {
                    this.getAuthLayout()
                }
            </nav>
        )
    }

    getAuthLayout = () => {
        const { auth, profile } = this.props;

        if (!auth.isLoaded) return <div />;

        if (auth.uid) return (
            <User
                subMenu
                signOut={() => { this.props.signOut(); }}
                openEmulator={() => this.props.history.push("/emulator")}
                firstName={profile.firstName}
                lastName={profile.lastName}
            />
        )

        return (
            <span className='nav-user-block'>
                <Link className='item-hor' to='/signin'>
                    <Button variant='outlined'>Вход</Button>
                </Link>
                <Link className='item-hor' to='/signup'>
                    <Button>Регистрация</Button>
                </Link>
            </span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapActionToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default compose(connect(mapStateToProps, mapActionToProps), withTranslation())(withRouter(HeaderMain));