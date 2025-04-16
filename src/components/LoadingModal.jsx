import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import loadingIcon from "../assets/images/Rolling_1x-1.2s-239px-239px-removebg-preview.png";
import secondIcon from "../assets/images/image-removebg-preview.png";

const LoadingModal = ({ visible = true, message = "Загрузка..." }) => {
    const [currentIcon, setCurrentIcon] = useState(loadingIcon);
    const [internalVisible, setInternalVisible] = useState(visible);

    useEffect(() => {
        const changeTimer = setTimeout(() => {
            setCurrentIcon(secondIcon);
        }, 1000);

        const closeTimer = setTimeout(() => {
            setInternalVisible(false);
        }, 1500);

        return () => {
            clearTimeout(changeTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    return (
        <Modal
            className='flex items-center justify-center'
            open={internalVisible}
            footer={null}
            closable={false}
            centered
            maskClosable={false}
            maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            bodyStyle={{ textAlign: 'center', padding: '40px' }}
        >
            <img className='mx-auto' src={currentIcon} alt="" width={200} height={200} />
            <div style={{ marginTop: 16 }}>{message}</div>
        </Modal>
    );
};

export default LoadingModal;
