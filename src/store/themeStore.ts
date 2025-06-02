// store/useThemeStore.ts
import { create } from 'zustand';
import { useEffect } from 'react';

type ThemeState = {
    darkMode: boolean;
    toggleDarkMode: () => void;
    setDarkMode: (darkMode: boolean) => void;
};

const useThemeStore = create<ThemeState>((set) => ({
    darkMode: false,
    toggleDarkMode: () =>
        set((state) => {
            const newDarkMode = !state.darkMode;
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            return { darkMode: newDarkMode };
        }),
    setDarkMode: (darkMode: boolean) => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        return set({ darkMode });
    },
}));

// This hook will be used in the root component to sync the theme with localStorage
export const useHydrateTheme = () => {
    const { setDarkMode } = useThemeStore();

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme !== null) {
            setDarkMode(JSON.parse(savedTheme));
        } else {
            setDarkMode(prefersDark);
        }

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [setDarkMode]);
};

export default useThemeStore;

