import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Link = (props) => {
    const { children, ...otherProps } = props;
    const { t } = useTranslation();
    return (
        <ReactRouterDomLink {...otherProps}>
            {t(children)}
        </ReactRouterDomLink>
    )
}

export default Link;