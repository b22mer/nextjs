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




const HomePage = (props) => {
    // 사전에 렌더링 페이지가 페칭을 기다려야 하는 데이터를 다룰때 솔루션이 따로존재
    return (
        <MeetupList meetups={props.meetups}/>
    );
};


//데이터가 매순간 바뀌지 않는다면 req에 대한 액세스 즉 인증에 대한 액세스가 없다면 getStaticProps사용해라!

//(1)
// export async function getStaticProps(){
//     //각종 data API 사용가능
//     //객체 반환
//     //이름은 꼭 props
//     return {
//         props: {
//             meetups: DUMMY
//         },
//         //배포후에도 페이지가 주기에 따라 업데이트 되도록 설정
//         revalidate: 1
//     }
//   }

//(2)
export async function getServerSideProps(context){
    const req= context.req;
    const res= context.res;
    
    //각종 data API 사용가능
        return {
        props: {
            meetups: DUMMY
        },
    }
}
export default HomePage;