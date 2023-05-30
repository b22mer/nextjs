import '../styles/globals.css'
import Layout from './../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
// Component는 각 페이지의 콘텐츠를 나타냄
// Component를 Layout이나 다른 래퍼로 감싸주면됨 (파일마다 일일이 작업할 필요없이)




export default MyApp
