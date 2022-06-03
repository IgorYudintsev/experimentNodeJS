import React, {useState, useEffect} from 'react';
import MainLayout from "../components/MainLayout";
import {unshiftLoader} from "next/dist/build/webpack/config/helpers";
import Link from "next/link";
import {useRouter} from "next/router";

// yarn mock -команда для запуска сервака

const Posts = ({post:serverPost}) => {
    const [posts, setPosts] = useState(serverPost)
    const router = useRouter()// Т.к. данные пришли из фронта, то опять используем
   // console.log(posts)

    useEffect(() => {
        async function load() {
            const responce = await fetch('http://localhost:4200/posts')
            const json = await responce.json()
            setPosts(json)// загоужаем сюда наши посты
        }

        if(!serverPost){
            load()
        }

    }, [])

    if(!posts){
        // если данные не пришли с фронта, то грузимся
        return  <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }


    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{el.body}</span>
                         {/*<button><Link href={`/post/${el.id}`}><a >{el.title}</a></Link></button> -так будет перерисовывать, поэтому другим способом*/}
                         <button><Link href={`/post/[id]`} as={`/post/${el.id}`}><a >{el.title}</a></Link></button>
                        </li>

                    )
                })}

            </ul>
        </MainLayout>

    );
};
export default Posts;

// все по правилам-на бэке получаем данные
Posts.getInitialProps = async (ctx) => {
    if(!ctx.req){
        return {post:null}
    }
    const responce = await fetch('http://localhost:4200/posts')
    const posts = await responce.json()
    return {posts: posts} // posts летит на верх- в const Posts = ({posts}) => {-и прилетает в пропсах
}

//----------------------------------------------------------------

// import React, {useState, useEffect} from 'react';
// import MainLayout from "../components/MainLayout";
// import {unshiftLoader} from "next/dist/build/webpack/config/helpers";
// import Link from "next/link";
//
// // yarn mock -команда для запуска сервака
//
// const Posts = ({posts}) => {
//     //const [posts, setPosts] = useState([])
//     console.log(posts)
//
//     // 1. проблема в том, что это никак не стыкуется с SSR-поэтому будем использовать getInitialProps
//     // useEffect(() => {
//     //     async function load() {
//     //         const responce = await fetch('http://localhost:4200/posts')
//     //         const json = await responce.json()
//     //         setPosts(json)// загоужаем сюда наши посты
//     //     }
//     //
//     //     load()
//     // }, [])
//     return (
//         <MainLayout title={'Posts Page'}>
//             <h1>Posts Page</h1>
//             <ul>
//                 {posts.map(el => {
//                     return (
//                         <li key={el.id}>
//                             <span>{el.id}</span>
//                             <span>{el.title}</span>
//                             <span>{el.body}</span>
//                             {/*<button><Link href={`/post/${el.id}`}><a >{el.title}</a></Link></button> -так будет перерисовывать, поэтому другим способом*/}
//                             <button><Link href={`/post/[id]`} as={`/post/${el.id}`}><a >{el.title}</a></Link></button>
//                         </li>
//
//                     )
//                 })}
//
//             </ul>
//         </MainLayout>
//
//     );
// };
// export default Posts;
//
// // все по правилам-на бэке получаем данные
// Posts.getInitialProps = async (ctx) => {
//     const responce = await fetch('http://localhost:4200/posts')
//     const posts = await responce.json()
//     return {posts: posts} // posts летит на верх- в const Posts = ({posts}) => {-и прилетает в пропсах
// }

