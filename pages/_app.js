import App, {Container} from 'next/app'
import React from 'react'
import {PageTransition} from 'next-page-transitions'

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps, router} = this.props;
        return (
            <Container>
                <PageTransition timeout={300} classNames="page-transition" loadingDelay={1000}>
                    <Component {...pageProps} key={router.route}/>
                </PageTransition>
                <style jsx global>{`
          
                  .page-transition-enter {
                      opacity: 0.4;
                      transform: translateY(-20px);
                      position: absolute;
                    }
                    .page-transition-enter.page-transition-enter-active {
                      transform: translateY(0px);
                      transition: all 400ms cubic-bezier(.215,.61,.355,1);
                      opacity: 1;
                    }
                    .page-transition-leave {
                      transform: translateY(0px);
                      opacity: 1;
                      position: absolute;
                    }
                    .page-transition-leave.page-transition-leave-active {
                      opacity: 0.4;
                      transform: translateY(20px);
                      transition: 400ms cubic-bezier(.215,.61,.355,1);
                      transition-properties: transform, opacity;
                    }
        `}</style>
            </Container>
        )
    }
}

