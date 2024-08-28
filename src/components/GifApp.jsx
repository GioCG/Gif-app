

import { useGif } from "../hooks/useGif"
import { ContainerGif } from "./ContainerGif"
import { SearchGif } from "./SearchGif"

//functional component
export const GifApp = () => {
    const{gifs,handleGetGif} = useGif()
    
    return (
    //fragment
    <>
    { /*props: una propiedad que viaja entre componenetes*/}
        <SearchGif handleGetGif={handleGetGif}/>
        <ContainerGif gifs={gifs}/>     
          
        
    </>
    
  )
}
