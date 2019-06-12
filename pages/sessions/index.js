import React from 'react'
import Main from "../../layout/main";
import ReactFullpage from "@fullpage/react-fullpage";

const Sessions = () => {
    return (
        <Main>
            <ReactFullpage navigation={true} controlArrows={false}
                           menu={`#menu`} sectionsColor={['#4BBFC3', '#ff6f61', 'lightgrey', "#dc143c", "lightcoral", "#00ffd0"]}
                           continuousVertical={true} fadingEffect={'sections'}
                           render={({state, fullpageApi}) => {
                               return (
                                   <ReactFullpage.Wrapper>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/lee_do.jpg")'}}>
                                                               {/*<img src="/static/lee_do.jpg" alt={`lee_do`}/>*/}
                                                           </div>
                                                           <div className="session--speaker">이도운</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   RTX 혹은 RayTracing 그래서 그게 뭔데?
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   기존 게임이나 게임 그래픽에 관심이 많고 최근 RTX그래픽 카드에 대해서 궁금한 사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/ahn.jpg")'}}/>
                                                           <div className="session--speaker">안상태</div>
                                                           <div className="session--whereabouts">휴게실</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   CSS 애니메이션과 flex로 만드는 랜딩 페이지와 레이아웃
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   예쁜 UI를 만들고 싶지만 부트스트랩 없이는 만들 수 없는 분. CSS 땜에 스스레스 오지게 받아보신 분
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"></div>
                                                           <div className="session--speaker">최성은</div>
                                                           <div className="session--whereabouts">동아리방</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   순수 함수형 언어 하스켈 알아보기
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   함수형 언어 및 새로운 프로그래밍 패러다임에 관심이 있으신 분
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/lee2.jpg")'}}/>
                                                           <div className="session--speaker">이대형</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col" style={{padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   30분 만에 만드는 포스터
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   포토샵 및 일러스트에 관심이 있는 초보자들
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/kim.jpg")'}}/>
                                                           <div className="session--speaker">김수일</div>
                                                           <div className="session--whereabouts">좌동아리방</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   30분 안에 최소자승법(LSS; Least Square Solution) 증명하기 challenge!!
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   선형대수학을 공부하지 않았지만 수치해석, 회기분석 기초를 알고 싶은 사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/suh.jpg")'}}/>
                                                           <div className="session--speaker">서희강</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   내가 알고 있는 디자인 레퍼런스 사이트 대방출!
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   브랜딩, UX, 편집 등 디자인 레퍼런스 사이트들을 많이 알고 싶은 사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"/>
                                                           <div className="session--speaker">이민욱</div>
                                                           <div className="session--whereabouts">휴게실</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   Garbage Collection의 작동방식
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   C언어의 malloc, free를 써본사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile" style={{backgroundImage: 'url("/static/choi.jpg")'}}/>
                                                           <div className="session--speaker">최영서</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   함수형을 직접 써보고 느낀 함수형 언어의 장점
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   함수형을 처음 써보려는데 정확히 어떤 점이 명령형 언어보다 좋은 지 궁금한 사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                           </div>
                                       </div>
                                       <style jsx global>{`
                                body {
                                    font-family: 'Noto Sans KR', sans-serif;
                                }
                            `}</style>
                                       <style jsx>{`
                        .section {
                            background-color: lightblue;
                            text-align: center;
                        }
                        .section > * {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                       .slide-row {
                            display: flex;
                            flex-direction: row;
                            font-size: 0.8em;
                            padding: 0 10vw;
                            word-break: keep-all;
                       } 
                       .slide-col {
                            flex: 1 1 auto;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                       }
                       .session--profile {
                            width: 100px;
                            height: 100px;
                            background-color: white;
                            border-radius: 35%;
                            box-shadow: 3px 3px 3px #00000020;
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                        }
                       
                       .session--speaker, .session--program__title {
                            font-size: 1.3rem;
                            font-weight: bold;
                       }
                        
                        `}</style>
                                   </ReactFullpage.Wrapper>
                               );
                           }}
            />
        </Main>
    )
};

export default Sessions