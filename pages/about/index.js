import React from 'react';
import {Router, useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";


const Index = () => {
    const Router = useRouter()
    const onClickHandler = () => {
        Router.push('/')
    }
    return (
        <MainLayout title={'About Page'}>
            <h1>About Next JS</h1>
            <button onClick={onClickHandler}>Go BACK</button>
            <button onClick={() => Router.push('/posts')}>Go to POSTS</button>
            <button onClick={() => Router.push('/about/author')}>Go to AUTHOR</button>

        </MainLayout>

    );
};

export default Index;