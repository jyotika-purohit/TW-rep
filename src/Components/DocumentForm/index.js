import  React , {Component} from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";
import message from "antd/es/message";

class DocumentForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            text:''
        }
    }

    componentDidMount(){
        console.log("34687236482364827 ====>>>>>>>>> ",{props:this.props});
        const {location:{state:{doc_id} = {} } = {} } = this.props;
        const {documents = {}} = this.props;
        const {name='',text=''}=documents[doc_id] || {};
        this.setState({name,text});

    }

    componentDidUpdate(prevProps,prevState){
    }

    updateName= (e) => {
        const name = e.target.value || '';
        this.setState({name});
    }

    updateText = (e) => {
        const text = e.target.value || '';
        this.setState({text});
    }


    handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const {location:{state:{doc_id=null} = {} } = {},handleOnClick } = this.props;
            handleOnClick(e);
            const {addDoc,editDoc,history} = this.props;
            const {name='',text=''}=this.state;
            if(doc_id){
                const res = await editDoc({name,text,doc_id});
                message.success("Document updated!");

            }else{
                const res = await addDoc({name,text});
                message.success("Document created!");


            }
            this.setState({name:'',text:''});
            history.push(`/`);

        }catch(error){
            message.warn(error);
            console.log("error",{error});
        }

    }

    render(){

        const { name = '' , text = '' } = this.state;
        const { edit_doc_id = null  } = this.props;
        const {location:{state:{doc_id} = {} } = {} } = this.props;

        return   (
            <div  style={{margin:"100px",width:"50%"}}  >
                {
                    doc_id
                    ?
                    (
                        <div style={{fontSize:"16"}} >
                            Edit Document
                        </div>
                    )
                    :
                    (
                        <div style={{fontSize:"16"}} >
                            Add Document
                        </div>
                    )
                }
                
                <div style={{marginTop:"10px"}}  >
                        <Input 
                            placeholder="Document Name"
                            onChange={this.updateName} 
                            value={name}
                            >
        
                        </Input>
        
                        <Input
                            placeholder="Text"
                            onChange={this.updateText}
                            style={{marginTop:"10px"}}
                            value={text}
                        >
                        </Input>
                        <Button type="primary"
                        onClick={this.handleSubmit}
                        style={{marginTop:"10px"}}
                         >
                             Submit
                        </Button>
                </div>
                
            </div>
        )
    }
}

export default DocumentForm;