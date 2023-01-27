//import style 
import styles from './signInModal.module.css';

import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";

//make boilerplate
export default function SignInModal() {
    const { data: session } = useSession()

    if (session) {
        return (
        <>
            {/* Signed in as {session.user.email} <br /> */}
            <div className = {styles.container}>
                <button className = {styles.button} onClick={() => signOut()}>Sign out</button>
            </div>
        </>
        )
    }
    return (
        <div className={styles.container}>
            <button className = {styles.button} onClick={() => signIn()}>Login</button>
        </div>
    )
}

