import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import "./Typography.css"

const TypingAnimation = () => {
  return (
    <div><TypeAnimation
    sequence={[
      "I'm a Full Stack Web Developer...",
      1000,
      "I'm a Video Editor...",
      1000,
      "I'm a BlockChain Developer...",
      1000,
      "I'm a Competitive Programmer...",
      1000,
      "I'm a MERN Stack Developer...",
      1000,
      "I'm a QT Developer...",
      1000
    ]}
    speed={50}
    repeat={Infinity}
    className='typing-animation'
    style={{ fontSize: '3em', }}
  /></div>
  )
}

export default TypingAnimation