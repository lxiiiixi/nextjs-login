import React from 'react'

export default function LoginByNext({ setShow, setChildren }) {
    return (
        <div className="clay button bg-blue" onClick={(e) => { setShow(e); setChildren(<>index</>) }}>
            Login
        </div>
    )
}
