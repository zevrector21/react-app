import React, {Component} from 'react';
import {Typography, Icon, Divider, notification, Button} from 'antd';
import { Link } from 'react-router-dom';
import PageLayout from "../PageLayout";

const { Title,Text } = Typography;

const openNotification = (url,fileName,isFolder) => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => {notification.close(key);window.open(url,'_blank');}}>
            Open
        </Button>
    );
    notification.open({
        message: <Typography>{`Open `}<Text mark>{`${fileName}`}</Text> {`${isFolder?"Folder":"File"} on Github?`}<Icon type="github" style={{paddingLeft:"10px"}}/></Typography>,
        description: `A new tab will open with ${url}`,
        btn,
        key,
    });
};

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