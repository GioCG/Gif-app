import { useState } from "react"

export const useGif = () =>{
    const [gif,setGif] = useState('')

    const reqGif = async() =>{
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=Ox6apmQK51nlSuc2gMLL7kX87oeRd24P').then(async(resp) =>{
            await resp.json().then(({data}) =>{
                setGif(data.images.original.url)
            })
        }).catch(console.error)
    }

    const handleGetGif = () =>{
        reqGif()
    }

    return{
        gif,
        handleGetGif
    }
}
