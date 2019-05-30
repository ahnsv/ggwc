import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

const Index = () => (
    <ReactFullpage
        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    <style jsx>{`
                        .section {
                            background-color: lightcoral;
                        }
                    `}</style>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Index;

