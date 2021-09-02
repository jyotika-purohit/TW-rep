import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DocumentTable from "../Components/DocumentTable";
import { addDoc,editDoc,deleteDoc } from "../modules/documents";

const mapStateToProps = state => {
  const {
      documents
  } = state;
  

  return {
    documents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDoc : payload => dispatch(addDoc(payload)),
    editDoc : payload => dispatch(editDoc(payload)),
    deleteDoc : doc_id => dispatch(deleteDoc(doc_id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DocumentTable)
);
