import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="text-2xl" onClick={toggleTheme}>
      {theme === 'light' ? ' ☀️' : ' 🌙 '}
    </button>
  );
}

export default ThemeToggleButton;