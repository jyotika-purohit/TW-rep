import React from "react";
import { Spin } from "antd";

export default props => {
    const {color=null}=props;
    return ( <Spin size="default"  />)
};