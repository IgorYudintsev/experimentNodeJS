import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            {/*<style jsx global>*/}
            {/*    {`*/}
            {/*      // перенес стили в global.css. Важен импорт туда*/}
            {/*      body {*/}
            {/*        font-family: 'Roboto', sans-serif;*/}
            {/*      }*/}
            {/*    `}*/}
            {/*</style>*/}
        </>
    )
}


export default MyApp