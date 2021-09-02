export const SIGNIN_COMPLETE = "SIGNIN_COMPLETE";
export const SIGNOUT_COMPLETE="SIGNOUT_COMPLETE";

export const doSignIn = payload => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: SIGNIN_COMPLETE,
                data:payload
            });

        } catch (error) {
            console.log("sign in MODULE catch error -> ", error);
        }
        return response;
    }
};


export const doSignOut = () => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: SIGNOUT_COMPLETE,
                data:{}
            });

        } catch (error) {
            console.log("sign out MODULE catch error -> ", error);
        }
        return response;
    }
};

function signInReducer(state, data) {
    const {email='',password = ''}=data || {} ;

    const auth={
        email, 
        password
    }
    if (email && password) {
        return {
            ...state,
            ...auth,
        };
    } else {
            return state;
        
        
    }
}

function signOutReducer(state, data) {

    return {};
        
}

export default (state = {}, action) => {
    const { type, data } = action;
    switch (type) {
        case SIGNIN_COMPLETE:
            return signInReducer(state, data);
        case SIGNOUT_COMPLETE:
            return signOutReducer(state, data);
        default:
            return state;
    }
};
