import React, { useState, useEffect } from 'react'
import Login from "../components/Login"
import Register from "../components/Register"
import axios from 'axios';

// 本页面主要是为了练习next api请求的实现的流程,对表单验证等暂时都还不完善,只实现了主要功能
export default function LoginByNext() {
    const [isLogin, setIsLogin] = useState(true)
    const [users, setUsers] = useState([])

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

    useEffect(() => {
        axios.get("./api/user")
            .then(res => {
                setUsers(res.data.data)
            })
    }, [])


    return (
        <div className="max-w-2xl">
            <div>
                {isLogin ? <Register handleLogin={handleLogin} /> : <Login handleLogin={handleLogin} />}
            </div>
        </div>
    )
}

