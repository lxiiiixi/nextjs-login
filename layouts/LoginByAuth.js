import React from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Image from 'next/image';

export default function LoginByNext() {
    const { data: session, status } = useSession()
    console.log(session, status);

    if (status === "authenticated") {
        const { email, image, name } = session.user
        return (
            <div>
                <div >
                    Signed in as {email}
                    <Image src={image} width={200} height={200} alt="Picture of the author" />
                    UserName: {name}
                </div>
                <div className="clay button bg-orange" onClick={() => signOut()}>Sign out</div>
            </div>
        )
    }
    return (
        <div>
            <div className="">Not signed in</div>
            <div className="clay button bg-blue" onClick={() => signIn()}>Sign in</div>
        </div>
    )
}

