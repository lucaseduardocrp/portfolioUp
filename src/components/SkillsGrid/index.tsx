import { Champions } from './Champions';
import { Skills } from './Skills';
import { Container } from './styles';
import { ImagesArray } from '../../modules/ImagesArray';
import { useSkillContext } from '../Context/context';

export function SkillsGrid() {
  const {setIndex} = useSkillContext(); 

  const toggleHandle = (index: number) => {
    setIndex(index)
  }

  return (
    <Container>
      <div className="leftContent">
        <h3>as tecnologias mais utilizadas no mercado de desenvolvimento web para impulsionar <br /> o desempenho, SEO e a usabilidade dos seus sites</h3>
      
        <div className="techGrid">
          {ImagesArray.map((images, index) => 
            <Skills 
              name={images.techName} 
              src={images.techImage} 
              alt={images.techName} 
              key={index} 
              onClick={() => {toggleHandle(index)}} 
            />)}
        </div>
      </div>
      
      <Champions />
    </Container>
  );
}
