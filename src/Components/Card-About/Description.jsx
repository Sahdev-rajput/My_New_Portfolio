import React from 'react';
import { Descriptions,ConfigProvider} from 'antd';
const items = [
  {
    key: '1',
    label: 'Full Name',
    children: 'Sahdev Rajput',
  },
  {
    key: '2',
    label: 'Age/Gender',
    children: '20/M',
  },
  {
    key: '3',
    label: 'College Name',
    children: 'NIT Srinagar',
  },
  {
    key: '4',
    label: 'Current Program',
    children: 'Bachelor of Technology, B.Tech (CSE) - (2021-2025)',
  },
  {
    key: '5',
    label: 'Current Address',
    children: 'C-Block Hostel, NIT Srinagar, Hazratbal, Jammu & Kashmir, 190006',
  },
];
const App = () => <ConfigProvider
theme={{
  components: {
    Descriptions: {
      titleColor:"white",
      extraColor:"yellow"
    },
  },
  token:{
    fontSize:30,
    fontFamily:"sans-serif",
  },
}}
>
<Descriptions bordered={true} title="ABOUT ME" column={{sm:1,md:1,lg:1,xl:1,xxl:1}} size='middle' labelStyle={{color: 'yellow',fontSize:'20px'}} contentStyle={{color:'white',fontSize:'20px'}} items={items} /></ConfigProvider>;
export default App;