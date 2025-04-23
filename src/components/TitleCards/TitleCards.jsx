import React, { useEffect, useState , useRef} from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
import Player from '../../pages/Player/Player'



const TitleCards = ({title,category}) => {
  
  const[apiData , setApiData] = useState([])
  const cardsRef= useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE3Y2Q0OTdiYzA2YTBmMzk1MzQ1YWQ2YzFiZWVmOCIsIm5iZiI6MTc0NDk4ODk0Ny41NTUsInN1YiI6IjY4MDI2YjEzMmM4NWU3OTY2Mzk5YmRmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7QNqO6-c092HnvsoUd07QjqM7_KYRtiVBo8i2bgsmuc'
    }
  };
  


  useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  },[])

  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef} >
        {
          apiData.map((card,index)=>{
            return<div ><Link to={`Player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
              </Link ></div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
