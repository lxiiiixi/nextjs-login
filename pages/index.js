import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import useModal from '../hooks/useModal'
import { Icon } from '@iconify/react';
import dynamic from 'next/dynamic';

const LoginByNext = dynamic(import("../layouts/LoginByNext"))
const LoginByOry = dynamic(import("../layouts/LoginByOry"))
const LoginByAuth = dynamic(import("../layouts/LoginByAuth"))
const LoginByWagmi = dynamic(import("../layouts/LoginByWagmi"))
const LoginByWeb3React = dynamic(import("../layouts/LoginByWeb3React"))

export default function Home() {
  const [showModal, setShow, onClose, stopPropagation] = useModal()
  const [children, setChildren] = useState()

  return (
    <main className={styles.main}>

      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByAuth />) }}>Sign In By Auth</div>
      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByNext />) }}>Sign In By Next Api</div>
      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByOry />) }}>Sign In By Ory</div>
      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByWagmi />) }}>Sign In By Wagmi</div>
      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByWeb3React />) }}>Sign In By web3-react</div>

      {/* 一个简陋的自定义modal */}
      <div className="modal-wrap absolute top-0 left-0 h-full w-full flex-center text-center" style={{ display: showModal ? "flex" : "none" }}>
        <div className=" relative clay modal animate__bounceIn" onClick={(e) => { stopPropagation(e) }}>
          <div className=" absolute top-4 right-4 bg-blue text-black w-6 h-6 flex-center cursor-pointer" onClick={() => { onClose() }}>
            <Icon icon="uil:multiply" />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
