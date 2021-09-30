import React, {useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel';
import { useParams } from 'react-router';
import Layout from "../../Containers/Layout/Layout";
import Triangle from "../../Components/Triangle/Triangle";


import openLink from '../../assets/img/UI/openLink.svg'
import getId from '../../utils/getId'
import projects from '../../utils/getProjects'

import classes from './Project.module.css'

export const DEFAULT_NAVIGATION_PROJECT = [
  {
      name: "Portfolio",
      link: "/#Portfolio",
      active: true
  }
]


export default function Project() {
  const {id} = useParams()
  const {images, name, link, mainPar, techStackPar, achievements} = projects[parseInt(id)-1]

  useEffect(() => {
    let isActive = true;
    if (isActive) document.body.scrollTop = document.documentElement.scrollTop = 0;
    return () => {
      isActive = false;
    }
  }, [])
  return (
    <Layout static defaultNavigation={DEFAULT_NAVIGATION_PROJECT}>
      <div className={classes.index}>
        <a name="#top"/>
        <div className={classes.Wrapper}>
          <div className={classes.Carousel}>
            <AliceCarousel autoPlay disableAutoPlayOnAction infinite autoPlayInterval="5000">
              {images.map((src, i) => <img src={src} className={classes.sliderimg} alt={`website screenshot ${i}`} key={getId(`${name}-img`)}/>)}
            </AliceCarousel>
          </div>
          <div className={classes.Story}>
            <div className={classes.StoryMain}>
              <div className={classes.Heading}><h1>{name}</h1><a href={link} rel="noopener noreferrer" target="_blank"><img src={openLink} alt="see project"/></a></div>
              <p>{mainPar}</p>
            </div>
            <div>
              <h2>Tech Stack</h2>             
              <p>{techStackPar}</p>          
            </div>
            <div className={classes.LastSection}>
              <h2>Achievements</h2>             
              <ul>
                {achievements.map(a => <li>{a}</li>)}
              </ul>         
            </div>
          </div>
        </div>
      </div>
      <Triangle reverse/>               
    </Layout>
  )
}
