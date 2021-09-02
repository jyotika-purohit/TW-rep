import React from "react";

import { TABLE_COLUMN } from "../helper";
import Name from "../dataColumn/name";
import Text from "../dataColumn/text";
import EditButton from "../dataColumn/edit";
import DeleteButton from "../dataColumn/delete";

export default props => {


  return [
    {
      title: "Name",
      ...TABLE_COLUMN.NAME,
      render: data => {
        const { document } = data || {};
        return (
          <Name document={document} />
        );
      },
      sorter: (a, b) => {
        
        const {document : {name : aName=''} = {}} = a[TABLE_COLUMN.NAME.dataIndex] || {};
        const {document : {name : bName=''} = {}} = b[TABLE_COLUMN.NAME.dataIndex] || {};
        console.log("38712397182 a, b", {aName, bName});

        if(aName<bName) {
          return 1;
        } else {
          return -1;
        }
  
      },
    //   sortOrder : sort_order ===  "ascend" ? "ascend" : "descend"
    },
    {
      title: "Text",
      ...TABLE_COLUMN.TEXT,

      render: ({document}) => <Text document={document} />
    },
    {
      title: "",
      ...TABLE_COLUMN.EDIT,

      render: ({openEditForm,  id, document}) => <EditButton 
        id={id} 
        action={openEditForm}
        document={document}
      />
    },
    {
        title: "",
        ...TABLE_COLUMN.DELETE,
  
        render: ({deleteRecord,  id, document}) => <DeleteButton 
          id={id} 
          action={deleteRecord}
          document={document}
        />
      }
  ];
};
