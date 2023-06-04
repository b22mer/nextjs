# Next.js 학습

## 정리
---
- 사전 렌더링이 페이지가 페칭을 기다려야하는 데이터를 다룰때에 대한 솔루션이 따로 존재한다. 데이터를 언제까지 기다려야하는지 알려주는 기능
- "Page Pre-Rendering" 2가지의 방식이 존재
1. 정적생성 (static generation, 일반적으로 사용): 이를 이용한다는것은 서버에 요청이 전송되지마자 페이지가 사전 렌더링이 된다는것이 아니라 개발자가 사이트를 프로덕션용으로 구축(=npm run build)할때 사전 렌더링이 이뤄진다.
<br>

  ```javascript
  // pages 컴포넌트 파일에서만 가능, 이름도 변경하면 안된다.
  // 컴포넌트 함수를 호출하기전에 getStaticProps를 먼저 호출한다.
  // async를 통해 비동기식 설정가능
  // 이렇게되면 컴포넘트 함수가 실행되기 전에 데이터를 로딩할수있고, 필요한 데이터가 포함된 상태로 컴포넌트가 렌더링됨

  export async function getStaticProps(){
    //각종 data API 사용가능
    //객체 반환
    //이름은 꼭 props
    return {
        props: {
            meetups: DUMMY
        }
    }
  } 

  ```


  ```javascript
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
    return (
        <MeetupList meetups={props.meetups}/>
    );
};
export async function getStaticProps(){

    return {
        props: {
            meetups: DUMMY
        }
    }
  } 
export default HomePage;
  ```

  - 2. 서버사이드 렌더링
  - 둘은 코드가 실행되는 시점이 다름
