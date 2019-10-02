import React from 'react';
import { withRouter } from 'react-router-dom'
import Link from 'components/Wrapper/Link';
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import SocialButton from '../SocialButton/SocialButton';
import H from 'components/Wrapper/H';
import P from 'components/Wrapper/P';

import './Footer.css';

const Footer = (props) => {
    const { pathname } = props.location;

    if (pathname.includes("dashboard")) return null;
    return (
        <footer>
            <div id='footer-top-container'>
                <P id='footer-top-title'>Вы хотите получать индивидуальные предложения?</P>
                <P id='footer-top-secondary'>Оставьте свой email, чтобы оставаться на связи!</P>
                <div id='footer-action-container'>
                    <TextField id='emailSub' marginHorizontal placeholder='Ваш Email' />
                    <Button marginHorizontal>Отправить</Button>
                </div>
            </div>
            <div id='footer-middle-container'>
                <section>
                    <H level={4}>О технологии</H>
                    <p><Link to='/'>Как это работает</Link></p>
                    <p><Link to='/'>Патенты</Link></p>
                    <p><Link to='/'>Презентации</Link></p>
                </section>
                <section>
                    <H level={4}>О компании</H>
                    <p><Link to='/'>О нас</Link></p>
                    <p><Link to='/'>Сотрудничество</Link></p>
                    <p><Link to='/'>Вакансии</Link></p>
                </section>
                <section>
                    <H level={4}>Магазин</H>
                    <p><Link to='/'>Варианты оплаты</Link></p>
                    <p><Link to='/'>Состояние заказа</Link></p>
                    <p><Link to='/'>Помощь при покупке</Link></p>
                </section>
                <section>
                    <H level={4}>Связь с нами</H>
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
                <a target='_blank' href='https://github.com/dvpan/react-firebase-neuralink-app' rel="noopener noreferrer">Available on GitHub</a>
            </div>
        </footer>
    )
}

export default withRouter(Footer);