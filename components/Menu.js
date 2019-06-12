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
            <h1>
                Title
            </h1>
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
