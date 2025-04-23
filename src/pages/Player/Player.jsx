import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const {id}= useParams();
  const navigate = useNavigate();

  const[apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  });


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE3Y2Q0OTdiYzA2YTBmMzk1MzQ1YWQ2YzFiZWVmOCIsIm5iZiI6MTc0NDk4ODk0Ny41NTUsInN1YiI6IjY4MDI2YjEzMmM4NWU3OTY2Mzk5YmRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7QNqO6-c092HnvsoUd07QjqM7_KYRtiVBo8i2bgsmuc'
    }
  };
  
  
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

    },[])



  return (
    <div className='Player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>

      <div>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Player
