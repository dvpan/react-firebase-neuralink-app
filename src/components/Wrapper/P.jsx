import React from 'react';
import { Trans } from 'react-i18next';

const P = (props) => {
    const { children, ...otherProps } = props;
    return <p {...otherProps}> <Trans>{children}</Trans></p>;
}

export default P;