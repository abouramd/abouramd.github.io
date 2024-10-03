import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';



export default function Navbar(): JSX.Element {

  const [toggleMode, setToggleMode] = useState('');
  const { pathname } = useLocation();

  const ChangeMode = (): void => {
    if (toggleMode === 'dark') {
      setToggleMode('');
      localStorage.setItem('color-theme', 'light');
    } else {
      setToggleMode('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  };

  useEffect((): void => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setToggleMode('dark');
    } else {
      setToggleMode('');
    }
  }, []);


  useEffect(() => {
    document.documentElement.className = toggleMode;
  }, [toggleMode]);

  return (
    <nav >
      <ul>
        {
          [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Contact', path: '/contact' }].map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={item.path === pathname ? 'active' : ''} >{item.name}</Link>
            </li>
          ))
        }
      </ul>
      <div onClick={ChangeMode} className="change-mode">
        <FiMoon className={toggleMode ? "hidden" : ""} />
        <FiSun className={toggleMode ? "" : "hidden"} />
      </div >
    </nav >
  );
}
