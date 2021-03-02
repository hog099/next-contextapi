import React from 'react';
import Cookies from 'js-cookie';

interface ThemeContextData {
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
}

export const ThemeContext = React.createContext({} as ThemeContextData)

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(rest.theme ?? 'light-mode')
  const [checked, setChecked] = React.useState(rest.checked ?? true);

  React.useEffect(() => {
    Cookies.set('theme', String(theme))
    Cookies.set('checked', String(checked))

  }, [theme, checked])

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode')
    setChecked(!checked)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
      {children}
    </ThemeContext.Provider>
  )
}