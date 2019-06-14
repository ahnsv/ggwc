import React from 'react'
import Main from "../../layout/main";
import ReactFullpage from "@fullpage/react-fullpage";

const Sessions = () => {
    return (
        <Main>
            <ReactFullpage navigation={true} controlArrows={false}
                           menu={`#menu`}
                           sectionsColor={['#4BBFC3', '#ff6f61', '#5f5286', "#dc143c", "#FF5E00", "#00ffd0", "#5f5286"]}
                           continuousVertical={true} fadingEffect="section"
                           slidesNavigation={true}
                           render={({state, fullpageApi}) => {
                               return (
                                   <ReactFullpage.Wrapper>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/lee_do.jpg")'}}>
                                                               {/*<img src="/static/lee_do.jpg" alt={`lee_do`}/>*/}
                                                           </div>
                                                           <div className="session--speaker">이도운</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
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
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           기존 그래픽 렌더링에 대한 특징을 설명한 뒤, RTX그래픽 카드가 도입 후 RayTracing이 대중들에게
                                                           많이 알려지면서 기존 그래픽과 어떤 차이점이 있는지, 현 RealTime Rendering에서의
                                                           RayTracing 사용 수준 정도에 대해서 설명합니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>X</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>20명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides" style={{color: 'white'}}>
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/ahn.jpg")'}}/>
                                                           <div className="session--speaker">안상태</div>
                                                           <div className="session--whereabouts">휴게실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   CSS 애니메이션과 flex로 만드는 랜딩 페이지와 레이아웃
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   예쁜 UI를 만들고 싶지만 부트스트랩 없이는 만들 수 없는 분. CSS 땜에 스스레스 오지게
                                                                   받아보신 분
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           CSS의 간단한 트랜지션과 애니메이션 속성들을 이용해서 랜딩페이지를 15분 만에 간단하게 만들어보고, CSS의
                                                           강력한 flex속성을 이용해서 기본 페이지 레이아웃 설계 및 구현을 해보려고 합니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>태블릿 지참</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>20명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides" style={{color: 'white'}}>
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/choi_sung.png")'}}/>
                                                           <div className="session--speaker">최성은</div>
                                                           <div className="session--whereabouts">동아리방</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
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
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           순수 함수형 언어의 역사와 의의, 철학에 대해서 알아봅니다. 기본적인 개념들을 둘러보고 간단하게 하스켈 문법을
                                                           배웁니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>X</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>8명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides" style={{color: 'white'}}>
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/lee2.jpg")'}}/>
                                                           <div className="session--speaker">이대형</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   Anyone can be an artist
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   포토샵 및 일러스트에 관심이 있는 초보자들
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           처음 시작해도 포토샵과 일러스트를 이용해서 포스터를 쉽게 만들 수 있는 방법을 알려드립니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>(가능하다면) 포토샵 및 일러스트 CS6이상 버전</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>10명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides" style={{color: 'white'}}>
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/kim.jpg")'}}/>
                                                           <div className="session--speaker">김수일</div>
                                                           <div className="session--whereabouts">좌동아리방</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
                                                           <div className="session--program">
                                                               <div className="session--program__title">
                                                                   30분 안에 최소자승법(LSS; Least Square Solution) 증명하기
                                                                   challenge!!
                                                               </div>
                                                               <div className="session--program__targets">
                                                                   선형대수학을 공부하지 않았지만 수치해석, 회기분석 기초를 알고 싶은 사람
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           수치해석에 관심이 가게 된 이유를 소개하고, 최소자승법을 증명합니다. 최종적으로 분산된 점을 가장 근사해서
                                                           지나가는 다항식을 구해봅니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>펜 지참 권장</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>20명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/suh.jpg")'}}/>
                                                           <div className="session--speaker">서희강</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
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
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           10여년간 디자인을 해오며 참고해온 디자인 레퍼런스 사이트들을 모두 알려드립니다.
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>메모할 수 있는 것</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>15명</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides" style={{color: 'white'}}>
                                               <div className="slide">
                                                   <div className="slide-row" style={{color: 'white'}}>
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url(/static/lee_min.jpg)'}}/>
                                                           <div className="session--speaker">이민욱</div>
                                                           <div className="session--whereabouts">휴게실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
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
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           Garbage Collection의 역사와 알고리즘, 메모리 누수(Memory Leak)이 발생하는 코드를
                                                           설명
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>(가능하다면) 크롬</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>6명(크게 상관 없습니다.)</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div className="slide-col">
                                                           <div className="session--profile"
                                                                style={{backgroundImage: 'url("/static/choi.jpg")'}}/>
                                                           <div className="session--speaker">최영서</div>
                                                           <div className="session--whereabouts">피정실</div>
                                                       </div>
                                                       <div className="slide-col"
                                                            style={{padding: '0 10%', textAlign: 'left'}}>
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
                                               <div className="slide">
                                                   <div className="slide-row">
                                                       <div>프로그램 개요</div>
                                                       <p>
                                                           함수형이 명령형 언어와 비교에서 실질적으로 어떤 점이 좋은지 전부 예시를 통해 설명
                                                       </p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>참가 준비물</div>
                                                       <p>따로 없어도 됩니다.</p>
                                                   </div>
                                                   <div className="slide-row">
                                                       <div>제한 인원</div>
                                                       <p>6명</p>
                                                   </div>
                                               </div>
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
                            align-items: center;
                       } 
                       .slide-row div {
                            // font-weight: bold;
                       }
                       .slide-row p {
                            flex: auto;
                            padding: 0 10%;
                       }
                       .slide-col {
                            flex: 1 1 auto;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            max-width: 300px;
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