import React from 'react';
import { useTranslation } from 'react-i18next';

const H = (props) => {
    const { level, children, ...otherProps } = props;
    const { t } = useTranslation();
    switch (level) {
        case 2: return <h2 {...otherProps}> {t(children)}</h2>;
        case 3: return <h3 {...otherProps}> {t(children)}</h3>;
        case 4: return <h4 {...otherProps}> {t(children)}</h4>;
        case 5: return <h5 {...otherProps}> {t(children)}</h5>;
        case 6: return <h6 {...otherProps}> {t(children)}</h6>;

        default: return <h1 {...otherProps}> {t(children)}</h1>;
    }
}

export default H;