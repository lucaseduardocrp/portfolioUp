import { ReactNode } from 'react';
import { Container } from './styles';

type ProjectsProps = {
  href: string;
  src: string;
  alt: string;
  children: ReactNode;
  title: string;
};
 
export function Projects({href, src, alt, children, title}: ProjectsProps) {
  return (
    <Container>
      <div className="p-img">
        <a href={href}>
          <img src={src} alt={alt} />
        </a>
      </div>
      <div className="details">
        <p>{title}</p>
        {children}
      </div>
    </Container>
  );
}

