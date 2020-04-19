import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';

export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage([key], initialValues);
}

export default useDarkMode;