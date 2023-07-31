import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth, db } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/service';

// Init const
const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const handleFacebookLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName),
      });
    }
  };
  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: '100%', marginBottom: 5 }}>
            Đăng nhập bằng google
          </Button>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            onClick={() => handleFacebookLogin(fbProvider)}
          >
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
