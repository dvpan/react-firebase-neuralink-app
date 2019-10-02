import React, { PureComponent } from 'react'
import { newMeasurement } from '../../store/actions/healthActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { withTranslation } from 'react-i18next';
import Button from '../Button/Button';
import './Emulator.css';
import H from 'components/Wrapper/H';

class Emulator extends PureComponent {

    constructor(props) {
        super(props);
        this.state = this.getRandomMeasurement();
    }

    onClick = (e) => {
        this.props.newMeasurement({ userId: this.props.userId, time: new Date().getTime(), ...this.state });
        this.setState(this.getRandomMeasurement());
    }

    onRandomizeClick = (e) => {
        this.setState(this.getRandomMeasurement());
    }

    getRandomMeasurement = () => {
        const getRandomValue = (min, max) => {
            if (min === 0 && max === 1) return Math.random();

            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        return {
            heartbeat: getRandomValue(50, 110),
            bloodPressureTop: getRandomValue(90, 160),
            bloodPressureBottom: getRandomValue(50, 110),
            freshness: getRandomValue(0, 1),
            intoxication: getRandomValue(0, 1),
            thirsty: getRandomValue(0, 1)
        }
    }

    render() {

        const { heartbeat, bloodPressureTop, bloodPressureBottom, freshness, intoxication, thirsty } = this.state;
        const { t } = this.props;
        
        document.title = t( 'Эмулятор - Нейролинк');
        
        return (
            <div className='emulator-device-container'>
                <H>
                    Добавить случайные данные
                </H>

                <div className='emulator-device-card'>
                    <div>
                        <span role="img" aria-label="beating-heart">💓</span>
                        {t("Пульс")}:
                        <span> {`${heartbeat} ${t("уд./мин")}`} </span>
                    </div>
                    <div>
                        <span role="img" aria-label="drop-of-blood">🩸</span>
                        {t("Кровяное давление")}:
                        <span> {`${bloodPressureTop}/${bloodPressureBottom} ${t("мм.рт.ст")}`}  </span>
                    </div>
                    <div>
                        <span role="img" aria-label="tired-face">😫</span>
                        {t("Усталость")}:
                        <span> {`${Math.floor(100 - freshness * 100)}%`} </span>
                    </div>
                    <div>
                        <span role="img" aria-label="beer-mug">🍺</span>
                        {t("Трезвость")}:
                        <span> {`${Math.floor(100 - intoxication * 100)}%`} </span>
                    </div>
                    <div>
                        <span role="img" aria-label="splashing-water">💦</span>
                        {t("Жажда")}:
                        <span> {`${Math.floor(thirsty * 100)}%`} </span>
                    </div>
                </div>
                <div className='emulator-device-control'>
                    <Button marginHorizontal variant="outlined" onClick={this.onRandomizeClick}>Обновить</Button>
                    <Button marginHorizontal onClick={this.onClick}>Добавить значения</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMeasurement: measurement => dispatch(newMeasurement(measurement))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect(['health']), withTranslation())(Emulator);