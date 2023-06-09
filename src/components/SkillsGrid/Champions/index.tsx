import { useSkillContext } from '../../Context/context';
import { Container } from './styles';

export function Champions() {
  const {skillImage} = useSkillContext();

  return (
    <Container data-aos="flip-left" data-aos-duration='700'>
        <img src={skillImage.championsImage} alt={skillImage.techName}/>
      <div className="content">
        <img className='techImageDescrip' src={skillImage.techImage} alt={skillImage.techName} />
        <h3>{skillImage.techName}</h3>
        <p>{skillImage.techDescription}</p>
      </div>
    </Container>
  );
}
