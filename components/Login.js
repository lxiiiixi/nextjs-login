import React, { useState } from 'react'
import axios from 'axios';

export default function Login({ handleLogin }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () => {
        if (password && email) {
            axios.post("./api/user/login", { userPwd: password, userName: email })
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        alert("Login successfully")
                    } else {
                        alert(res.data.error)
                    }
                })
        } else {
            alert("Please input corret email and password")
        }
    }

    return (
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Login
                </h1>
                <p className="mx-auto mt-4 text-center text-gray-500">
                    Get started today
                </p>
                <div action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p className="text-lg font-medium">Sign in to your account</p>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={signIn}
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Sign in
                    </button>

                    <div className="text-center text-sm text-gray-500">
                        No account?
                        <span className="underline" onClick={handleLogin}> Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
