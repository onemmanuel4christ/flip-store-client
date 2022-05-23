import React from 'react'
import Carousel from 'react-grid-carousel'
import './Banner.css'
import {Fade, Rotate, Flip } from 'react-reveal';

const Banner = () => {
  return (
    <div className='banner'>
      <Fade top>
        <div className='banner__left'>
          <Carousel 
              cols={1} 
              rows={1} 
              gap={10} 
              loop
              autoplay={1000}
              showDots={true}
              dotColorActive="red"
          >
        <Carousel.Item>
        <img src="./images/ad1.jpg"  alt="" className='banner__image'/>
        </Carousel.Item>

        <Carousel.Item>
        <img src="./images/season.webp"  alt="" className='banner__image' />
        </Carousel.Item>

        <Carousel.Item>
        <img src="./images/banner.jpg" alt="" className='banner__image' />
        </Carousel.Item>

        <Carousel.Item>
        <img src="./images/season.webp"  alt="" className='banner__image' />
        </Carousel.Item>
      </Carousel>
        </div>

      </Fade>
        <div className='banner__right'>
        <Rotate bottom left>
              <div className='banner__topRight'>
                  <img src='./images/season.webp' alt='' className='bannerTopRight__image'/>
              </div>
        </Rotate>
        <Flip top>
              <div className='banner__bottomRight'>
                  <div className='banner__bottomRightLeft'>
                    <img src='./images/ad6.jpg' alt='' className='bannerRight__image' />
                  </div>
                  <div className='banner__bottomRightRight'>
                    <img src='./images/ad5.jpg' alt='' className='bannerRight__image' />
                  </div>
              </div>
        </Flip>
        </div>
    </div>
  )
}

export default Banner