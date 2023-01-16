import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"

// highlight-start
import { Configuration, FrontendApi, Session, Identity } from "@ory/client"
import { edgeConfig } from "@ory/integrations/next"

const ory = new FrontendApi(new Configuration(edgeConfig))

const getUserName = (identity) =>
    identity.traits.email || identity.traits.username

export default function LoginByOry() {
    const router = useRouter()

    const [session, setSession] = useState()
    const [logoutUrl, setLogoutUrl] = useState()

    useEffect(() => {
        ory
            .toSession()
            .then(({ data }) => {
                setSession(data)
                // Create a logout url
                ory.createBrowserLogoutFlow().then(({ data }) => {
                    setLogoutUrl(data.logout_url)
                })
            })
            .catch(() => {
                // Redirect to login page
                return router.push(edgeConfig.basePath + "/ui/login")
            })
    }, [router])

    if (!session) {
        return null
    }

    return (
        <div>
            {getUserName(session?.identity)}
            <div className="clay button bg-blue m-3">
                Log in
            </div>
            <div className="clay button bg-orange">
                <a src={logoutUrl}>Log out</a>
            </div>
        </div>
    )
}
