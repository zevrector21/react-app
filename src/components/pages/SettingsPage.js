import React, {Component} from 'react';
import {Typography, Icon, Divider, Button} from 'antd';
import { Link } from 'react-router-dom';
import PageLayout from "../PageLayout";

const { Title,Text } = Typography;



function SettingsPage(props) {

    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Title level={3}>Settings</Title>
            <Text>
                This guideline shows what operations can be done and how to done.
                Before we start, let's look what is our folder structure:
            </Text>

            <Divider/>

            <Title level={4}>Second Part<Link to="#second-part" id={"second-part"}> #</Link></Title>
            <p>Lorem Ipsum</p><br/>
            <p>Lorem Ipsum</p><br/>
        </div>
    );
}

export default SettingsPage;