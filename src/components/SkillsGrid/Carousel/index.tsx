import { ImagesArray } from "../../../modules/ImagesArray"
import { styled } from "styled-components";
import { flexCSS } from "../../../styles/GlobalStyles";
import { motion } from "framer-motion";
import {useState, useEffect, useRef} from "react";

const CarouselImages = styled.div`
  width: 100%;
  padding: 2rem;
  ${flexCSS}
  gap: 3rem;
  border-top: 2px solid var(--grey);
  border-bottom: 2px solid var(--grey);
  margin-bottom: 2rem;
  cursor: grab;

  img{
    width: 5rem;
    height: 5rem;
  }
`;

export function Carousel() {
  const carouselSlide = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carouselSlide.current?.scrollWidth, carouselSlide.current?.offsetWidth);
    setWidth(carouselSlide.current?.scrollWidth - carouselSlide.current?.offsetWidth);
  }, [])

  return (
    <motion.div 
      drag='x'
      dragConstraints={{right: 0, left: -width}}
    >
      <CarouselImages ref={carouselSlide}>
        {ImagesArray.map((images, id) => <img src={images.techImage} alt="Carousel" key={id} />)}
      </CarouselImages>
    </motion.div>
  );
}
