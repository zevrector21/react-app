import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {setLang} from "../redux/actions/env-actions";

import {PageHeader, Button, Dropdown, Menu, Icon,Modal,Radio,message, Typography } from 'antd';

import {injectIntl} from 'react-intl';

import { withRouter } from 'react-router-dom';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Title,Text } = Typography;

const menu = (
    <Menu>
        <Menu.Item key="11">Products</Menu.Item>
        <Menu.Item key="33">Log out</Menu.Item>
    </Menu>
);


function TopNavBar(props) {

    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = (e) => {
        console.log(e);
        setVisible(false)
    };

    const handleCancel = (e) => {
        setVisible(false)
    };

    const onChange =(e) => {
        props.setLang(e.target.value);
        message.success('This is a message of success');
    };

    const formatPathName = (path) =>{
        let pathName = path.replace("/"," ");
        pathName = pathName.replace("-"," ");
        return pathName;
    };

    const appTitle = 'Compare Product Price with Amazon'

    const MobileTopNavBar = () => (
        <div>
            <PageHeader
                title={<Title level={3} className="m-0">{appTitle}</Title>}
                extra={(props.env.siderMenuCollapsed)?[
                    <Dropdown key="3" overlay={menu} placement="bottomRight">
                        <Button ></Button>
                    </Dropdown>,
                ]:null}
            />
        </div>
    );
    const DesktopTopNavBar = () => (
        <div>
            <PageHeader
                title={
                    <Title level={3} className="m-0">{appTitle}</Title>
                }
                extra={[
                    <Dropdown key="3" overlay={menu} placement="bottomRight">
                        <Button></Button>
                    </Dropdown>
                ]}
            />
        </div>
    );

    const SetLangModal = () => (
        <Modal
            title={props.intl.messages["app.selectLang"]}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>{props.intl.messages["app.Return"]}</Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    {props.intl.messages["app.OK"]}
                </Button>,
            ]}
        >
            <RadioGroup onChange={onChange} defaultValue={props.env.lang}>
                <RadioButton value="en">English</RadioButton>
                <RadioButton value="tr">Türkce</RadioButton>
                <RadioButton value="?" disabled>Beijing</RadioButton>
            </RadioGroup>
        </Modal>
    );

    if (props.env.isMobile)
        return (
            <>
                <MobileTopNavBar style={{overflow:"hidden"}}/>
                <SetLangModal/>
            </>
        );
    else return (
        <>
            <DesktopTopNavBar style={{overflow:"hidden"}}/>
            <SetLangModal/>
        </>
    );
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setLang,
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(injectIntl(TopNavBar)));