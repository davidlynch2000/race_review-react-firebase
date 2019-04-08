const initState = {

};

const settingsReducer = (state = initState,action) =>{
    switch(action.type){
        case 'EDIT_SETTINGS':{
            return{
                ...state,
            }
        }
        case 'EDIT_SETTINGS_ERROR':{
            return{
                ...state,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default settingsReducer;