import React from 'react';
import Sahdev from "./Sahdev.jpg"
import Description from './Description.jsx';
import { Button, Card, Flex, Typography } from 'antd';




const CardAbout = ({theme}) => {
  const isSmallScreen = window.innerWidth < 576;
  const cardStyle = {
    width: "75%",
    margin: "auto",
    marginTop: "200px",
    backgroundColor:!theme?"#000000":"#36454F",
  };
  const imgStyle = {
    display: 'block',
    width: 273,
    padding:"5%",
  };
return(
  <Card
    style={cardStyle}
    bodyStyle={{
      padding: 0,
      overflow: 'hidden',
    }}
  >
  {
    isSmallScreen?
    <Flex direction="row" align='center' justify='center'>
     <Description classname="describe"/>
     </Flex>
     :
     <Flex direction="row" align='center' justify='center'>
    <img
        alt="avatar"
        src={Sahdev}
        style={imgStyle}
      />
     <Description/>
     </Flex>
  }
  </Card>
);
  };
export default CardAbout;