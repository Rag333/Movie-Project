import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import {motion} from 'motion/react';
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt=""  className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>
            Discovering his ties to a secret ancient order, a young man living in mordern istanbul embarks on a quest to save the city from the immortal enemy.
          </p>
          <div className='hero-btns'>
            <motion.button className='btn' 
            whileHover={{backgroundColor:'#ffffffbf'}}
            ><img src={play_icon} alt='' /> play</motion.button>
            <motion.button className='btn dark-btn'
            whileHover={{backgroundColor:'#6d6d6e66'}}
            ><img src={info_icon} /> More Info</motion.button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className='more-cards'>
        <TitleCards title={"Blockbuster Movies"}  category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"upcoming"}/>
        <TitleCards title={"Upcoming"} category={"now_playing"}/>
        <TitleCards title={"Top Picks For you "} category={"top_rated"}/>
      </div>
      <Footer/>
    </div> 
   
  )
}

export default Home
