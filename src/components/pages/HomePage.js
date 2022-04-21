import React from 'react';
import { Layout,Row, Col, Divider,Typography, Input, Button, Form, Radio, Select, Switch, notification } from 'antd';
import { FormattedMessage } from 'react-intl';
import { AmazonOutlined } from '@ant-design/icons';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const { Title,Text } = Typography;
const { Content } = Layout;

function HomePage(props) { 

    const [form] = Form.useForm();
    const onSubmitHandler = (values) => {
        console.log('~~~~~~~~~~~', values)
        
        notification.success({
            message: <Typography>Saved successfully!</Typography>
        });
    }

    const methods = [
        {label: 'If competitors ASIN price is lower reduce OUR ASIN price to $0.01 less then lowest priced competitor ASIN.', value: '1'},
        {label: 'If lowest competitors ASIN price is higher than OUR ASIN increase our ASIN price to be $0.05 of the lowest price competitors ASIN. (if our price is not within $0.05 of the lowest comp ASIN).', value: '2'},
        {label: 'Set our ASIN price to be the same as the lowest comp ASIN', value: '3'},
        {label: 'Set our ASIN price to be the average price of our comp ASIN', value: '4'},
        {label: 'Set our ASIN price to be the highest price of our comp ASIN', value: '5'},
    ]

    const schedules = [
        {label: 'Every month', value: 'Every month'},
        {label: 'Every week', value: 'Every week'},
        {label: 'Every day', value: 'Every day'},
        {label: 'Every 12 hours', value: 'Every 12 hours'},
        {label: 'Every 6 hours', value: 'Every 6 hours'},
        {label: 'Every hour', value: 'Every hour'},
        {label: 'Every minute', value: 'Every minute'},
        {label: 'Every 5 seconds', value: 'Every 5 seconds'},
    ]

    return (
        <div>
            <Content style={{minHeight:"76.1vh" }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Title level={4}>
                        Products
                    </Title>
                    <Divider/>
                    <Form
                        name="basic"
                        form={form}
                        onFinish={onSubmitHandler}
                        requiredMark={false}
                        layout="horizontal"
                    >
                        <Row>
                            <Col span={12} style={{ paddingRight: 18 }}>
                                <Form.Item
                                    label="ASIN of Our Product"
                                    name="asin"
                                    rules={[{ required: true, message: 'Required' }]}
                                >
                                    <Input prefix={<AmazonOutlined />} placeholder="Enter the ASIN of the product" />
                                </Form.Item>
                                <Form.Item
                                    label="ASIN of Competitors"
                                    name="competitorAsins"
                                    rules={[{ required: true, message: 'Required' }]}
                                >
                                    <Input.TextArea prefix={<AmazonOutlined />} 
                                        placeholder="Enter the ASINs of the competitor products" 
                                        rows={7}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12} style={{ paddingLeft: 18 }}>
                                <Form.Item
                                    label="Choose a Logic"
                                    name="logic"
                                    rules={[{ required: true, message: 'Required' }]}
                                >
                                    <Select options={methods} placeholder="Choose a logic"></Select>
                                </Form.Item>
                                <Form.Item
                                    label="Time Schedule"
                                    name="schedule"
                                    rules={[{ required: true, message: 'Required' }]}
                                >
                                    <Select options={schedules} placeholder="Choose a schedule"></Select>
                                </Form.Item>
                                <Divider/>
                                <Form.Item layout="horizontal" label="Output all ASIN price to a log" name='savePrice' valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                                <Form.Item label="Output all schedule process to a log" name='saveSchedule' valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row type="flex" justify="end" align="top">
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                    <Divider/>

                </div>
            </Content>
        </div>
    )
}

export default HomePage;