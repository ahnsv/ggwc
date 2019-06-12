import React from 'react'
import Link from 'next/link'

const Menu = () => (
    <div
        className="menu"
        id={`menu`}
        style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
            display: 'flex'
        }}
    >
        <div className="title" style={{marginRight: 'auto'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 36.78" style={{width: '70px', fill: 'white'}}>
                <defs>
                </defs>
                <title>자산 2</title>
                <g id="레이어_2" data-name="레이어 2">
                    <g id="레이어_1-2" data-name="레이어 1">
                        <path class="cls-1"
                              d="M20.56,30.5A37.82,37.82,0,0,0,26,26a37.82,37.82,0,0,0,4.49-5.45,36.22,36.22,0,0,0,3.39-6.24A36.57,36.57,0,0,0,36.78,0H0V36.78a36.57,36.57,0,0,0,14.32-2.89A36.22,36.22,0,0,0,20.56,30.5Z"/>
                        <polygon class="cls-1"
                                 points="58.92 0 58.92 36.58 58.92 36.78 59.12 36.78 79 36.78 79 36.78 79 0 58.92 0"/>
                        <polygon class="cls-1"
                                 points="37.71 36.78 37.91 36.78 57.79 36.78 57.99 36.78 57.99 36.58 57.99 0 37.71 0 37.71 36.58 37.71 36.78"/>
                    </g>
                </g>
            </svg>
        </div>
        <ul className={`menu-items`}>
            <li>
                <Link href={`/`}>
                    <a className={`menu-items--link`}>
                        홈
                    </a>
                </Link>
            </li>
            <li>
                <Link href={`/sessions`}>
                    <a className={`menu-items--link`}>
                        재능공유
                    </a>
                </Link>
            </li>
            <li>
                <Link href={`/talk`}>
                    <a className={`menu-items--link`}>
                        체계단톡
                    </a>
                </Link>
            </li>
        </ul>
        <style jsx>
            {`
                .menu {
                    width: 100%;
                    align-items: center;
                    justify-contents: center;
                }
               .menu-items {
                    display: flex;
               } 
               .menu-items li {
                    padding: 0 3vw;
                    list-style: none;
               }
               .menu-items--link {
                    text-decoration: none;
                    color: whitesmoke;
                    font-weight: bold;
               }
               .title {
                    padding-left: 10px;
               }
                `}
        </style>
    </div>
);
export default Menu
