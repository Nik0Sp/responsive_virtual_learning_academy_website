import CV from "../../assets/cv.pdf"
import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Kontakt aufnehmen</a>
  </div>
  )
}

export default CTA
