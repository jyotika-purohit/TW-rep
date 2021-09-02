import React from "react";
import Tooltip from "antd/es/tooltip";
import DeleteFilled from "@ant-design/icons/DeleteFilled";

export default props => {
  const { action, id } = props || {};

  return (
    <Tooltip placement="bottom" title={"Delete"}>
      <div className="p10" onClick={action(id)}>
        <div className="flex align-center justify-center">
       
            <DeleteFilled
              style={{ fontSize: '18px', color:"#1890ff",width:"20" }}
            />
           
        </div>
      </div>
    </Tooltip>
  );
};
