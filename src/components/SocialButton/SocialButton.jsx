import React from 'react';
import PropTypes from 'prop-types';
import './SocialButton.css';

const SocialButton = (props) => {
    let className = '';
    let ariaLabel;

    switch (props.type) {
        case 'instagram':
            className += 'icon-instagram';
            ariaLabel = 'Instagram Social Button';
            break;
        case 'twitter':
            className += 'icon-twitter';
            ariaLabel = 'Twitter Social Button';
            break;
        case 'facebook':
            className += 'icon-facebook';
            ariaLabel = 'Facebook Social Button';
            break;

        default: break;
    }

    return (
        <button aria-label={ariaLabel} className='social-button' variant={props.variant}>
            <div className={className}></div>
        </button>
    )
}

SocialButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string
};

export default SocialButton;