import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Main from '../layout/main'

const Index = () => {
    return (
        <Main>
            <ReactFullpage navigation={false} menu={`#menu`}

                           render={({state, fullpageApi}) => {
                               return (
                                   <ReactFullpage.Wrapper>
                                       <div className="section" id="intro">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 111.73" style={{width: '50%', height: '50%', fill: 'white'}}>
                                               <defs/>
                                               <title>자산 1</title>
                                               <g id="레이어_2" data-name="레이어 2">
                                                   <g id="레이어_1-2" data-name="레이어 1">
                                                       <path class="cls-1" id={`first`}
                                                             d="M20.56,30.5A37.82,37.82,0,0,0,26,26a37.82,37.82,0,0,0,4.49-5.45,36.22,36.22,0,0,0,3.39-6.24A36.57,36.57,0,0,0,36.78,0H0V36.78a36.57,36.57,0,0,0,14.32-2.89A36.22,36.22,0,0,0,20.56,30.5Z"/>
                                                       <polygon class="cls-1" id={`third`}
                                                                points="58.92 0 58.92 36.58 58.92 36.78 59.12 36.78 79 36.78 79 36.78 79 0 58.92 0"/>
                                                       <polygon class="cls-1" id={`second`}
                                                                points="37.71 36.78 37.91 36.78 57.79 36.78 57.99 36.78 57.99 36.58 57.99 0 37.71 0 37.71 36.58 37.71 36.78"/>
                                                       <ellipse class="cls-1" id={`fourth`} cx="39.5" cy="93.54" rx="39.5"
                                                                ry="18.19"/>
                                                       <path class="cls-1" id={`last`}
                                                             d="M79,38.51H0V50H42.4v.92H0V74.43H79V38.51Zm-.2,24.28H36.69v-.92H78.8Z"/>
                                                   </g>
                                               </g>
                                           </svg>
                                           <h1>鷄龍 <br/>
                                               전산 <br/>
                                               한-마당</h1>
                                       </div>
                                       <style jsx>{`
                        .section {
                            background-color: lightcoral;
                            text-align: center;
                        }
                        .section > * {
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                        }
                        @keyframes fadeInDefault {
                            0% {
                                opacity: 0;
                                visibility: hidden;
                            }
                            100% {
                                opacity: 1;
                                visibility: visible
                            }
                        }
                        @keyframes slideInRight {
                            0% {
                                transform: translateX(-10%);
                            }
                            50% {
                                transform: translateY(0);
                            }
                            100% {
                                transform: translateX(-10%);
                            }
                        }
                        @keyframes slideInLeft {
                            0% {
                                transform: translateX(10%);
                            }
                            50% {
                                transform: translateY(0);
                            }
                            100% {
                                transform: translateX(10%);
                            }
                        }
                        @keyframes slideInUp {
                            0% { transform: translateY(10%) }
                            50% { transform: translateY(0%) }
                            100% { transform: translateY(10%) }
                        }
                        
                        #intro svg {
                            animation: fadeInDefault 500ms linear forwards;
                        }
                        
                        #intro svg #first {
                            animation: slideInRight 5000ms ease-in both 400ms infinite;
                        }
                        
                        #intro svg #second, #third {
                            animation: slideInLeft 5000ms ease-in both 500ms infinite;
                        }
                        #intro svg #fourth {
                            animation: slideInUp 5000ms ease-in both 600ms infinite;
                        }
                        #intro svg #last {
                            animation: slideInUp 5000ms ease-in both 800ms infinite;
                        }
                        #intro h1 {
                            animation: fadeInDefault 300ms linear both 3000ms;
                        }
                        
                        
                        `}</style>
                                   </ReactFullpage.Wrapper>
                               );
                           }}
            />
        </Main>
    )
};

export default Index;

