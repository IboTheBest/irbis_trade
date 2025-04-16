import React from 'react';
import { Modal, Spin } from 'antd';
import { Loading } from './Loading';
const LoadingModal = ({ visible = false, message = "Загрузка..." }) => {
  return (
    <Modal
      open={visible}
      footer={null}
      closable={false}
      centered
      maskClosable={false}
    >
    <Loading/>
      <div className='text-center' style={{ marginTop: 16 }}>{message}</div>
    </Modal>
  );
};

export default LoadingModal;
