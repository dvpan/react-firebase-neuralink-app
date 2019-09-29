import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import Button from '../Button/Button';
import TextField from '../TextField/TextField';

import './SignUp.css'

class SignUp extends React.Component {
    state = {

    }

    handleClick = (e) => {
        const { deviceIdErr, passwordErr, ...authObj } = this.state;
        if (deviceIdErr || passwordErr) return;
        this.props.signUp(authObj);
    }

    handleChange = (e) => {
        this.props.signUpClearErr();

        this.setState({
            [e.target.id]: e.target.value.trim()
        })
    }

    handleFocus = (e) => {
        const { id } = e.target;
        this.props.signUpClearErr();
        switch (id) {
            case 'password':
            case 'passwordRepeat':
                this.setState({ passwordErr: null });
                break;
            case 'deviceId':
                this.setState({ deviceIdErr: null });
        }
    }

    handleBlur = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'deviceId': {
                if (value.length !== 10) {
                    this.setState({ deviceIdErr: 'ID устройства содержит 10 символов' });
                }
            } break;

            case 'password':
            case 'passwordRepeat': {
                if (this.state.password !== this.state.passwordRepeat) {
                    this.setState({ passwordErr: 'Пароли не совпадают' });
                }
            } break;
        }
    }

    render() {
        if (this.props.signUpSuccess) return <Redirect to='/signin' />

        document.title = 'Регистрация - Нейролинк';

        const { deviceIdErr, passwordErr } = this.state;

        return (
            <div id='signup-content'>
                <div id='signup-image-block'>
                    <div id='signup-image-main'>
                        Революционно новый нейроинтерфейс
                    </div>
                    <div id='signup-image-secondary'>
                        Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.
                    </div>
                </div>
                <div id='signup-content-block'>
                    <div />
                    <div id='signup-block-main'>
                        <div id='signup-title-main'>
                            Добро пожаловать на НЕЙРОЛИНК
                        </div>
                        <div id='signup-title-secondary'>
                            Перед началом работы заполните форму ниже.
                        </div>

                        <TextField
                            id='firstName'
                            label='Имя'
                            placeholder='Иван'
                            onChange={this.handleChange}
                            fullwidth
                            marginVertical
                        />
                        <TextField
                            id='lastName'
                            label='Фамилия' placeholder='Иванов'
                            onChange={this.handleChange}
                            fullwidth
                            marginVertical
                        />
                        <TextField
                            id='email'
                            label='Email'
                            placeholder='johnny@lemon.com'
                            onChange={this.handleChange}
                            fullwidth
                            marginVertical
                        />
                        <TextField
                            id='deviceId'
                            type='deviceId'
                            error={deviceIdErr}
                            label='ID устройства'
                            placeholder='10 символов на обратной стороне устройства'
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            fullwidth
                            marginVertical
                        />
                        <TextField
                            id='password'
                            type='password'
                            error={passwordErr}
                            label='Пароль'
                            placeholder='Введите ваш пароль'
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            fullwidth
                            marginVertical
                        />
                        <TextField
                            id='passwordRepeat'
                            type='password' error={passwordErr}
                            label='Пароль еще раз'
                            placeholder='Подтвердите ваш пароль'
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            fullwidth
                            marginVertical
                        />

                        <Button
                            error={this.props.signUpErr}
                            onClick={this.handleClick}
                            fullWidth
                            marginVertical>
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div id='signup-block-secondary'>
                        Уже есть аккаунт?
                        <Link className='link-blue' to='/signin'> Войти </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signUpSuccess: state.firebase.auth.uid,
        signUpErr: state.auth.signUpErr,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
        signUpClearErr: () => dispatch({ type: 'SIGNUP_CLEAR_ERROR' })
    }
}

export default connect(mapStateToProps, mapActionToProps)(SignUp);