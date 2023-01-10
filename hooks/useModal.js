import { useState, useEffect } from "react";

export default function useModal() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        // 在 document 上绑定点击事件，隐藏弹出层
        document.addEventListener("click", (e) => setShowModal(false));
    }, [])

    // 封装后的阻止冒泡功能
    const stopPropagation = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }

    const onShow = (e) => {
        // 使用 react 的 e.stopPropagation 不能阻止冒泡，需要使用 e.nativeEvent.stopImmediatePropagation
        stopPropagation(e);
        setShowModal(true)
    }

    const onClose = () => {
        setShowModal(false)
    }


    return [showModal, onShow, onClose, stopPropagation]

}
