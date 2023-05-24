import { createContext, useContext } from "react";
import { ImagesArray } from "../../modules/ImagesArray";

interface ContextValue {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  skillImage: typeof ImagesArray[number];
}

export const context = createContext<ContextValue>({} as ContextValue);

export const useSkillContext = () => useContext(context)