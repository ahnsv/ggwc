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
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 111.73"
                                                style={{width: '70%', height: '50%', fill: 'white'}}>
                                               <defs/>
                                               <title>자산 1</title>
                                               <g id="레이어_2" data-name="레이어 2">
                                                   <g id="레이어_1-2" data-name="레이어 1">
                                                       <path className="cls-1" id={`first`}
                                                             d="M20.56,30.5A37.82,37.82,0,0,0,26,26a37.82,37.82,0,0,0,4.49-5.45,36.22,36.22,0,0,0,3.39-6.24A36.57,36.57,0,0,0,36.78,0H0V36.78a36.57,36.57,0,0,0,14.32-2.89A36.22,36.22,0,0,0,20.56,30.5Z"/>
                                                       <polygon className="cls-1" id={`third`}
                                                                points="58.92 0 58.92 36.58 58.92 36.78 59.12 36.78 79 36.78 79 36.78 79 0 58.92 0"/>
                                                       <polygon className="cls-1" id={`second`}
                                                                points="37.71 36.78 37.91 36.78 57.79 36.78 57.99 36.78 57.99 36.58 57.99 0 37.71 0 37.71 36.58 37.71 36.78"/>
                                                       <ellipse className="cls-1" id={`fourth`} cx="39.5" cy="93.54"
                                                                rx="39.5"
                                                                ry="18.19"/>
                                                       <path className="cls-1" id={`last`}
                                                             d="M79,38.51H0V50H42.4v.92H0V74.43H79V38.51Zm-.2,24.28H36.69v-.92H78.8Z"/>
                                                   </g>
                                               </g>
                                           </svg>
                                           <h1>鷄龍 <br/>
                                               전산 <br/>
                                               한-마당</h1>
                                       </div>
                                       <div className="section" style={{color: 'white', fontWeight: 'bold'}}>
                                           <h1>체계단 IT동아리 소셜 미디어를 확인해보세요.</h1>
                                           <div className="icon-links">
                                               <a href="https://gyeryongdevmeetup.slack.com">
                                                   <svg viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"
                                                        width={50}>
                                                       <g fill="none" fill-rule="evenodd">
                                                           <path
                                                               d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                                                               fill="#36C5F0"/>
                                                           <path
                                                               d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                                                               fill="#2EB67D"/>
                                                           <path
                                                               d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                                                               fill="#ECB22E"/>
                                                           <path
                                                               d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                                                               fill="#E01E5A"/>
                                                       </g>
                                                   </svg>
                                               </a>
                                               <a href="https://www.notion.so/gitit/GIT_IT-Notion-65eb7c50072441c19d2797f4f3481860">
                                                   <img
                                                       src="data:image/png;base64,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"
                                                       alt={`notion`}/>
                                               </a>
                                               <a href="https://github.com/ismw-git">
                                                   <svg className="octicon octicon-mark-github v-align-middle"
                                                        height="50"
                                                        viewBox="0 0 16 16" version="1.1" width="50" aria-hidden="true">
                                                       <path fill-rule="evenodd"
                                                             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                                   </svg>
                                               </a>
                                           </div>
                                       </div>
                                       <style jsx>{`
                        .section {
                            background-color: #d32036;
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
                       .icon-links {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-evenly;
                            padding: 0 33%;
                       } 
                       .icon-links > * {
                            width: 50px;
                            height: 50px;
                       }
                       
                       .icon-links img {
                            width: inherit;
                            height: inherit;
                       }
                       .icon-links a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
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

