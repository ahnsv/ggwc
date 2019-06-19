import App, {Container} from 'next/app'
import React from 'react'
import {PageTransition} from 'next-page-transitions'
import withGA from 'next-ga';
import Router from 'next/router'

class MyApp extends App {
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
          
                    body {
                    font-family: 'Noto Sans KR', sans-serif;
                    }
                  .page-transition-enter {
                      opacity: 0.4;
                      position: absolute;
                    }
                    .page-transition-enter.page-transition-enter-active {
                      transition: all 400ms cubic-bezier(.215,.61,.355,1);
                      opacity: 1;
                    }
                    .page-transition-leave {
                      opacity: 1;
                      position: absolute;
                    }
                    .page-transition-leave.page-transition-leave-active {
                      opacity: 0.4;
                      transition: 400ms cubic-bezier(.215,.61,.355,1);
                      transition-properties: transform, opacity;
                    }
        `}</style>
            </Container>
        )
    }
}

export default withGA('UA-142409006-1', Router)(MyApp);

