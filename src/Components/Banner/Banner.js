import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react';
import './Banner.css'
import { cleanup } from '@testing-library/react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'


function Banner() {
    function getRandomSingleDigit() {
        return Math.floor(Math.random() * 10);
    }

    const randomSingleDigit = getRandomSingleDigit();
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response) => {
            console.log(Response.data)
            setMovie(Response.data.results[randomSingleDigit])
        })
    }, [])
    return (

        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
