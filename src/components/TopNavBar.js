import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import {setLang} from "../redux/actions/env-actions";

import {PageHeader, Button, Dropdown, Menu, Icon,Modal,Radio,message} from 'antd';

import {injectIntl} from 'react-intl';

import { withRouter } from 'react-router-dom';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const menu = (
    <Menu>
        <Menu.Item key="11">Operation</Menu.Item>
        <Menu.Item key="22">Operation</Menu.Item>
        <Menu.Item key="33">Operation</Menu.Item>
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
        
    const isMainPage = ["","/"].includes(props.history.location.pathname );
    const pageHeaderOnBack = isMainPage?{}:{onBack:() => window.history.back()};

    const MobileTopNavBar = () => (
        <div>
            <PageHeader
                {...pageHeaderOnBack}
                title={<div style={{marginTop:"7px"}}>{props.intl.messages["app.title"]}</div>}
                extra={(props.env.siderMenuCollapsed)?[

                    <Dropdown key="3" overlay={menu} placement="bottomRight">
                        <Button ><Icon type="ellipsis" /></Button>
                    </Dropdown>,
                    <Button key="4" type="primary" onClick={showModal}>
                        {props.intl.messages["app.language"]}
                    </Button>,
                ]:null}
            />
        </div>
    );
    const DesktopTopNavBar = () => (
        <div>
            <PageHeader
                {...pageHeaderOnBack}
                title={<div style={{marginTop:"7px"}}>{props.intl.messages["app.title"]}</div>}
                subTitle={props.intl.messages["app.subtitle"]}
                extra={[
                    <Button key="1">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Dropdown key="3" overlay={menu} placement="bottomRight">
                        <Button><Icon type="ellipsis" /></Button>
                    </Dropdown>,
                    <Button key="4" type="primary" onClick={showModal}>
                        {props.intl.messages["app.language"]}
                    </Button>,
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