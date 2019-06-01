import React from 'react'
import Main from "../../layout/main";
import ReactFullpage from "@fullpage/react-fullpage";
import {DiscussionEmbed} from 'disqus-react'

const Sessions = () => {
    const disqusConfig = {
        url: '/sessions',
        identifier: '',
        title: ''
    };
    return (
        <Main>
            <ReactFullpage navigation={true} controlArrows={false}
                           menu={`#menu`} sectionsColor={['#4BBFC3', '#7BAABE', 'lightcoral']}
                           continuousVertical={true} fadingEffect={'sections'}
                           render={({state, fullpageApi}) => {
                               return (
                                   <ReactFullpage.Wrapper>
                                       <div className="section">
                                           <h1>Section 1</h1>
                                       </div>
                                       <div className="section">
                                           <div className="slides">
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                               <div className="slide">1</div>
                                               <div className="slide">
                                                    <DiscussionEmbed shortname="Discussion" config={disqusConfig}/>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="section">
                                           <h1>Section 3</h1>
                                       </div>
                                       <div className="section">
                                           <h1>Section 4</h1>
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
                        
                        `}</style>
                                   </ReactFullpage.Wrapper>
                               );
                           }}
            />
        </Main>
    )
};

export default Sessions