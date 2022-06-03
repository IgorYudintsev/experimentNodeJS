import React from 'react';
import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title='Next App'}) => {
    // им мы обворачиваем все наши компоненты,где нужна шапка
    // сама компонента будет отрисовываться в  <main>{children}</main>
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="NextJS, React, Yudintsev Igor" />
                <meta name="description" content="Experiment project" />
                <meta charSet={'utf-8'}/>
            </Head>
            <nav>
                <Link href={'/'}><a>HOME</a></Link>
                <Link href={'/about'}><a>ABOUT</a></Link>
                <Link href={'/posts'}><a>POSTS</a></Link>
            </nav>
            <main>{children}</main>
            <style jsx>{`
              // global - если добавить в  <style jsx global>-то стили эти будут применяться по всему проекту, 
              //а не только на этой странице
              nav {
                position: fixed;
                height: 60px;
                left: 0;
                right: 0;
                top: 0;
                background-color: darkslategrey;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }

              nav a {
                color: #eaeaea;
                text-decoration: none;
              }

              main {
                margin-top: 100px;
              }
            `}</style>
        </>
    );
};

export default MainLayout;