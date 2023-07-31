import { Button, Collapse, Typography } from 'antd';
import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../context/AppProvider';

const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: #000;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: #000;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: #000;
`;

const RoomList = () => {
  const {
    rooms,
    isAddRoomVisible,
    setIsAddRoomVisible,
    setlectedRoomdID,
    setSelectedRoomdID,
  } = useContext(AppContext);
  // console.log(rooms);
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse defaultActiveKey={['1']}>
      <PanelStyled header='Danh sách các phòng' key='1'>
        {rooms?.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomdID(room.id)}>
            {room.name}
          </LinkStyled>
        ))}

        <Button
          type='text'
          className='add-room'
          icon={<PlusSquareOutlined />}
          onClick={handleAddRoom}
        >
          Thêm Phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
/**
 * rooms: {
 *  name: 'room name',
 *  description: '...',
 *  members: [uid_1, uid_2, ....],
 *  createdAt:...
 * }
 */
