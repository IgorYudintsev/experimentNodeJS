import {useState, useEffect} from "react";
import MainLayout from "../../components/MainLayout";
import Posts from "../posts";
import Link from "next/link";
import {useRouter} from "next/router";

// данные post мы положили в переменную serverPost
export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()// Т.к. данные пришли из фронта, то опять используем
    useEffect(() => {
        // все это дерьмо загружается-если с сервера пришел Null
        async function load() {
            //                                               перед query.id    поставили router
            const responce = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await responce.json()
            setPost(data)
        }

        if (!serverPost) {
            // если post===null
            load()
        }
    }, [])

    if (!post) {
        // если данные не пришли с фронта, то грузимся
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }
    return (
        <MainLayout>
            {/*<h1>POST {router.query.id}</h1>*/}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button><Link href={`/posts`}><a>GO TO ALL POSTS</a></Link></button>
        </MainLayout>

    )
}

// вызывается только на сервере
export async function getServerSideProps({query, req}) {
    const responce = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post = await responce.json()
    return {
        props: {post}
    }
}

// если нужно комбинировать фронт и бэк лучше использовать это
// Post.getInitialProps = async ({query,req}) => {
//     //из stx достали query
//     //первый раз мы шлем запрос на сервак и получаем req, но когда мы перерубаем страницу-данные из фронта,
//     //поэтому req Отсутствует
//
//     if(!req){
//         return {post:null}
//     }
//
//     const responce = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await responce.json()
//     return {post}
// }

// Post.getInitialProps = async (ctx) => {
//     //console.log(ctx.query)
//
//     const responce = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
//     const post = await responce.json()
//     return {post}
// }

//----------------------------------------------------------------------------
// import {useRouter} from "next/router";
// import MainLayout from "../../components/MainLayout";
// import Posts from "../posts";
// import Link from "next/link";
//
// export default function Post({post}) {
//     //const router = useRouter()
//     //console.log(router)
//     return (
//         <MainLayout>
//             {/*<h1>POST {router.query.id}</h1>*/}
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//             <button><Link href={`/posts`} ><a >GO TO ALL POSTS</a></Link></button>
//         </MainLayout>
//
//     )
// }
//
// Post.getInitialProps = async ({query,req}) => {
//     //из stx достали query
//     //первый раз мы шлем запрос на сервак и получаем req, но когда мы перерубаем страницу-данные из фронта,
//     //поэтому req Отсутствует
//
//     if(!req){
//         return {post:null}
//     }
//
//     const responce = await fetch(`http://localhost:4200/posts/${query.id}`)
//     const post = await responce.json()
//     return {post}
// }
//
// // Post.getInitialProps = async (ctx) => {
// //     //console.log(ctx.query)
// //
// //     const responce = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
// //     const post = await responce.json()
// //     return {post}
// // }