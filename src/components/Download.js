import React from 'react';
import '../styling/herosection.css'

const Download = () => {
  return (
    <section className='button_section'>
      <a href="images/shivam_puri_resume.pdf" download>
        <button className='download_button' >Download Resume
          <img src="images/download.png" height={"20px"} alt="" />
        </button>
      </a>
    </section>
  )
}

export default Download
