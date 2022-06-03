import Link from "next/link";
import styles from './../styles/ErrorPage.module.css'
import MainLayout from "../components/MainLayout";
import React from "react";

export const ErrorPage = () => {
    return (
        <MainLayout title={'Error Page'}>
            <div className={styles.global}>
                <h1>VSE PROPALO!</h1>
                <p className={styles.error}><Link href={"/"}><a>Go back to INDEX</a></Link></p>
            </div>
        </MainLayout>


    )
}

export default ErrorPage