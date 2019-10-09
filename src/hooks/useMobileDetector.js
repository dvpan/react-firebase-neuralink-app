import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export function useMobileDetector(maxWidth, delay = 200) {
    const [mobile, setMobile] = useState(window.innerWidth < maxWidth);

    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth < maxWidth);
        const _throttle = throttle(handleResize, delay);

        window.addEventListener('resize', _throttle);
        return () => {
            window.removeEventListener('resize', _throttle);
        }
    });

    return {
        mobile,
    };
}