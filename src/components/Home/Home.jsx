import React from 'react';
import { useTranslation } from "react-i18next";

import Button from 'components/Button/Button';
import SocialButton from 'components/SocialButton/SocialButton';

import './Home.css';

const Home = (props) => {
    const { t } = useTranslation();

    document.title = 'Нейролинк';

    return (
        <div className="home-container">
            <div id="home-card">
                <div id='home-info-block'>
                    <div></div>
                    <div>
                        <div id='home-info-chip-container'>
                            <span>
                                {t("Быстродействие")}
                            </span>
                            <span>
                                {t("Безопасность")}
                            </span>
                            <span>
                                {t("Будущее")}
                            </span>
                        </div>

                        <h2 id='home-info-header'> {t("Нейроинтерфейс мозг-машина уже доступен")} </h2>
                        <p id='home-info-block-text'>
                            {t("Разработанный специально для повседневного использования и комфорта НЕЙРОЛИНК Н1 оснащен сухими электродами, которые обеспечивают точную и надежную регистрацию электрической активности головного мозга.")}
                        </p>

                        <Button marginHorizontal>Купить</Button>
                        <Button marginHorizontal variant='outlined'>Узнать больше</Button>
                    </div>
                    <div>
                        <SocialButton type='instagram' />
                        <SocialButton type='twitter' />
                        <SocialButton type='facebook' />
                    </div>
                </div>
                <div id='home-info-image-block' />
            </div>
        </div>
    )
}

export default Home; 