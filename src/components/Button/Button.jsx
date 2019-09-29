import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = (props) => {
    const { className, fullWidth, marginHorizontal, marginVertical, ...otherProps } = props;

    let content = props.children;
    if (props.error) content = props.error;

    let classNameRoot = 'main-button';

    if (className) classNameRoot += ' ' + className;
    if (fullWidth) classNameRoot += ' fullwidth';

    if (marginHorizontal) classNameRoot += ' item-hor';
    if (marginVertical) classNameRoot += ' item-vert';

    return (
        <button className={classNameRoot} {...otherProps}>
            {content}
        </button>
    )
}

Button.propTypes = {
    fullWidth: PropTypes.bool,
    variant: PropTypes.string,
    marginHorizontal: PropTypes.bool,
    marginVertical: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
