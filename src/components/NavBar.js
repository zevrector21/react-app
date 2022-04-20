import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { Layout, Menu, Icon} from 'antd';

import {setCollapsed} from "../redux/actions/env-actions";

import {injectIntl} from 'react-intl';

import { Link, withRouter } from 'react-router-dom';

const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;


function NavBar(props) {

    const onCollapse = (collapsed) => {
        props.setCollapsed(collapsed);
    };

    const toggle = () => {
        props.setCollapsed(!props.env.siderMenuCollapsed);
    };

    // When adding new menu item give it's key the pathname
    //props.location.pathname
    const siderProp = (props.env.isMobile)?
        {   breakpoint:"lg",
            collapsedWidth:"0",
            collapsible:true
            }:
        {collapsible:true};
    const navBarTheme = "light";
    const menuStyle = { // laggy for now
       // position:'fixed',overflow: "hidden !important",maxWidth:"200px"
    };

    return (
        <Sider
            {...siderProp}
            collapsed={props.env.siderMenuCollapsed}
            onCollapse={onCollapse}
            theme={navBarTheme}
            style={{ zIndex: 10}}
        >

            <div className="logo"/>
            <Menu theme={navBarTheme} defaultSelectedKeys={[props.location.pathname]} mode="inline" style={menuStyle}>
                <Menu.Item key="/">
                    <Link to="/">
                        <Icon type="home" />
                        <span>{props.intl.messages["nav.Home"]}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>{props.intl.messages["nav.Test"]}</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>{props.intl.messages["nav.Test"]}</span></span>}
                >
                    <Menu.Item key="3">{props.intl.messages["nav.Test"]}</Menu.Item>
                    <Menu.Item key="4">{props.intl.messages["nav.Test"]}</Menu.Item>
                    <Menu.Item key="5">{props.intl.messages["nav.Test"]}</Menu.Item>
                </SubMenu>

                    <Menu.Item key="/getting-started">
                        <Link to="/getting-started">
                            <Icon type="file" />
                            <span>{props.intl.messages["nav.gettingStarted"]}</span>
                        </Link>
                    </Menu.Item>

            </Menu>

        </Sider>


    );
}
const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setCollapsed
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(injectIntl(NavBar)));
