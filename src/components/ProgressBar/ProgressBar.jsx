import React from 'react'
import PropTypes from 'prop-types';

import './ProgressBar.css'

const ProgressBar = (props) => {
    const interpolateColor = (color1, color2, factor) => {
        const result = color1.slice();
        for (var i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return 'rgb(' + result + ')';
    };

    let { progress } = props;
    if (props.reverse) progress = 1 - progress;

    return (

        <div className='pb-container'>
            {
                props.title &&
                <div className='pb-title'>
                    <span>{props.title}</span>
                    {
                        progress && <span>{`${Math.floor(progress * 100)}%`}</span>
                    }
                </div>
            }

            <div className='pb-background'>
                <div className='pb-bar' style={{ 'background': `${interpolateColor([36, 154, 243], [243, 58, 58], props.progress)}`, 'width': `${progress * 100}%` }} />
            </div>
        </div>
    )
}
ProgressBar.propTypes = {
    progress: PropTypes.number,
    reverse: PropTypes.bool
}

export default ProgressBar;