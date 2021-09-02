import React,{Component} from "react";
import Input from "antd/es/input";
import { Button } from "antd";
import message from "antd/es/message";

class Signin extends Component{
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

            const {doSignIn , users = [],history,handleOnClick } = this.props;
            handleOnClick(e);
            const {email='',password=''}=this.state;
            let flag=false;

            for(let each of users){
                const { email:mail,password:pass }=each || {};
                if(email === mail && password === pass){
                    const res = await doSignIn({email,password});
                    message.success("Sign In Complete");
                    flag=true;
                    this.setState({email:'',password:''});
                    history.push(`/`);
                    break;
                }
            }

            if(!flag){
                message.error("User with credentials does not exist")
            }

           
        }catch(error){
            message.warn(error);
            console.log("error",{error});
        }

    }

    render(){
        const {email='',password=''}=this.state;
        console.log("32428374682634872 =>>>>>>>>> ",{props:this.props});
        return (
            <div  style={{margin:"100px",width:"50%"}}  >
                <div style={{fontSize:"16"}} >
                    Sign In
                </div>
                <div style={{marginTop:"10px"}}  >
                        <Input 
                            placeholder="Email"
                            onChange={this.updateEmail} 
                            value={email}
                            required
                            >
        
                        </Input>
        
                        <Input
                            placeholder="Password"
                            onChange={this.updatePassword}
                            style={{marginTop:"10px"}}
                            value={password}
                            required
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

export default Signin;