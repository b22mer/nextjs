import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
   <MeetupDetail image={"https://images.chosun.com/resizer/qGPz5be29MOF1LMl6rTxRUByOec=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/6O27GRABBTU3PQOS57U3Q3TFTI.jpg"} title={"some kind of city"} description={"is it real? i dont believe it"} address={"sindaebar is the real"}/>
  )
};

export default MeetupDetails;