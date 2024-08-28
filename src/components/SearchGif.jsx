import React, { useState } from 'react'

export const SearchGif = ({handleGetGif}) => {

    const [categori,setCategori] = useState('')

    return (   
        <>
            <div className='d-flex flex-row justify-content-center alig-items-center mt-3'>
                <form className='d-flex' onSubmit={(e)=>{handleGetGif(e,categori)}}>
                    <input type='text' placeholder="Buscar GIFs" className='form-control me-2'onChange={(e)=>{setCategori(e.target.value)}}/>
                    <input type='submit' value={'Buscar'} className='btn btn-outline-secondary' />
                </form>
            </div>
        </>
    )
}


