import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import VitalMonitor from '../VitalMonitor/VitalMonitor';

const HealthCard = (props) => {
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
                <div className='health-chart-date'>
                    {`Таким ваше здоровье было ${new Date(props.time).toLocaleString()}`}
                </div>
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