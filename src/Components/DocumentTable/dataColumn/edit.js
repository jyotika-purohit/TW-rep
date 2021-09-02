import React from "react";
import Tooltip from "antd/es/tooltip";
import EditFilled from "@ant-design/icons/EditFilled";

export default props => {
  const { action, id } = props || {};

  return (
    <Tooltip placement="bottom" title={"Edit"}>
      <div className="p10" onClick={action(id)}>
        <div className="flex align-center justify-center">
       
            <EditFilled
              style={{ fontSize: '18px', color:"#1890ff",width:"20" }}
            />
           
        </div>
      </div>
    </Tooltip>
  );
};
