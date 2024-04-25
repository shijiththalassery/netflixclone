//import React from 'react'
import './RowPost.css'
import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { imageUrl ,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost( props) {
  const [movies, setMovies] = useState([])
  const [urlId, seturlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      alert('Network Error')
    })
  }, [])

  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie = (id)=>{
      console.log(id,'this is movie id')
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        console.log(response.data,'youtuve shijti')
        if(response.data.results.length !==0 ){
          seturlId(response.data.results[0])
        }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title} </h2>
      <div className="posters">
      {movies.map((obj)=>
        <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

      )}

      </div>
      {
       urlId && <Youtube opts={opts} videoId={urlId.key}/> 
      }
    </div>
  )
}

export default RowPost
