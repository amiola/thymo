import React from 'react'
import Nav from '../../navbar/Nav'
import { useLocation } from 'react-router-dom'

const Exercise = () => {
    const location = useLocation()

    const videoID = location.state.link.split('=')[1].split('&')[0]
    const youtubeLink = 'https://www.youtube.com/embed/'+ videoID

  return (
    <>
    <Nav/>
    <section className="exercise-container">
      <div className="head-img">
        <h1>Exercise: {location.state.name}</h1>
        </div>
        <div className="top">
        <div className="prim-sec">
        <div className="primary">
          <h3>Primary muscles:</h3> 
              {location.state.primary.map((muscle,i)=>(
                <p key={i}>{muscle}</p>
              ))}</div>
              <div className="secondary">
                <h3>Secondary muscles:</h3> 
              {location.state.secondary.map((muscle,i)=>(
                <p key={i}>{muscle}</p>
              ))}</div>
        </div>
        <div className="btns">
          <button className="btn add-btn">Add to My Routine</button>
        </div>
        </div>
        <div className="youtube-video">
        <iframe
        // width="600" height="300"
              src={youtubeLink}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
              </div>
    </section>
    </>
  )
}

export default Exercise