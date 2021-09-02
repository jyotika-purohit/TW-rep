import React,{Component} from "react";
import Input from "antd/es/input";
import { Button } from "antd";
import message from "antd/es/message";

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    updateEmail = (e) => {
        const email = e.target.value || '';
        this.setState({email})
    }

    updatePassword = (e) => {
        const password = e.target.value || '';
        this.setState({password})
    }


    handleSignin = async () => {
        try{
            const {doSignin} = this.props;
            const {email='',password=''}=this.state;
            const res = await doSignin({email,password});
            message.success("Sign In Complete");
        }catch(error){
            message.warn(error);
            console.log("error",{error});
        }

    }

    render(){
        return (
            <div  style={{margin:"100px",width:"50%"}}  >
                <div style={{fontSize:"16"}} >
                    Sign Up
                </div>
                <div style={{marginTop:"10px"}}  >
                        <Input 
                            placeholder="Email"
                            onChange={this.updateEmail} 
                            >
        
                        </Input>
        
                        <Input
                            placeholder="Password"
                            onChange={this.updatePassword}
                            style={{marginTop:"10px"}}
                        >
                        </Input>
                        <Button type="primary"
                        onClick={this.handleSignin}
                        style={{marginTop:"10px"}}
                         >
                             Submit
                        </Button>
                </div>
                
            </div>
        )
    }
}

export default Signup;