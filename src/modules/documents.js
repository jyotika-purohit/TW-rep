export const ADD_DOC = "ADD_DOC";
export const DELETE_DOC = "DELETE_DOC";
export const EDIT_DOC = "EDIT_DOC";


export const addDoc = payload => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: ADD_DOC,
                data:payload
            });

        } catch (error) {
            console.log("ADD_DOC MODULE catch error -> ", error);
        }
        return response;
    }
};

export const deleteDoc = (doc_id) => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: DELETE_DOC,
                data:{doc_id}
            });

        } catch (error) {
            console.log("DELETE_DOC MODULE catch error -> ", error);
        }
        return response;
    }
};

export const editDoc = payload => {
    let response = {};
    return async dispatch => {
        try {
           
            dispatch({
                type: EDIT_DOC,
                data:payload
            });

        } catch (error) {
            console.log("EDIT_DOC MODULE catch error -> ", error);
        }
        return response;
    }
};


function addDocReducer(state, data) {
    const {name='',text = ''}=data || {} ;
    const doc={
        name, 
        text
    }

    if (name) {
        return [
            ...state,
            {...doc}

        ];
    } else {
            return state;
        
        
    }
}

function editDocReducer(state, data) {
    const {doc_id=null,name='',text = ''}=data || {} ;
    const doc={
        name, 
        text
    }

    if (doc_id) {
        const docs = state;
        const index = doc_id;
          if (index > -1) {
    
            console.log("34823487263487628472 ---->>>>> ",{docs})
            docs.splice(index, 1);
            let updated_arr = [];
            console.log("34823487263487628472 ++++++++ ",{docs})
            for(let each of docs){
              updated_arr.push(each);
            }

            updated_arr.push(doc);

            return [...updated_arr];
          }else{
    
            return state;
            
          }
    } else {
            return state;
        
    }
}


function deleteDocReducer(state, data) {
    const {doc_id = null} = data || {};
    console.log("34687264873264826842637",{data});

    if (doc_id) {
        const docs = state;
        const index = doc_id;
          if (index > -1) {
    
            docs.splice(index, 1);
            let updated_arr = [];
            for(let each of docs){
              updated_arr.push(each);
            }
            console.log("34687264873264826842637",{updated_arr});

            return [...updated_arr];
          }else{
    
            return state;
            
          }
    } else {
            return state;
        
    }

  
}

export default (state = [], action) => {
    const { type, data } = action;
    switch (type) {
        case ADD_DOC:
            return addDocReducer(state, data);
        case DELETE_DOC:
            return deleteDocReducer(state, data);
        case EDIT_DOC:
            return editDocReducer(state, data);
        default:
            return state;
    }
};
