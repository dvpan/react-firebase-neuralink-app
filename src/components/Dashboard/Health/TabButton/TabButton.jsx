import React from 'react';
import PropTypes from 'prop-types';

import './TabButton.css';

const TabButton = (props) => {
    const { ...otherProps } = props;
    let content = props.children;
    return (
        <button className='tab-button' active={`${props.selected}`} {...otherProps}>
            {content}
        </button>
    )
}

TabButton.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default TabButton;