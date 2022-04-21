import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Icon, Divider, notification, Button } from 'antd';

const { Title,Text } = Typography;

function LoginPage(props) {

  return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Title level={3}>Login</Title>
            <Text>
                Login details will be here.
            </Text>
            <Divider/>
        </div>
    );
}

export default LoginPage;
