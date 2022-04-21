import React from 'react';
import { Layout,Row,Divider,Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Timeline, Icon } from 'antd';

const { Title,Text } = Typography;
const { Content } = Layout;

function HomePage(props) {

    return (
        <div>
            <Content style={{minHeight:"76.1vh" }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Title level={3}>
                        <FormattedMessage
                            id="home.title"
                        />
                    </Title>
                    <Row type="flex" justify="center" align="top">
                        <Divider/>
                        <Divider/>
                    </Row>
                </div>
            </Content>
        </div>
    )
}

export default HomePage;