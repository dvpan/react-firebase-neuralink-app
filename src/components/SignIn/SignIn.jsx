import React from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';

import './SignIn.css'

class SignIn extends React.Component {
    state = {

    }

    handleClick = e => {
        this.props.signIn(this.state);
    }

    handleChange = e => {
        this.props.signInClearErr();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        if (this.props.signInSuccess) return <Redirect to='/dashboard/health' />

        document.title = 'Вход - Нейролинк';
        
        return (
            <div id='signin-content'>
                <div id='signin-image-block'>
                    <div id='signin-image-main'>
                        Революционно новый нейроинтерфейс
                    </div>
                    <div id='signin-image-secondary'>
                        Наш многолетний опыт (более 25 лет) и профессионализм дают возможность создавать технологии нового уровня и расширяют границы для разработчиков и исследователей в самых разных областях человеческих знаний.
                    </div>
                </div>
                <div id='signin-content-block'>
                    <div />
                    <div id='signin-block-main'>
                        <div id='signin-title-main'>
                            Вход
                        </div>
                        <div id='signin-title-secondary' className='item-vert'>
                            Введите свои данные ниже.
                        </div>

                        <TextField
                            id='email'
                            label='Email'
                            placeholder='johnny@lemon.com'
                            onChange={this.handleChange}
                            fullwidth
                            marginVertical
                        />
                        
                        <TextField
                            id='password'
                            type="password"
                            label='Пароль'
                            placeholder='Введите ваш пароль'
                            onChange={this.handleChange}
                            fullwidth
                            marginVertical
                        />

                        <Button
                            error={this.props.signInErr}
                            onClick={this.handleClick}
                            fullWidth
                            marginVertical>
                            Вход
                        </Button>
                    </div>
                    <div id='signin-block-secondary'>
                        Еще нет аккаунта?
                        <Link className='link-blue' to='/signup'> Зарегистрироваться </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signInSuccess: state.firebase.auth.uid,
        signInErr: state.auth.signInErr
    }
}

const mapActionToProps = (dispatch) => {
    return {
        signIn: credentials => dispatch(signIn(credentials)),
        signInClearErr: () => dispatch({ type: 'SIGNIN_CLEAR_ERROR' })
    }
}

export default connect(mapStateToProps, mapActionToProps)(SignIn);
