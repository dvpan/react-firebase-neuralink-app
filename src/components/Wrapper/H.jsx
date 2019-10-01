import React from 'react';
import { Trans } from 'react-i18next';

const H = (props) => {
    const { level, children, ...otherProps } = props;
    switch (level) {
        case 2: return <h2 {...otherProps}> <Trans>{children}</Trans></h2>;
        case 3: return <h3 {...otherProps}> <Trans>{children}</Trans></h3>;
        case 4: return <h4 {...otherProps}> <Trans>{children}</Trans></h4>;
        case 5: return <h5 {...otherProps}> <Trans>{children}</Trans></h5>;
        case 6: return <h6 {...otherProps}> <Trans>{children}</Trans></h6>;

        default: return <h1 {...otherProps}> <Trans>{children}</Trans></h1>;
    }
}

export default H;