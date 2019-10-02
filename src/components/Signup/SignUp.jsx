import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { withTranslation } from 'react-i18next';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import H from 'components/Wrapper/H';
import P from 'components/Wrapper/P';

import './SignUp.css'
import { compose } from 'C:/Users/danpa/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

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

        const { t } = this.props;
        document.title = t('Регистрация - Нейролинк');

        const { deviceIdErr, passwordErr } = this.state;

        return (
            <div id='signup-content'>
                <div id='signup-image-block'>
                    <H level={1} id='signup-image-main'>
                        Революционно новый нейроинтерфейс
                    </H>
                    <P id='signup-image-secondary'>
                        Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.
                    </P>
                </div>
                <div id='signup-content-block'>
                    <div />
                    <div id='signup-block-main'>
                        <H level={3} id='signup-title-main'>
                            Добро пожаловать на НЕЙРОЛИНК
                        </H>
                        <P id='signup-title-secondary'>
                            Перед началом работы заполните форму ниже
                        </P>

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
                    <P id='signup-block-secondary'>
                        Уже есть аккаунт?
                        <Link className='link-blue' to='/signin'> Войти</Link>
                    </P>
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

export default compose(connect(mapStateToProps, mapActionToProps), withTranslation())(SignUp);