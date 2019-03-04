const initState = {
    authErr: {},
};

const authReducer = (state = initState,action) =>{
    switch(action.type){
        case 'LOGIN_SUCCESS':{
            return {
                ...state,
                authErr:{},
            };
        }
        case 'LOGIN_ERROR':{
            return{
                ...state,
                authErr:action.err,
            };
        }
        case 'LOGOUT_SUCCESS':{
            return{
                ...state,
            };
        }
        case 'LOGOUT_ERROR':{
            return{
                ...state,
            };
        }
        case 'SIGNUP_SUCCESS':{
            return{
                ...state,
                authErr:'{}',
            };
        }
        case 'SIGNUP_ERROR':{
            return{
                ...state,
                authErr:action.err,
            };
        }
        default:{
            return{
                ...state,
                authErr:{},
            };
        }
    }
}

export default authReducer;