import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Main from '../layout/main'

const Index = () => {
    return (
        <Main>
            <ReactFullpage navigation={true} menu={`#menu`}
                           render={({state, fullpageApi}) => {
                               return (
                                   <ReactFullpage.Wrapper>
                                       <div className="section">
                                           <h1>Section 1</h1>
                                       </div>
                                       <div className="section">
                                           <h1>Section 2</h1>
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
                        
                        `}</style>
                                   </ReactFullpage.Wrapper>
                               );
                           }}
            />
        </Main>
    )
};

export default Index;

