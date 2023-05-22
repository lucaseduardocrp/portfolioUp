import { Btn } from '../../components/Btn';
import { GithubIcon, InstagramIcon, LinkedinIcon, SocialMediaBox, WhatsappIcon } from '../../components/SocialMediaBox';
import { Main, HomeText, AboutSection } from './styles';

export function Home() {
  return (
    <Main>
      <section className="home" id="home">
        <div className='homeContainer'>
            <HomeText>
                <h1 data-aos="fade-down" data-aos-duration="700">Ajudando empresas, criando <br /> 
                <span>interfaces digitais</span> que conectam <br />
                seu negócio ao mundo.</h1>
                <p className="typewriter">A combinação de Design, Desenvolvimento Frontend e habilidade <br /> 
                profissional para impulsionar sua marca no mercado.</p>
                <p><span>"A mente que se abre a uma nova ideia, jamais voltará ao seu tamanho original."</span></p>  
            </HomeText>    
            
            <Btn href='#contact' text='Entre em contato' />
        </div>
              
        <div className="homeImage">
          <img src="/HomeIMGPortfolio.png" />
        </div>
      </section>

      <AboutSection data-aos="fade-down" data-aos-duration="1200">
          <div className="about-container">
            <div className="about-img">
                <img src="/about-img-formal.png" />
            </div>
            
            <div className="about-text">
              <h4><span>Olá</span>, eu sou</h4>
              <h2>Lucas Eduardo</h2>
              <h3><span>Frontend Developer e UI Designer</span></h3>
              <p>
                Tenho 20 anos atualmente cursando Análise e Desenvolvimento de Sistemas. Estou sempre buscando aprimorar meus conhecimentos na área de Front-end e UI Designer.
                Sempre fui apaixonado por tecnologia e hoje é um prazer trabalhar na área que eu tanto amo. Sou freelancer como Front-end developer, desenvolvendo interfaces modernas concentrada em performance, animações, responsividade e SEO.
              </p>

              <div className="socialMedia">
                <SocialMediaBox href=''><LinkedinIcon /></SocialMediaBox>
                <SocialMediaBox href=''><GithubIcon /></SocialMediaBox>
                <SocialMediaBox href=''><WhatsappIcon /></SocialMediaBox>
                <SocialMediaBox href=''><InstagramIcon /></SocialMediaBox>
              </div>
            </div>
          </div>
      </AboutSection>

    </Main>
  );
}
