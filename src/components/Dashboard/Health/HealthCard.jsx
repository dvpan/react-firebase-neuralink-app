import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import VitalMonitor from '../VitalMonitor/VitalMonitor';


const HealthCard = (props) => {    
    const { t } = useTranslation();

    if (!props.time) {
        return <h3><i>Данные отсутствуют</i></h3>
    };


    return (
        <React.Fragment>
            <ProgressBar title='Усталость' progress={props.freshness} />
            <ProgressBar title='Жажда' progress={props.thirsty} />
            <ProgressBar title='Трезвость' reverse progress={props.intoxication} />

            <VitalMonitor
                heartbeat={props.heartbeat}
                bloodPressureTop={props.bloodPressureTop}
                bloodPressureBottom={props.bloodPressureBottom}
            />

            {
                props.time &&
                <p className='health-chart-date'>
                    {`${t("Таким ваше здоровье было")} ${new Date(props.time).toLocaleString()}`}
                </p>
            }
        </React.Fragment>
    )
}

HealthCard.propTypes = {
    time: PropTypes.number,
    freshness: PropTypes.number,
    thirsty: PropTypes.number,
    intoxication: PropTypes.number,
    heartbeat: PropTypes.number,
    bloodPressureTop: PropTypes.number,
    bloodPressureBottom: PropTypes.number,
}

export default HealthCard;