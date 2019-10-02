import React from 'react';
import { useTranslation } from 'react-i18next';

const P = (props) => {
    const { children, ...otherProps } = props;
    const { t } = useTranslation();
    return <p {...otherProps}>{t(children)}/</p>;
}

export default P;