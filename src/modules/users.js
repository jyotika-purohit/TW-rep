export const SIGNUP_COMPLETE = "SIGNUP_COMPLETE";

export const doSignUp = payload => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: SIGNUP_COMPLETE,
                data:payload
            });

        } catch (error) {
            console.log("sign up MODULE catch error -> ", error);
        }
        return response;
    }
};

function signUpReducer(state, data) {
    const {email='',password = ''}=data || {} ;
    const auth={
        email, 
        password
    }

    const { users = {} } = state;

    if (email && password) {
        return [
            ...state,
            {...auth}

        ];
    } else {
            return state;
        
        
    }
}

export default (state = [], action) => {
    const { type, data } = action;
    switch (type) {
        case SIGNUP_COMPLETE:
            return signUpReducer(state, data);
        default:
            return state;
    }
};
