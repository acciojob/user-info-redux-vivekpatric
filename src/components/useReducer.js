const intialState = {
    name : '',
    email : ''
}

const useReducer = (state = intialState, action) => {
    switch(action.type){
        case 'UPDATE_NAME' :
            return{
                ...state,
                name : action.payload
            };
        case 'UPDATE_EMAIL' :
            return{
                ...state,
                email : action.payload
            };
        default:
            return state;
    }
}

export default useReducer;