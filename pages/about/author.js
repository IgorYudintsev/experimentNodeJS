import React from 'react';
import {Router, useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";


const Author = () => {
    const Router = useRouter()
    const onClickHandler = () => {
        Router.push('/')
    }
    return (
        <MainLayout title={'Author Page'}>
            <h1>Author</h1>
            <button onClick={onClickHandler}>Go BACK</button>
            <button onClick={() => Router.push('/posts')}>Go to POSTS</button>
            <button onClick={() => Router.push('/about')}>Go to ABOUT</button>
        </MainLayout>

    );
};

export default Author;