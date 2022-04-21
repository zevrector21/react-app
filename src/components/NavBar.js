import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Row} from 'antd';
import {setCollapsed} from "../redux/actions/env-actions";
import {injectIntl} from 'react-intl';
import { Link, withRouter } from 'react-router-dom';

const { Sider } = Layout;
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
    const navBarTheme = "dark";
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
            <Row className="logo" type="flex" justify="center" align="top" style={{margin: 10}}>
                <Link to="/"><img width={40} src="favicon2.png" /></Link>
            </Row>
            <Menu theme={navBarTheme} defaultSelectedKeys={[props.location.pathname]} mode="inline" style={menuStyle}>
                <Menu.Item key="/">
                    <Link to="/">
                        <Icon type="home" />
                        <span>{props.intl.messages["nav.home"]}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/products">
                        <Icon type="desktop" />
                        <span>{props.intl.messages["nav.products"]}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/settings">
                    <Link to="/settings">
                        <Icon type="user" />
                        <span>{props.intl.messages["nav.settings"]}</span>
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
