import * as actionTypes from './../action/action-types'
const initialState = {
    isOpen:false,
    isSent:false
}

export const modalReducer = (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.OPEN_MODAL :
            return {...state,isOpen:true }
            case actionTypes.CLOSE_MODAL :
        
                    return {...state,isOpen:false,isSent:false }
                
                case actionTypes.SEND_EMAIL :
                    return {...state,isOpen:false,isSent:true }
                    case actionTypes.CLOSE_EMAIL :
                    return {...state,isOpen:false,isSent:false }
        default:
            return state
        }
}