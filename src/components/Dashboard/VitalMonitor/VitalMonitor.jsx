import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './VitalMonitor.css';

const VitalMonitor = (props) => {
    const { t } = useTranslation();
    return (
        <div className='vital-container'>
            {
                props.heartbeat &&
                <div>
                    <span className='vital-item-main'>{props.heartbeat}</span>
                    <span className='vital-item-main-measurement'>{t("уд./мин")}</span>

                    <div className='vital-item-secondary'>{t("Пульс")}</div>
                </div>
            }
            {
                props.bloodPressureTop && props.bloodPressureBottom &&
                <div>
                    <span className='vital-item-main'>{`${props.bloodPressureTop}/${props.bloodPressureBottom}`}</span>
                    <span className='vital-item-main-measurement'>{t("мм.рт.ст")}</span>

                    <div className='vital-item-secondary'>{t("Кровяное давление")}</div>
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