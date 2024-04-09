import { useState, useEffect } from 'react';

export const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Covers 'sm' and 'md' sizes
        };

        checkScreenSize(); // Check on initial render
        window.addEventListener('resize', checkScreenSize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isSmallScreen;
};
