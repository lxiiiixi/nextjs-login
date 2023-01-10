import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import useModal from '../hooks/useModal'
import { Icon } from '@iconify/react';
import LoginByNext from '../layouts/LoginByNext';
import LoginByAuth from '../layouts/LoginByAuth';

export default function Home() {
  const [showModal, setShow, onClose, stopPropagation] = useModal()
  const [children, setChildren] = useState()

  return (
    <main className={styles.main}>

      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByAuth />) }}>Sign In By Auth</div>
      <div className="card clay bg-pink text-xl" onClick={(e) => { setShow(e); setChildren(<LoginByNext />) }}>Sign In By Next Api</div>

      {/* 一个简陋的自定义modal */}
      <div className="modal-wrap absolute top-0 left-0 h-full w-full flex-center text-center" style={{ display: showModal ? "flex" : "none" }}>
        <div className=" relative clay modal animate__bounceIn" onClick={(e) => { stopPropagation(e) }}>
          <div className=" absolute top-4 right-4 bg-blue text-black w-6 h-6 flex-center" onClick={() => { onClose() }}>
            <Icon icon="uil:multiply" />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
