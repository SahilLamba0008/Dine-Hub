import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='container'>
        <div className='max-width  nav'>
            <div className='nav-left'>
                <img src="images/logo-2-temp.png" alt="logo" className='nav-logo'/>
            </div>
            <div className='nav-right'>
                <div className='nav-list'>
                    <p>Home</p>
                </div>
                <div className='nav-list'>
                    <p>Food</p>
                </div>
                <div className='nav-list'>
                    <p>Restaurants</p>
                </div>
                <div className='nav-list'>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
        <div className='max-width content'>
            <div className='content-left'>
                <div className='heading'>
                    DineHub : Restaurant Discovery and Ordering App
                </div>
                <div className='heading-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum deleniti voluptatem excepturi corrupti, ducimus odit illo! Quisquam voluptates voluptatibus architecto voluptatem, veniam ipsa excepturi quo sit repellat ipsam illum numquam molestiae, aperiam autem asperiores distinctio commodi recusandae laborum esse atque suscipit aspernatur aliquam obcaecati. Quia vero libero rerum commodi.
                </div>
            </div>
            <div className='content-right'>
                <img src="images/hero-right.png" alt="threedee characters image" className='content-image'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;