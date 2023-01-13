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
                <div className=" text-center">
                    <p>Signed in as {email}</p>
                    <Image src={image} width={200} height={200} className="rounded-full margin-center" alt="Picture of the author" />
                    <p>UserName: {name}</p>
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

