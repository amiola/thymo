import React from 'react'
import Nav from '../../navbar/Nav'
import { useLocation } from 'react-router-dom'
import { BackImage } from '../../components/BackImage'

const Pose = () => {
    const location = useLocation()
    const randomNumber = Math.floor(Math.random()*5) + 7
    const randomImage = `/img/yoga${randomNumber}.webp`
  return (
    <>
    <Nav/>
    <section className="pose">
        <div className="content">
        <h1>{location.state.englishName}</h1>
        <h2>Sanskrit name: <strong>{location.state.sanskritName}</strong></h2>
        <h3>Translation: <span>{location.state.translationName}</span></h3>
        <h4>How to do it</h4>
        <p>{location.state.poseDescription}</p>
        <div className="ben-img">
        <div className="benefits">
        <h4>Benefits</h4>
        <p>{location.state.poseBenefits}</p>
        </div>
        <div className="img-container">
        <img src={location.state.urlSvg} alt={`${location.state.englishName} image`} />
        </div>
        </div>
        </div>
        <BackImage img={randomImage} width='30%' height='100%' className='back-img'></BackImage>
    </section>
    </>
  )
}

export default Pose