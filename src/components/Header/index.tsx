import { useEffect, useState } from 'react';
import { DarkIcon,  MobileMenu } from '../Icons';
import { HeaderContainer } from './styles';

export const Header = () => {
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
    <HeaderContainer>
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
          <li><a href="#contact" data-text="Contatos">Contatos</a></li>
          <li><DarkIcon /></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

