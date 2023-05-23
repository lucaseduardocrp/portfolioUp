import { Champions } from '../Champions';
import { Skills } from '../Skills';
import { Container } from './styles';

export function SkillsGrid() {
  return (
    <Container>
       <div className="leftContent">
          <h3>as tecnologias mais utilizadas no mercado de desenvolvimento web para impulsionar <br /> o desempenho, SEO e a usabilidade dos seus sites</h3>
         
          <div className="techGrid">
            <Skills name='HTML' src='/html.svg' />
            <Skills name='CSS' src='/css.svg' />
            <Skills name='JAVASCRIPT' src='/javascript.svg' />
            <Skills name='TYPESCRIPT' src='/typescript.svg' />
            <Skills name='REACT' src='/react.svg' />
            <Skills name='VITE' src='/vitejs.svg' />
            <Skills name='GIT' src='/git.svg' />
            <Skills name='SASS' src='/sass.svg' />
            <Skills name='BOOTSTRAP' src='/bootstrap.svg' />
            <Skills name='TAILWIND' src='/tailwindcss.svg' />
            <Skills name='CSS-IN-JS' src='/styled-components.svg' />
            <Skills name='FIGMA' src='/figma.svg' />
          </div>
        </div>
        <Champions />  
    </Container>
  );
}
