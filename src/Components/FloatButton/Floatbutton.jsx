import { PhoneTwoTone, QuestionOutlined,BulbTwoTone,FilePdfTwoTone,MessageTwoTone} from '@ant-design/icons';
import React, { useState } from 'react';
import { FloatButton } from 'antd';
import "./FloatButton.css"
import jsPDF from "jspdf"

const Floatingbutton = ({theme,setTheme,setOption}) => {
  const [text,setText]=useState("Light Theme");
  const phoneNumber = '7078875459'; 

  const initiatePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  const downloadPdf=()=>{
    const pdf=new jsPDF();
    pdf.save('Sahdev Rajput.pdf')
  }

   const handleTheme=()=>{
    setTheme(!theme);
    if(!theme){
      setText("Dark Theme");
      setOption(prevConfig => ({
        ...prevConfig,
        background: {
          ...prevConfig.background,
          color: {
            ...prevConfig.background.color,
            value: "#36454F" // Change this to the desired color value
          }
        }
      }));
    }
    else
    {
      setText("Light Theme");
      setOption(prevConfig => ({
        ...prevConfig,
        background: {
          ...prevConfig.background,
          color: {
            ...prevConfig.background.color,
            value: "#000" // Change this to the desired color value
          }
        }
      }));
    }
   }

  return (
  <>
  <div className='Floating-button'>
    <FloatButton.Group
      trigger="click"
      type="primary" 
      style={{
        right: 60
      }}
      icon={<QuestionOutlined />}
    >
      <FloatButton
       tooltip={<div>Resume</div>}
       icon={<FilePdfTwoTone />}
       onClick={downloadPdf}
       />
      <FloatButton 
      tooltip={<div>{text}</div>}
      icon={<BulbTwoTone />}
      onClick={handleTheme}
      />
      <FloatButton
      tooltip={<div>Call Me</div>}
      onClick={initiatePhoneCall} 
      icon={<PhoneTwoTone/>}
      />
      {/* <FloatButton 
      icon={<CommentOutlined />}
      /> */}
    </FloatButton.Group>
    </div>
  </>
  )
    }
export default Floatingbutton;