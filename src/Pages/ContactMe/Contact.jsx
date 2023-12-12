import React from 'react'
import "./Contact.css"
import {GithubFilled,LinkedinFilled,InstagramFilled,MailFilled} from "@ant-design/icons"

const Contact = () => {
  return (
    <div className='contact-body'>
    <h2 className='headline'>
    <a href='https://github.com/Sahdev-rajput'><GithubFilled className='github'/></a>
    <a href='https://www.linkedin.com/in/sahdev-rajput-a22838253/'><LinkedinFilled className='linkedin'/></a>
    <a href='https://www.instagram.com/sahdev_rajput_1095/'><InstagramFilled className='instagram'/></a>
    <a href='mailto:sahdev_2021bcse016@nitsri.ac.in'><MailFilled className="mail"/></a>
    </h2>
    </div>
  )
}

export default Contact