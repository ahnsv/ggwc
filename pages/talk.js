import React from 'react'
import Main from "../layout/main";
import ReactFullpage from "@fullpage/react-fullpage";

const Talk = () => (
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
                                                       <div className="session--profile" style={{backgroundImage: 'url("/static/goo2.jpg")'}}>
                                                       </div>
                                                       <div className="session--speaker">구본호</div>
                                                   </div>
                                                   <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                       <div className="session--program">
                                                           <div className="session--program__title">
                                                               사람들이 버리는 가치를 줍는 개발
                                                           </div>
                                                           <div className="session--program__targets">
                                                               Crowd Courcing, Gamification이 무엇인지 알아보고 싶은 사람, 공공을 위한 개발에 대해 궁금한 사람.
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
                                                       <div className="session--profile" style={{backgroundImage: 'url(/static/suh.jpg)'}}/>
                                                       <div className="session--speaker">서희강</div>
                                                   </div>
                                                   <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                       <div className="session--program">
                                                           <div className="session--program__title">
                                                               핵심 목표에 도달하기
                                                           </div>
                                                           <div className="session--program__targets">
                                                               목표를 설계하고 큰 성취감을 얻고 싶은 사람
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
                                                   </div>
                                                   <div className="slide-col" style={{ padding: '0 10%', textAlign: 'left'}}>
                                                       <div className="session--program">
                                                           <div className="session--program__title">
                                                               Being a student and tourist, not a prisoner
                                                           </div>
                                                           <div className="session--program__targets">
                                                               군생활동안 존버하기보단 긍정적인 발전하고 싶은 분들
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
);

export default Talk;