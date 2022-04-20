import React from 'react';
import {connect} from "react-redux";
import {Layout,BackTop} from "antd";

function PageLayout(props) {

    const Mobile = () => (
        <Layout.Content><BackTop />{props.content}</Layout.Content>
    );
    const Desktop = () => (
        <Layout>
            <BackTop />
            <Layout.Content>{props.content}</Layout.Content>
            <Layout.Sider theme="light">
                {props.sider}
            </Layout.Sider>
        </Layout>
    );

    return (props.env.isMobile)?(
        <Mobile/>
    ):(<Desktop/>);
}
const mapStateToProps = (state, props) => {
    return {...state,...props};
};

export default connect(mapStateToProps)(PageLayout);