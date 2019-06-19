import React from 'react'
import Head from 'next/head'
import Menu from "../components/Menu";

const Main = ({children}) => {
    return (
        <div className={`main`}>
            <Head>
                <title>계룡전산한마당</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" href="/static/logos/logo_mini.png"/>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,900&display=swap"
                      rel="stylesheet"/>
                <style>
                    {`
                            h1 {
                                color: whitesmoke;
                            }
                            #fp-nav ul li a span {
                                background: whitesmoke !important;
                                border-radius: 20% !important;
                            }
                            .fp-slidesNav ul li a span {
                                border-radius: 20% !important;
                            }
                          `}
                </style>
            </Head>
            <Menu/>
            {children}
        </div>
    )
};
export default Main
