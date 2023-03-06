import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

function Landing(){
  return (
    <_Layout>
      <_Header>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={true}
          navigation={true}
        >
          {['blue','red','tomato','green'].map((i) => (
            <SwiperSlide className="slide" style={{backgroundColor: i}}>
              <h1>import</h1>
              <p>빠르게 실현하는 아이디어</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </_Header>
      <_Main>
        <div className="inputWrapper">
          <div>
            <h1 className="title">import</h1>
            <p>쉽고 빠르게 실현하는 아이디어</p>
          </div>
          <input className="input" placeholder="placeholder"/>
        </div>
        <div className="title">
          <h1>동업 게시글</h1>
          <div>
            <p>마음에 드는 프로젝트를 찾아 동업해 보세요</p>
            <p className="more">더보기</p>
          </div>
        </div>
        <_PostLayout>
          {[1,2,3,4].map((i) => (
            <div className="post">
              <img/>
              <div>
                <div className="flex">
                  <p>Jangji</p>
                  <p className="gray400"> | </p>
                  <p>Idea</p>
                </div>
                <h1 className="title">오로라 관측 장소 어플리케이션</h1>
                <p className="gray400">2023.01.16</p>
                <_Tags>
                  {['Backend','Frontend','AI'].map((i) => (
                    <div className="tag">{i}</div>
                  ))}
                </_Tags>
              </div>
            </div>
          ))}
        </_PostLayout>
        <_Under>
          <h1>import</h1>
          <p>쉽고 빠르게 실현하는 아이디어</p>
        </_Under>
      </_Main>
    </_Layout>
  );
}

const _Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`
const _Header = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;
  margin-top: 57px;
  .swiper-button-prev {
    color: white;
    left: 9.43vw;
    height: 20px;
  }
  .swiper-button-next {
    color: white;
    right: 9.43vw;
    height: 33px;
  }
  .slide {
    display: flex;
    flex-direction: column;
    color:white;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15vw;
    width: 100%;
    position: relative;
    background-color: blue;
    p {
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
    }
    :before {
      position: absolute;
      top: 0;
      right: 174px;
      content: url("");
    }
  }
`;
const _Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 15% 15%;
  .inputWrapper {
    .title {
      font-weight: 900;
      font-size: 40px;
    }
    > .input {
      border-radius: 8px;
      width: 51.54vw;
      height: 50px;
      background: #FBFBFB;
      padding-left: 20px;
      margin-top: 30px;
      transition: 0.3s ease-in;
      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: #999999;
      }
      &:focus{
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
  > .title {
    margin-top: 160px;
    h1 {
      font-size: 24px;
      font-weight: 600;
      line-height: 160%;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
    > p {
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      color: #666666;
    }
    .more {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      padding-bottom: 11px;
    }
  }
`;
const _PostLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  width: 100%;
  gap: 20px;
  .post {
    transition: 0.2s ease-in;
    padding: 15px;
    cursor: pointer;
    &:hover {
      border-radius: 8px;
      box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, 0.1);
    }
    img {
      width: 100%;
      height: 177px;
      border-radius: 8px;
    }
    > div {
      margin-top: 20px;
      .flex {
        display: flex;
      }
      .gray400 {
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        color: #999999;
      }
      .title {
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        margin-top: 6px;
      }
    }
  }
  
`;
const _Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
  .tag {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    height: 29px;
    background: #F8F8F8;
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
  }
`;
const _Under = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 140px;
  background: #0F75F8;
  color: white;
  height: 200px;
  border-radius: 20px;
  padding-left: 15.15vw;
`
export default Landing;