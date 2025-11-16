'use client';

import { useAppContext } from './ClientProviders';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();
  
  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      Toggle Theme: {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
