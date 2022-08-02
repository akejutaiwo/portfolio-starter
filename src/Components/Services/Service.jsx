import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext  } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Service = () => {
    const transition = {duration: 1, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>

        {/* left side */}
        <div className="awesome">
        <span
        style={{ color: darkMode? 'white': ''}}
        >My Awesome</span>
        <span>services</span>
        <span>
            Lorem ispum is simpley dummy text of printing of printing lorem 
            <br/>
            ispum is simpley dummy text of printing 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
            <motion.div 
            initial={{left: '25%'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            
            style={{left: '14rem'}} >
                <Card 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Sketch, Photoshop"}

                />
            </motion.div>
            {/* second card */}
            <div style={{top:'12rem', left: '-4rem'}}>
                <Card 
                    emoji={Glasses}
                    heading={'Developer'}
                    detail={"Html, Css, Javascript, React"}

                />
            </div>
            {/* third card */}
            <div style={{top: '19rem', left: '12rem'}} >
                <Card 
                    emoji={Humble}
                    heading={'UI/UX'}
                    detail={"lorem ipsum dummy text are usually use in section "}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}} ></div>

        </div>
    </div>
  )
}

export default Service