export const SIGNIN_COMPLETE = "SIGNIN_COMPLETE";

export const doSignin = payload => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: SIGNIN_COMPLETE,
                data:payload
            });

        } catch (error) {
            console.log("SEARCH DEGREE MODULE catch error -> ", error);
        }
        return response;
    }
};

function signinReducer(state, data) {
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

export default (state = {}, action) => {
    const { type, data } = action;
    switch (type) {
        case SIGNIN_COMPLETE:
            return signinReducer(state, data);
        default:
            return state;
    }
};
