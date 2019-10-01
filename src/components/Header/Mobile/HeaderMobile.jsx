import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

import User from './../User/User';

import './HeaderMobile.css';
import HamButton from './HamButton/HamButton';
import { compose } from 'C:/Users/danpa/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { withTranslation } from 'react-i18next';
import LangPicker from '../LangPicker/LangPicker';

class HeaderMobile extends React.Component {
    state = {
        isContentVisible: false,
        lastLocation: null,
    }

    changeHandler = () => {
        this.setState({ isContentVisible: !this.state.isContentVisible });
    }

    render() {
        const { isContentVisible, lastLocation } = this.state;
        let { pathname } = this.props.location;
        if (pathname.includes('dashboard')) pathname = '/dashboard';

        if (!lastLocation) {
            this.setState({ lastLocation: pathname });
        } else {
            if (lastLocation !== pathname) {
                this.setState({ isContentVisible: false, lastLocation: pathname })
            }
        }

        return (
            <nav id='nav-mobile'>
                
                <Link to='/'>
                    <div id='header-logo-mobile' />
                </Link>
                
                <LangPicker lang={[{ name: 'English', icon: 'EN', lang: 'en' }, { name: 'Русский', icon: 'РУС', lang: 'ru' }]} />


                <HamButton active={isContentVisible} onToggle={this.changeHandler} />

                <div className='nav-mobile-content' visible={`${isContentVisible}`}>
                    {this.getAuthLayout()}
                </div>
            </nav>
        )
    }

    getAuthLayout = () => {
        const { t, auth, profile } = this.props;

        if (!auth.isLoaded) return <div />;

        if (auth.uid) return (
            <React.Fragment>
                <User
                    profile={profile}
                />

                <Link className='nav-mobile-item' to='/dashboard'>
                    <i className="icon-tachometer" aria-hidden="true"></i>
                    {t("Панель управления")}
                </Link>

                <Link className='nav-mobile-item' to='/emulator'>
                    <i className="icon-flask"></i>
                    {t("Эмулятор")}
                </Link>


                <Link className='nav-mobile-item' to='/'>
                    <i className="icon-home" aria-hidden="true"></i>
                    {t("Главная")}
                </Link>

                <Link className='nav-mobile-item' to='/' onClick={() => this.props.signOut()}>
                    <i className="icon-sign-out" aria-hidden="true"></i>
                    {t("Выход")}
                </Link>
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <Link className='nav-mobile-item' to='/signin'>
                    <i className="icon-sign-in" aria-hidden="true"></i>
                    {t("Вход")}
                </Link>

                <Link className='nav-mobile-item' to='/signup'>
                    <i className="icon-user-plus" aria-hidden="true"></i>
                    {t("Регистрация")}
                </Link>
            </React.Fragment>
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

export default compose(connect(mapStateToProps, mapActionToProps), withTranslation())(withRouter(HeaderMobile));