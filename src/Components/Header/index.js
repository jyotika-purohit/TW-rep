import Button from "antd/es/button";



export default (props) => {
    const {auth={},auth : {email='',password=''} = {}} = props;

    function handleSignOut (e) {
        e.preventDefault();
        const {handleOnClick}=props;
        handleOnClick(e);
        const {doSignOut} = props;
        doSignOut();
    }

    function openDocumentForm (e){
        e.preventDefault();
        const {handleOnClick}=props;
        handleOnClick(e);
        const {history}=props;
        history.push("/add-document");
    }

    function goToHome(e){
        e.preventDefault();
        const {handleOnClick}=props;
        handleOnClick(e);
        const {history}=props;
        history.push("/");
    }

    function handleSignIn(e){
        e.preventDefault();
        const {handleOnClick}=props;
        handleOnClick(e);
        const {history}=props;
        history.push("/sign-in");
    }

    function handleSignUp(e){
        e.preventDefault();
        const {handleOnClick}=props;
        handleOnClick(e);
        const {history}=props;
        history.push("/sign-up");
    }


    return(
        <div  >
            {
                Object.keys(auth).length>0
                ?
                (
                   <div style={{padding:"10px", width:"100%",display:"flex",justifyContent:"space-between"}} >
                        <h1>{email}</h1>
                        <Button type="ghost"
                            onClick={openDocumentForm}
                        >Add Document</Button>
                        <Button type="ghost"
                            onClick={goToHome}
                        >Home</Button>
                        <Button type="primary"
                            onClick={handleSignOut}
                        >Sign Out</Button>
                    </div>
                   )
                   :
                   (
                    <div style={{padding:"10px",width:"100%",display:"flex",justifyContent:"space-between"}} >
                        <Button type="primary"
                            onClick={handleSignIn}
                        >Sign In</Button>
                       
                        <Button type="primary"
                            onClick={handleSignUp}
                        >Sign Up</Button>
                    </div>
                   )
            }
           
        </div>
    )
}