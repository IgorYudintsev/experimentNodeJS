import React from 'react';
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import Head from "next/head";


const index = () => {
    return (
        <>
            <MainLayout title={'Home Page'}>
                <h1> Hello Igor!</h1>
                <p><Link href={"/about"}><a>ABOUT</a></Link></p>
                <p><Link href={"/posts"}><a>POSTS</a></Link></p>
            </MainLayout>
        </>

    );
};

export default index