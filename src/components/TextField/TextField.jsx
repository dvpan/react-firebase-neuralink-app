import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import './TextField.css';

const TextField = (props) => {
    const [fieldEmptyError, setFieldEmptyError] = useState(null);
    const { t, i18n } = useTranslation();

    const handleChange = (e) => {
        props.onChange && props.onChange(e);
    }

    const handleFocus = (e) => {
        setFieldEmptyError(null);
        props.onFocus && props.onFocus(e);
    }

    const handleBlur = (e) => {
        if (!props.onChange) return;

        const { value } = e.target;
        if (value.length === 0) setFieldEmptyError('Поле не может быть пустым')
        props.onBlur && props.onBlur(e);
    }

    const { label, fullwidth, marginHorizontal, marginVertical, error, className, placeholder, ...otherProps } = props;

    let classNameRoot = '';
    if (className) classNameRoot += ' ' + className;
    if (fullwidth) classNameRoot += ' fullwidth';
    if (marginHorizontal) classNameRoot += ' item-hor';
    if (marginVertical) classNameRoot += ' item-vert';

    const visibleError = error ? error : fieldEmptyError;
    const content = visibleError ? visibleError : label;
    return (
        <div className={classNameRoot}>
            <label error={visibleError} htmlFor={otherProps.id}>
                {t(content)}
            </label>

            <input
                {...otherProps}
                placeholder={t(placeholder)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                error={visibleError}
                aria-label={otherProps.placeholder}
                className='fullwidth' />
        </div>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    fullwidth: PropTypes.bool,
    marginHorizontal: PropTypes.bool,
    marginVertical: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

export default TextField
