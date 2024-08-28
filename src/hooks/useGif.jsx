import { useState } from 'react'
import { reqGif } from '../services/gifs'

export const useGif = () =>{
    const [gifs,setGifs] = useState([])

    const handleGetGif = (e, categori) =>{
        //evita la recarga completa del navegador
        e.preventDefault()

        reqGif(categori).then((gifs) => {
            setGifs(gifs)
        })
    }

    return{
        gifs,
        handleGetGif
    }
}

