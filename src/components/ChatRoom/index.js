import { Col, Row } from 'antd';
import React from 'react';
import SideBar from './SideBar';
import ChatScreen from './ChatScreen';

const ChatRoom = () => {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <ChatScreen />
      </Col>
    </Row>
  );
};

export default ChatRoom;
