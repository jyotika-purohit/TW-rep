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


    handleSignin = async (e) => {
        try{
            e.preventDefault();
            const {doSignUp,history,handleOnClick} = this.props;
            handleOnClick(e);
            const {email='',password=''}=this.state;
            const res = await doSignUp({email,password});
            message.success("Sign Up Complete");
            this.setState({email:'',password:''});
            history.push(`/sign-in`);

        }catch(error){
            message.warn(error);
            console.log("error",{error});
        }

    }

    render(){
        const {email='',password=''}=this.state;
        return (
            <div  style={{margin:"100px",width:"50%"}}  >
                <div style={{fontSize:"16"}} >
                    Sign Up
                </div>
                <div style={{marginTop:"10px"}}  >
                        <Input 
                            placeholder="Email"
                            onChange={this.updateEmail} 
                            value={email}
                            >
        
                        </Input>
        
                        <Input
                            placeholder="Password"
                            onChange={this.updatePassword}
                            style={{marginTop:"10px"}}
                            value={password}
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