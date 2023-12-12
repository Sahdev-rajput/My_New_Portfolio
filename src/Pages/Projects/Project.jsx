import React from 'react';
import {Col, Row } from 'antd';
import './Project.css';
import Stackoverflow from "./stackoverflow.jpeg"
import weather from "./weather.jpeg"
import dbank from "./dbank.jpeg"
import {GithubOutlined,LinkOutlined,ArrowRightOutlined} from "@ant-design/icons"


const App = () => {
   
    return(
  <div className='headline'>
    <h1 className='animate-charcter'>My Projects</h1>
    <Row gutter={[20, 50]}>
      <Col xs={24} sm={12} lg={8}>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Stackoverflow} alt="Avatar" style={{width:278,height:400,borderRadius:15}}/>
    </div>
    <div class="flip-card-back">
      <h1>Stack overflow Clone</h1>
      <p>The project aimed to replicate key features and functionalities of the original site while showcasing proficiency in
full-stack web development</p>
<a href='https://github.com/Sahdev-rajput/Stack_Overflow_Clone-Frontend-Backend-'><GithubOutlined style={{ fontSize: '35px',color:'black'}}/>
</a>
<a href='https://stack-overflow-frontend-sahdevrajput.onrender.com/'><LinkOutlined style={{ fontSize: '35px',marginLeft:35,color:'black'}}/>
</a>
    </div>
  </div>
</div>
      </Col>
      <Col xs={24} sm={12} lg={8}>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={weather} alt="Avatar" style={{width:278,height:400,borderRadius:15}}/>
    </div>
    <div class="flip-card-back">
      <h1>Weather Website</h1>
      <p>Developed a user-friendly weather website, ensuring real-time and accurate meteorological information for enhanced user experience</p>
      <a href='https://github.com/Sahdev-rajput/Sahdev_Rajput_Weather_Site'><GithubOutlined style={{ fontSize: '35px',color:'black'}}/>
</a>
<a href='https://r69l31.csb.app/'><LinkOutlined style={{ fontSize: '35px',marginLeft:35,color:'black'}}/>
</a>
    </div>
  </div>
</div>
      </Col>
      <Col xs={24} sm={12} lg={8}>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={dbank} alt="Avatar" style={{width:278,height:400,borderRadius:15}}/>
    </div>
    <div class="flip-card-back">
      <h1>DBank Project</h1>
      <p>Led the creation of DBank, a blockchain project developed with Motoko, facilitating seamless token transactions. Innovatively designed to empower users in buying and selling tokens securely, contributing to the evolution of decentralized finance (DeFi) ecosystems</p>
      <a href='https://github.com/Sahdev-rajput/Dbank-Project-Blockchain'><GithubOutlined style={{ fontSize: '35px',color:'black'}}/>
</a>
    </div>
  </div>
</div>
      </Col>
    </Row>
    <a href='https://github.com/Sahdev-rajput?tab=repositories' style={{color: "white",textDecoration:"none"}} className='more-projects'>Explore All Projects<ArrowRightOutlined /></a>
  </div>
);
    }

export default App;
