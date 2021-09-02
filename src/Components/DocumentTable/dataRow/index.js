import { TABLE_COLUMN } from "../helper";

export default data => {
  const { id, document={},openEditForm, deleteRecord } = data;

  return {
    key: id,
    [TABLE_COLUMN.NAME.dataIndex]: {
      document
    },
    [TABLE_COLUMN.TEXT.dataIndex]: {
        document
    },
    [TABLE_COLUMN.EDIT.dataIndex]: {
      id,
      openEditForm,
      document
    },
    [TABLE_COLUMN.DELETE.dataIndex]: {
        id,
        deleteRecord,
        document
    },
  };
};
