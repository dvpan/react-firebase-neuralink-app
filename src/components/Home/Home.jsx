import React from 'react';
import Button from 'components/Button/Button';
import SocialButton from 'components/SocialButton/SocialButton';

import './Home.css';

const Home = (props) => {
    
    document.title = 'Нейролинк';

    return (
        <div className="home-container">
            <div id="home-card">
                <div id='home-info-block'>
                    <div></div>
                    <div>
                        <div id='home-info-chip-container'>
                            <span className='home-info-chip'>Быстродействие</span>
                            <span className='home-info-chip'>Надежность</span>
                            <span className='home-info-chip'>Будущее</span>
                        </div>

                        <h2 id='home-info-header'> Нейроинтерфейс мозг-машина уже доступен </h2>
                        <p id='home-info-block-text'>
                            Разработанный специально для повседневного использования и комфорта НЕЙРОЛИНК Н1 оснащен сухими электродами, которые обеспечивают точную и надежную регистрацию электрической активности головного мозга.
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