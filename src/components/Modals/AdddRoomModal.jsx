import { Form, Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import { addDocument } from '../../firebase/service';
import { AuthContext } from '../../context/AuthProvider';

const AdddRoomModal = () => {
  const [form] = Form.useForm();
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);

  const {
    user: { uid },
  } = useContext(AuthContext);

  const handleOK = () => {
    // Add new Room to FireStore
    addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
    // Reset Form Value
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // Reset Form Value
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  return (
    <div>
      <Modal
        title='Tạo phòng'
        open={isAddRoomVisible}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item name='name' label='Tên phòng'>
            <Input placeholder='Nhập tên phòng' />
          </Form.Item>
          <Form.Item name='description' label='Mô tả'>
            <Input.TextArea placeholder='Nhập mô tả' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdddRoomModal;
