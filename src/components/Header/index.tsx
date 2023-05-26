import { useEffect, useState } from 'react';
import { DarkIcon, HeaderContainer } from './styles';
import { ThemeName } from '../../styles/themes';
import { MobileMenu } from '../Icons';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export const Header = ({themeName, setThemeName}: Props) => {
  //ToggleTheme
  const [darkMode, setDarkMode] = useState(false)
  function toggleTheme(){
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    setDarkMode(!darkMode)
  }

  
  //BurgerMenu Open and Close
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active)
  }
  
  // Burger Close with Scroll
  useEffect(() => {
    const handleScroll = () => {
      setMode(false);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer id='header'>
      <nav>
        <a href="#home"><img src="/LogoName.svg" alt="Logo" /></a>

        <div className="burgerMenu" onClick={toggleMode}>
          <MobileMenu />
        </div>


        <ul className={active ? 'navlinks Open' : 'navlinks Close'}>
          <li><a href="#home" data-text="Início">Início</a></li>
          <li><a href="#about" data-text="Sobre">Sobre</a></li>
          <li><a href="#skills" data-text="Skills">Skills</a></li>
          <li><a href="#service" data-text="Serviços">Serviços</a></li>
          <li><a href="#projects" data-text="Projetos">Projetos</a></li>
          <li onClick={toggleTheme} className={darkMode ? 'darkIcon' : 'lighIcon'}><DarkIcon /></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

