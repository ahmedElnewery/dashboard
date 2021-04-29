import * as actionTypes from './action-types'

export const openModal = () => {
    return {type:actionTypes.OPEN_MODAL}
} 

export const closeModal = () => {
    return {type:actionTypes.CLOSE_MODAL}
} 
export const sendEmail = () => {
    return {type:actionTypes.SEND_EMAIL}
} 
export const closeEmail = () => {
    return {type:actionTypes.CLOSE_EMAIL}
} 