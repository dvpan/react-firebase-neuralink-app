import React from 'react';
import PropTypes from 'prop-types';
import './VitalMonitor.css';

const VitalMonitor = (props) => {
    return (
        <div className='vital-container'>
            {
                props.heartbeat &&
                <div>
                    <span className='vital-item-main'>{props.heartbeat}</span>
                    <span className='vital-item-main-measurement'>уд./мин</span>

                    <div className='vital-item-secondary'>Пульс</div>
                </div>
            }
            {
                props.bloodPressureTop && props.bloodPressureBottom &&
                <div>
                    <span className='vital-item-main'>{`${props.bloodPressureTop}/${props.bloodPressureBottom}`}</span>
                    <span className='vital-item-main-measurement'>мм.рт.ст</span>

                    <div className='vital-item-secondary'>Кровяное давление</div>
                </div>
            }
        </div>
    )
}

VitalMonitor.propTypes = {
    heartbeat: PropTypes.number,
    bloodPressureTop: PropTypes.number,
    bloodPressureBottom: PropTypes.number,
}


export default VitalMonitor;