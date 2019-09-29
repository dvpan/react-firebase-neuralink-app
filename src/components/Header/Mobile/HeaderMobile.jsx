import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

import User from './../User/User';

import './HeaderMobile.css';
import HamButton from './HamButton/HamButton';

class HeaderMobile extends React.Component {
    state = {
        isContentVisible: false,
        lastLocation: null,
    }

    changeHandler = () => {
        this.setState({ isContentVisible: !this.state.isContentVisible });
    }

    render() {
        let { pathname } = this.props.location;
        if (pathname.includes('dashboard')) pathname = '/dashboard';

        if (!this.state.lastLocation) {
            this.setState({ lastLocation: pathname });
        } else {
            if (this.state.lastLocation !== pathname) {
                this.setState({ isContentVisible: false, lastLocation: pathname })
            }
        }

        return (
            <nav id='nav-mobile'>
                <Link to='/'>
                    <div id='header-logo-mobile' />
                </Link>
                <HamButton onToggle={this.changeHandler} />

                <div className='nav-mobile-content' visible={`${this.state.isContentVisible}`}>
                    {this.getAuthLayout()}
                </div>
            </nav>
        )
    }

    getAuthLayout = () => {
        const { auth, profile } = this.props;

        if (!auth.isLoaded) return <div />;

        if (auth.uid) return (
            <React.Fragment>
                <User
                    profile={profile}
                />

                <Link className='nav-mobile-item' to='/dashboard'>
                    <i className="icon-tachometer" aria-hidden="true"></i>
                    Панель управления
                </Link>

                <Link className='nav-mobile-item' to='/emulator'>
                    <i className="icon-flask"></i>
                    Эмулятор
                </Link>


                <Link className='nav-mobile-item' to='/'>
                    <i className="icon-home" aria-hidden="true"></i>
                    Главная
                </Link>

                <Link className='nav-mobile-item' to='/' onClick={() => this.props.signOut()}>
                    <i className="icon-sign-out" aria-hidden="true"></i>
                    Выход
                </Link>
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <Link className='nav-mobile-item' to='/signin'>
                    <i className="icon-sign-in" aria-hidden="true"></i>
                    Вход
                </Link>

                <Link className='nav-mobile-item' to='/signup'>
                    <i className="icon-user-plus" aria-hidden="true"></i>
                    Регистрация
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

export default connect(mapStateToProps, mapActionToProps)(withRouter(HeaderMobile));