import { useEffect, useState } from 'react';
import { HeaderContainer } from './styles';
import { ThemeName } from '../../styles/themes';
import { CloseMobileMenu, DarkIcon, MobileMenu } from '../Icons';
import { LightIcon } from '../Icons';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export const Header = ({themeName, setThemeName}: Props) => {
  //ToggleTheme
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
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
    <HeaderContainer id='header' data-aos="fade-left" data-aos-duration="700">
      <nav>
        <a href="#home"><img src="/LogoName.svg" alt="Logo" /></a>

        <div className="burgerMenu" onClick={toggleMode}>
          {active ? <CloseMobileMenu /> : <MobileMenu />}
        </div>


        <ul className={active ? 'navlinks Open' : 'navlinks Close'}>
          <li><a href="#home" data-text="Início">Início</a></li>
          <li><a href="#about" data-text="Sobre">Sobre</a></li>
          <li><a href="#skills" data-text="Skills">Skills</a></li>
          <li><a href="#service" data-text="Serviços">Serviços</a></li>
          <li><a href="#projects" data-text="Projetos">Projetos</a></li>
          <li onClick={toggleTheme}>{darkMode ? <DarkIcon /> : <LightIcon />}</li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

