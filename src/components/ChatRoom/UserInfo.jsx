import { Avatar, Button, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../firebase/config';
import { AuthContext } from '../../context/AuthProvider';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: #000;
    margin-left: 5px;
  }
`;

const UserInfo = () => {
  // useEffect(() => {
  //   db.collection('users').onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // });

  const {
    user: { displayName, email, photoURL },
  } = useContext(AuthContext);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}></Avatar>
        <Typography.Text className='username'>{displayName}</Typography.Text>
      </div>
      <Button onClick={() => auth.signOut()}>Đăng xuất</Button>
    </WrapperStyled>
  );
};

export default UserInfo;
