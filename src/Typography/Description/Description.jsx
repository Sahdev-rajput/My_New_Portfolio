import React from 'react'
import { Typography } from 'antd';
import "./Description.css"
import { Button, Flex } from 'antd';
import jsPDF from "jspdf"

const { Title } = Typography;
const Description = () => {
  const downloadPdf=()=>{
    const pdf=new jsPDF();
    pdf.save("Sahdev.pdf")
  }
  return (
    <>
     <div className="sparkling-text-container">
      <Title level={4} style={{color:"white",width:"500px",margin:"auto",marginTop:"30px"}}>
    I am Sahdev Rajput, a Full Stack Web Developer, Competitive Programmer, and Blockchain Developer. With expertise spanning both front-end and back-end technologies, I specialize in crafting seamless user experiences using React, Express.js, Node.js, and MongoDB. Actively engaging in competitive programming, I continually refine my algorithmic skills and stay abreast of industry trends. My foray into blockchain development involves exploring decentralized applications (DApps) and smart contract development.
    </Title>
    <Flex wrap="wrap" gap="small" align='middle' justify='center' style={{marginTop:20}}>
    <Button type="primary" danger size='large' shape="round">
      <a href='mailto:sahdev_2021bcse016@nitsri.ac.in'>Hire Me</a>
    </Button>
    <Button danger default size='large' style={{marginLeft:20}}  onClick={downloadPdf} shape="round"> 
      Resume
    </Button>
    </Flex>
    </div>
    </>
  )
}

export default Description