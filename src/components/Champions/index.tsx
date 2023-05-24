import { useSkillContext } from '../Context/context';
import { Container } from './styles';

export function Champions() {
  const {skillImage} = useSkillContext();

  return (
    <Container>
      <img src={skillImage.championsImage} alt={skillImage.techName}/>
    </Container>
  );
}
