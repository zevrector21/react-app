import React from 'react';
import { Link } from "react-router-dom";
import { Empty } from "antd";

function NoPageFound(props) {
        return (
            <div>
                <Empty description={
                    <span>
                        We couldn't load the page you are looking for. Sorry.
                    </span>
                }>
                    <Link to={"/"}>Go Home</Link>
                </Empty>
            </div>
        );
}

export default NoPageFound;