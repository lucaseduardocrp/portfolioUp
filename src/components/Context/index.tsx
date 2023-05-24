import { ReactNode, useState } from "react"
import { context } from "./context";
import { ImagesArray } from "../../modules/ImagesArray";

interface Children {
  children: ReactNode;
}

export function ContextProvider({children}: Children){
  const [index, setIndex] = useState(0);
  const skillImage = ImagesArray[index]

  return(
    <context.Provider value={{index, setIndex, skillImage}}>
      {children}
    </context.Provider>
  )
}
