import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {setDimensions,setIsMobile} from "./redux/actions/env-actions";
import {Layout} from "antd";

import NavBar from "./components/NavBar";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";

import Routes from "./Routes";


function App(props) {

    useEffect(() => {
        props.setDimensions(window.innerWidth,window.innerHeight);
        if (window.innerWidth<480) props.setIsMobile(true);
    }, []);

    // componentDidMount() {
    //     window.addEventListener("resize", updateDimensions);
    // };

    const updateDimensions = () => {
        props.setDimensions(window.innerWidth,window.innerHeight);
        if (window.innerWidth<480) props.setIsMobile(true);
        else props.setIsMobile(false);
    };

    return (
        <div className="App" style={{minHeight:"90vh"}}>
            <Layout>
                <NavBar/>
                <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }} >
                        <TopNavBar/>
                    </Layout.Header>
                        <Routes/>
                        <Footer/>
                </Layout>
            </Layout>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setDimensions,
    setIsMobile
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
