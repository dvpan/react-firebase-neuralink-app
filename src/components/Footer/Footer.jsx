import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import SocialButton from '../SocialButton/SocialButton';

import './Footer.css';

const Footer = (props) => {
    const { pathname } = props.location;
    if (pathname.includes("dashboard")) return null;

    return (
        <footer>
            <div id='footer-top-container'>
                <p id='footer-top-title'>Вы хотите получать индивидуальные предложения?</p>
                <p id='footer-top-secondary'>Оставьте свой email, чтобы оставаться на связи!</p>
                <div id='footer-action-container'>
                    <TextField id='emailSub' marginHorizontal placeholder='Ваш Email' />
                    <Button marginHorizontal>Отправить</Button>
                </div>
            </div>
            <div id='footer-middle-container'>
                <section>
                    <h4>О технологии</h4>
                    <p><Link to='/'>Как это работает</Link></p>
                    <p><Link to='/'>Патенты</Link></p>
                    <p><Link to='/'>Презентации</Link></p>
                </section>
                <section>
                    <h4>О компании</h4>
                    <p><Link to='/'>О компании</Link></p>
                    <p><Link to='/'>Сотрудничество</Link></p>
                    <p><Link to='/'>Вакансии</Link></p>
                </section>
                <section>
                    <h4>Магазин</h4>
                    <p><Link to='/'>Варианты оплаты</Link></p>
                    <p><Link to='/'>Состояние заказа</Link></p>
                    <p><Link to='/'>Помощь при покупке</Link></p>
                </section>
                <section>
                    <h4>Connect</h4>
                    <p>
                        <a className="link-blue" href="mailto:danpanichev137@gmail.com">danpanichev137@gmail.com</a>
                    </p>
                    <p>(812) 748-88-55</p>
                    <p>
                        <SocialButton variant='dark' type='instagram' />
                        <SocialButton variant='dark' type='twitter' />
                        <SocialButton variant='dark' type='facebook' />
                    </p>
                </section>
            </div>
            <div id='footer-bottom-container'>
                <div id='footer-logo' />
                <span>
                    © 2019 ООО Нейролинк. Все права защищены
                </span>
            </div>
        </footer >
    )
}

export default withRouter(Footer);