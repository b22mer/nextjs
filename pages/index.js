import React from 'react';
import MeetupList from './../components/meetups/MeetupList';

const DUMMY = [
    {id: "m1",
     title:"a first meetup",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTN913l7U4IsyKNRTPR0PFTzXY7lazXT5hFb1saL6yg&s",
     address: "Some address 5, 12345 some City",
     description : "This is a special meetup"
    },
    {id: "m2",
    title:"a first meetup",
    image: "https://images.chosun.com/resizer/qGPz5be29MOF1LMl6rTxRUByOec=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/6O27GRABBTU3PQOS57U3Q3TFTI.jpg",
    address: "Some address 5, 12345 some City",
    description : "This is a special meetup"
   },
   {id: "m3",
   title:"a first meetup",
   image: "https://images.chosun.com/resizer/4FcEFE6aLtbGmrZw6zrh4JqiaqY=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HS5BJM4OHVAMXKR2NBFO5KWO3A.jpg",
   address: "Some address 5, 12345 some City",
   description : "This is a special meetup"
  }
]




const HomePage = () => {
    // 사전에 렌더링 페이지가 페칭을 기다려야 하는 데이터를 다룰때 솔루션이 따로존재
    return (
        <MeetupList meetups={DUMMY}/>
    );
};

export default HomePage;