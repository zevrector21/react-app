import React, {Component} from 'react';
import {Typography, Icon, Divider, Button} from 'antd';
import { Link } from 'react-router-dom';
import PageLayout from "../PageLayout";

const { Title,Text } = Typography;



function SettingsPage(props) {

    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Title level={4}>Settings</Title>
            
            <Divider/>
        </div>
    );
}

export default SettingsPage;