import React, {Component} from "react";
import generateRow from "./dataRow";
import getColumn from "./Header/index";
import Table from "antd/es/table";
import { message } from "antd";

class DocumentTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            vital_ids: []
        };
    }

    componentDidMount() {
    }

    getDataSource = () => {
        const {
            documents
        } = this.props;

       
        return Object.keys(documents).map((id) => {
            const eachDoc = documents[id];
            return generateRow({
                id,
                document:eachDoc,
                openEditForm:this.openEditForm,
                deleteRecord:this.deleteRecord
            });
        });
    };

    openEditForm = (id) => (e) => {
        e.preventDefault();
        const {handleOnClick}=this.props;
        handleOnClick(e);
        this.props.history.push({
            pathname: `/edit-document`,
            state: { doc_id:id }
          });
    };


    deleteRecord = (id) => e => {
        e.preventDefault();
        const {handleOnClick}=this.props;
        handleOnClick(e);
        const {deleteDoc}=this.props;
        const res = deleteDoc(id);
        message.success("Document deleted");
    }

    

    render() {

               
        const { 
            // getLoadingComponent, 
            getDataSource } = this;

        const tableLocale = {
            emptyText:"No document found"
        }

        return (
            <Table
                rowClassName={() => "pointer"}
                columns={getColumn({
                    // sort_order
                })}
                dataSource={getDataSource()}
                scroll={{ x: '100%' }}
                pagination={{
                    position: "bottom",
                    pageSize:3
                }}
                locale={tableLocale}
            />
        );
    }
}

export default DocumentTable;