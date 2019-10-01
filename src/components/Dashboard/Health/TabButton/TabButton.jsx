import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './TabButton.css';

const TabButton = (props) => {
    const { t } = useTranslation();

    const { ...otherProps } = props;
    let content = props.children;
    return (
        <button className='tab-button' active={`${props.selected}`} {...otherProps}>
            {t(content)}
        </button>
    )
}

TabButton.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default TabButton;