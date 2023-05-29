import { ImagesArray } from "../../../modules/ImagesArray"
import { styled } from "styled-components";
import { flexCSS } from "../../../styles/GlobalStyles";
import { motion } from "framer-motion";
import {useState, useEffect, useRef} from "react";
import { useSkillContext } from "../../Context/context";

const CarouselImages = styled.div`
  .carouselImages{
    width: 100%;
    ${flexCSS}
    gap: 6rem;
  
    img{
      width: 5rem;
      height: 5rem;
    }
  }
`;

export function Carousel() {
  const {setIndex} = useSkillContext(); 

  const toggleHandle = (index: number) => {
    setIndex(index)
  }

  const carouselSlide = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carouselSlide.current?.scrollWidth, carouselSlide.current?.offsetWidth);
    setWidth(1260 - 260);
  }, [])

  return (
    <CarouselImages>
      <motion.div ref={carouselSlide}>
        <motion.div 
          className="carouselImages"
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          initial={{ x: 100}}
          animate={{ x: 0}}
          transition={{ duration: 0.8}}
        >
          {ImagesArray.map((images, index) => 
            <img 
              src={images.techImage} 
              alt="Carousel" 
              onClick={() => {toggleHandle(index)}} key={index} 
            />)}
        </motion.div>
      </motion.div>
    </CarouselImages>
  );
}
