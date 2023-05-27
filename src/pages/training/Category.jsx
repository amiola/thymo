import React, { useContext } from 'react'
import Context from '../../context/Context'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../../navbar/Nav'
import {BackImage} from '../../components/BackImage'

const Category = () => {
    const navigation = useNavigate()
    const {yogaData}=useContext(Context)
    const catId = useParams().id
    const index = Number(catId-1)
    const category = yogaData[index]
    const randomNumber = Math.floor(Math.random()*4) + 3
    const randomImage = `/img/yoga${randomNumber}.jpg`

    const goToPose = (p)=>{
      navigation(`/pose/${p.id}`,{
        state:{
          id: p.id,
          englishName: p.english_name,
          sanskritName: p.sanskrit_name,
          translationName: p.translation_name,
          poseDescription: p.pose_description,
          poseBenefits: p.pose_benefits,
          urlSvg: p.url_svg
        }
      })
    }

  return (
    <>
    <Nav/>
    <section className="category">
        <BackImage img={randomImage} width='100%' height='35%'>
        <h1>{category.category_name}</h1>
        </BackImage>
        <p>{category.category_description}</p>
        <h2>Select a pose:</h2>
        <div className="poses-box">
          {category.poses.map((pose,i)=>(
            <div className="pose-box" key={i}
            onClick={()=>goToPose(pose)}
            >
              <div className="titles">
              <h3>{pose.english_name}</h3>
              <h4>{pose.sanskrit_name}</h4>
              </div>
              <img src={pose.url_png} alt={`${pose.english_name} image`} />
            </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default Category