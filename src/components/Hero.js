import React from 'react'
import HeroButton from './HeroButton'

const Hero = () => {
  return (
    <div
      id="hero"
      className="Hero"
      style={{
        backgroundImage:
          'url(http://www.returndates.com/backgrounds/handmaidstale.jpg)'
      }}
    >
      <div className="content">
        <img
          className="logo"
          src="http://www.returndates.com/backgrounds/handmaidstale.logo.png"
          alt="HandMaids Tale"
        />
        <h2>Season 3 is Now Available</h2>
        <p>
          Set in a dystopian future, a woman is forced to live as a concubine
          under a fundamentalist theocratic dictatorship.
        </p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Watch Now" />
          <HeroButton primary={false} text="+ My List" />
        </div>
      </div>
    </div>
  )
}

export default Hero
